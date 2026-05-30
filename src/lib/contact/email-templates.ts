import type { ContactFormData } from "./schema";
import { escapeHtml } from "./sanitize";

const websiteUrl = "https://stratena.com";

const baseStyles = `
  font-family: Arial, Helvetica, sans-serif;
  color: #1e293b;
  line-height: 1.6;
`;

function emailShell(content: string) {
  return `
    <div style="${baseStyles} background-color: #0f172a; padding: 32px;">
      <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden;">
        <div style="background: #111827; color: #ffffff; padding: 28px 32px;">
          <div style="font-size: 24px; font-weight: 700; letter-spacing: 0.02em;">Stratena</div>
          <div style="margin-top: 6px; color: #cbd5e1; font-size: 14px;">Strategic business advisory</div>
        </div>
        <div style="padding: 32px;">
          ${content}
        </div>
        <div style="background: #f8fafc; color: #64748b; padding: 20px 32px; font-size: 13px;">
          <p style="margin: 0;">Stratena • <a href="${websiteUrl}" style="color: #0f766e;">${websiteUrl}</a></p>
        </div>
      </div>
    </div>
  `;
}

export function renderInternalNotificationEmail(submission: ContactFormData, submittedAt: Date) {
  const phone = submission.phone || "Not provided";

  return emailShell(`
    <h1 style="margin: 0 0 20px; color: #0f172a; font-size: 24px;">New Contact Form Submission</h1>
    <p style="margin: 0 0 24px;">A new inquiry was submitted through Stratena.com.</p>
    <table role="presentation" cellspacing="0" cellpadding="0" style="width: 100%; border-collapse: collapse;">
      <tr><td style="padding: 12px 0; border-top: 1px solid #e2e8f0; font-weight: 700; width: 160px;">Full Name</td><td style="padding: 12px 0; border-top: 1px solid #e2e8f0;">${escapeHtml(submission.name)}</td></tr>
      <tr><td style="padding: 12px 0; border-top: 1px solid #e2e8f0; font-weight: 700;">Email Address</td><td style="padding: 12px 0; border-top: 1px solid #e2e8f0;"><a href="mailto:${escapeHtml(submission.email)}" style="color: #0f766e;">${escapeHtml(submission.email)}</a></td></tr>
      <tr><td style="padding: 12px 0; border-top: 1px solid #e2e8f0; font-weight: 700;">Phone Number</td><td style="padding: 12px 0; border-top: 1px solid #e2e8f0;">${escapeHtml(phone)}</td></tr>
      <tr><td style="padding: 12px 0; border-top: 1px solid #e2e8f0; font-weight: 700;">Submitted</td><td style="padding: 12px 0; border-top: 1px solid #e2e8f0;">${escapeHtml(submittedAt.toISOString())}</td></tr>
    </table>
    <div style="margin-top: 24px; padding: 20px; background: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0; white-space: pre-wrap;">${escapeHtml(submission.message)}</div>
  `);
}

export function renderInternalNotificationText(submission: ContactFormData, submittedAt: Date) {
  return [
    "New Contact Form Submission",
    "",
    `Full Name: ${submission.name}`,
    `Email Address: ${submission.email}`,
    `Phone Number: ${submission.phone || "Not provided"}`,
    `Submitted: ${submittedAt.toISOString()}`,
    "",
    "Message:",
    submission.message
  ].join("\n");
}

export function renderConfirmationText(submission: ContactFormData) {
  return [
    `Hello ${submission.name},`,
    "",
    "Thank you for contacting Stratena. We have received your inquiry and appreciate the opportunity to learn more about your goals.",
    "A team member will review your message and respond as soon as possible.",
    "",
    `Visit Stratena: ${websiteUrl}`
  ].join("\n");
}

export function renderConfirmationEmail(submission: ContactFormData) {
  return emailShell(`
    <h1 style="margin: 0 0 20px; color: #0f172a; font-size: 24px;">Thank You for Contacting Stratena</h1>
    <p style="margin: 0 0 16px;">Hello ${escapeHtml(submission.name)},</p>
    <p style="margin: 0 0 16px;">Thank you for contacting Stratena. We have received your inquiry and appreciate the opportunity to learn more about your goals.</p>
    <p style="margin: 0 0 24px;">A team member will review your message and respond as soon as possible.</p>
    <p style="margin: 0;">In the meantime, you can visit us at <a href="${websiteUrl}" style="color: #0f766e;">${websiteUrl}</a>.</p>
  `);
}
