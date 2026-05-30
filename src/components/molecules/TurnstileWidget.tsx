"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire: () => void;
  onError: (message: string) => void;
};

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
      theme: "dark" | "light" | "auto";
    }
  ) => string;
  reset: (widgetId?: string) => void;
  remove: (widgetId?: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    onTurnstileLoad?: () => void;
  }
}

const scriptId = "cloudflare-turnstile-script";

export function TurnstileWidget({ onVerify, onExpire, onError }: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [siteKey, setSiteKey] = useState<string | null>(null);
  const [configError, setConfigError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    async function loadSiteKey() {
      try {
        const response = await fetch("/api/contact/config", { cache: "no-store" });
        const result = (await response.json()) as { siteKey?: string; error?: string };

        if (!active) {
          return;
        }

        if (!response.ok || !result.siteKey) {
          setConfigError(result.error ?? "Contact form security is not configured.");
          onError(result.error ?? "Contact form security is not configured.");
          return;
        }

        setSiteKey(result.siteKey);
      } catch {
        if (active) {
          const message = "Unable to load the security check. Please refresh the page and try again.";
          setConfigError(message);
          onError(message);
        }
      }
    }

    loadSiteKey();

    return () => {
      active = false;
    };
  }, [onError]);

  const renderWidget = useCallback(() => {
    if (!siteKey || !containerRef.current || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: siteKey,
      callback: onVerify,
      "expired-callback": onExpire,
      "error-callback": () => onError("Security check failed to load. Please try again."),
      theme: "dark"
    });
  }, [onError, onExpire, onVerify, siteKey]);

  useEffect(() => {
    if (!siteKey) {
      return undefined;
    }

    if (window.turnstile) {
      renderWidget();
      return undefined;
    }

    window.onTurnstileLoad = renderWidget;

    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onTurnstileLoad&render=explicit";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
      }
      widgetIdRef.current = null;
    };
  }, [renderWidget, siteKey]);

  if (configError) {
    return <p className="text-sm text-rose-300">{configError}</p>;
  }

  return <div ref={containerRef} />;
}
