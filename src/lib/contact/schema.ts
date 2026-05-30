import { z } from "zod";

const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9()]{6,20}$/;
const normalizeString = (value: unknown) => (typeof value === "string" ? value : "");

export const contactFormSchema = z.object({
  name: z.preprocess(
    normalizeString,
    z.string().trim().min(1, "Full name is required.").min(2, "Full name must be at least 2 characters.")
  ),
  email: z.preprocess(
    normalizeString,
    z.string().trim().min(1, "Email address is required.").email("Please enter a valid email address.")
  ),
  phone: z.preprocess(
    normalizeString,
    z
      .string()
      .trim()
      .refine((value) => value.length === 0 || phoneRegex.test(value), {
        message: "Please enter a valid phone number."
      })
  ),
  message: z.preprocess(
    normalizeString,
    z.string().trim().min(1, "Message is required.").min(10, "Message must be at least 10 characters.")
  ),
  turnstileToken: z.preprocess(
    normalizeString,
    z.string().trim().min(1, "Please complete the security check.")
  )
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormData = z.output<typeof contactFormSchema>;

export function flattenContactValidationErrors(error: z.ZodError<ContactFormInput>) {
  return error.issues.reduce<Record<string, string>>((errors, issue) => {
    const field = issue.path[0];

    if (typeof field === "string" && !errors[field]) {
      errors[field] = issue.message;
    }

    return errors;
  }, {});
}
