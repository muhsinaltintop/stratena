import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      {
        error:
          "SMTP is not configured. Add SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, and CONTACT_TO in your environment."
      },
      { status: 500 }
    );
  }

  try {
    const dynamicImporter = new Function("return import('nodemailer')");
    const nodemailer = await dynamicImporter();

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });

    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: CONTACT_TO ?? "info@stratena.com",
      replyTo: payload.email,
      subject: `New contact form submission from ${payload.name}`,
      text: `Name: ${payload.name}\nEmail: ${payload.email}\nPhone: ${payload.phone ?? "N/A"}\n\nMessage:\n${payload.message}`
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        error:
          "Unable to send email. Ensure nodemailer is installed and SMTP credentials are valid. Run: npm install nodemailer"
      },
      { status: 500 }
    );
  }
}
