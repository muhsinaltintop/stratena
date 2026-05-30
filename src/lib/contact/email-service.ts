import { Resend } from "resend";
import type { ContactFormData } from "./schema";
import {
  renderConfirmationEmail,
  renderConfirmationText,
  renderInternalNotificationEmail,
  renderInternalNotificationText
} from "./email-templates";
import { sanitizeEmailHeader } from "./sanitize";

const officialContactEmail = "info@stratena.com";
const fromAddress = `Stratena <${officialContactEmail}>`;

export type EmailDeliveryResult = {
  success: boolean;
  message?: string;
};

function getContactReceiver() {
  return sanitizeEmailHeader(process.env.CONTACT_RECEIVER || officialContactEmail);
}

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function sendContactEmails(submission: ContactFormData, submittedAt = new Date()): Promise<EmailDeliveryResult> {
  const resend = getResendClient();

  if (!resend) {
    return {
      success: false,
      message: "Email delivery is not configured. Please contact Stratena directly at info@stratena.com."
    };
  }

  const receiver = getContactReceiver();
  const userEmail = sanitizeEmailHeader(submission.email);

  try {
    const [internalResult, confirmationResult] = await Promise.all([
      resend.emails.send({
        from: fromAddress,
        to: receiver,
        replyTo: userEmail,
        subject: "New Contact Form Submission",
        html: renderInternalNotificationEmail(submission, submittedAt),
        text: renderInternalNotificationText(submission, submittedAt)
      }),
      resend.emails.send({
        from: fromAddress,
        to: userEmail,
        replyTo: officialContactEmail,
        subject: "Thank You for Contacting Stratena",
        html: renderConfirmationEmail(submission),
        text: renderConfirmationText(submission)
      })
    ]);

    if (internalResult.error || confirmationResult.error) {
      return { success: false, message: "Unable to send your message right now. Please try again later." };
    }

    return { success: true };
  } catch {
    return { success: false, message: "Unable to send your message right now. Please try again later." };
  }
}
