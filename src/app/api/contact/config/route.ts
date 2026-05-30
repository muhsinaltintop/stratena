import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const siteKey = process.env.TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return NextResponse.json(
      { error: "Contact form security is not configured. Please contact Stratena directly at info@stratena.com." },
      { status: 503 }
    );
  }

  return NextResponse.json({ siteKey });
}
