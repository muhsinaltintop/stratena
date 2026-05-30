import type { ContactFormData } from "./schema";

const controlCharacters = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const headerCharacters = /[\r\n]/g;

export function sanitizeText(value: string) {
  return value.replace(controlCharacters, "").trim();
}

export function sanitizeEmailHeader(value: string) {
  return sanitizeText(value).replace(headerCharacters, "");
}

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function sanitizeContactSubmission(data: ContactFormData): ContactFormData {
  return {
    name: sanitizeText(data.name),
    email: sanitizeEmailHeader(data.email).toLowerCase(),
    phone: sanitizeText(data.phone),
    message: sanitizeText(data.message),
    turnstileToken: sanitizeEmailHeader(data.turnstileToken)
  };
}
