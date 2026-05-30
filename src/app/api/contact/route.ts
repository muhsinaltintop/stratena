import { NextResponse } from "next/server";
import { sendContactEmails } from "@/lib/contact/email-service";
import { checkContactRateLimit } from "@/lib/contact/rate-limit";
import { contactFormSchema, flattenContactValidationErrors } from "@/lib/contact/schema";
import { sanitizeContactSubmission } from "@/lib/contact/sanitize";
import { verifyTurnstileToken } from "@/lib/contact/turnstile";

export const dynamic = "force-dynamic";

type ContactApiResponse = {
  ok?: true;
  error?: string;
  fieldErrors?: Record<string, string>;
};

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = request.headers.get("x-real-ip")?.trim();
  const cfConnectingIp = request.headers.get("cf-connecting-ip")?.trim();

  return cfConnectingIp || forwardedFor || realIp || "anonymous";
}

async function readJson(request: Request) {
  try {
    return await request.json();
  } catch {
    return null;
  }
}

export async function POST(request: Request) {
  const clientIp = getClientIp(request);
  const rateLimit = checkContactRateLimit(clientIp);

  if (!rateLimit.allowed) {
    return NextResponse.json<ContactApiResponse>(
      { error: "Too many contact form attempts. Please wait a few minutes and try again." },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) }
      }
    );
  }

  const payload = await readJson(request);
  const validation = contactFormSchema.safeParse(payload);

  if (!validation.success) {
    return NextResponse.json<ContactApiResponse>(
      {
        error: "Please correct the highlighted fields and try again.",
        fieldErrors: flattenContactValidationErrors(validation.error)
      },
      { status: 400 }
    );
  }

  const submission = sanitizeContactSubmission(validation.data);
  const turnstile = await verifyTurnstileToken(submission.turnstileToken, clientIp === "anonymous" ? undefined : clientIp);

  if (!turnstile.success) {
    return NextResponse.json<ContactApiResponse>(
      { error: turnstile.message ?? "Security check failed. Please try again." },
      { status: 400 }
    );
  }

  const emailResult = await sendContactEmails(submission);

  if (!emailResult.success) {
    return NextResponse.json<ContactApiResponse>(
      { error: emailResult.message ?? "Unable to send your message right now. Please try again later." },
      { status: 500 }
    );
  }

  return NextResponse.json<ContactApiResponse>({ ok: true });
}
