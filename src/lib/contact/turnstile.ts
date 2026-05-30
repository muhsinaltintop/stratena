type TurnstileResponse = {
  success: boolean;
  "error-codes"?: string[];
  challenge_ts?: string;
  hostname?: string;
};

export type TurnstileVerificationResult = {
  success: boolean;
  message?: string;
};

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export async function verifyTurnstileToken(token: string, remoteIp?: string): Promise<TurnstileVerificationResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    return {
      success: false,
      message: "Contact form security is not configured. Please contact Stratena directly at info@stratena.com."
    };
  }

  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);

  if (remoteIp) {
    body.append("remoteip", remoteIp);
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      body,
      cache: "no-store"
    });

    if (!response.ok) {
      return { success: false, message: "Unable to verify the security check. Please try again." };
    }

    const result = (await response.json()) as TurnstileResponse;

    if (!result.success) {
      return { success: false, message: "Security check failed. Please refresh the page and try again." };
    }

    return { success: true };
  } catch {
    return { success: false, message: "Unable to verify the security check. Please try again." };
  }
}
