# Stratena

Initial Next.js starter for Stratena, prepared with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Atomic Design based folder structure (`atoms`, `molecules`, `organisms`, `templates`)
- Admin panel starter route (`/admin`)
- Production contact form API using Zod, Cloudflare Turnstile, rate limiting, and Resend

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Contact Form Backend

The `/contact` form submits to the Next.js App Router API route at `/api/contact`. Phase 1 delivery is email-only: submissions are validated, protected with Cloudflare Turnstile, rate limited, sanitized, and sent through Resend without database persistence.

### Required packages

If dependencies need to be installed manually, use:

```bash
npm install zod resend
```

### Required environment variables

Environment variables are managed outside the repository. Do not commit `.env` files or secrets.

```text
RESEND_API_KEY
TURNSTILE_SITE_KEY
TURNSTILE_SECRET_KEY
CONTACT_RECEIVER
```

`CONTACT_RECEIVER` should be set to the official contact mailbox, `info@stratena.com`. The contact form also uses `info@stratena.com` as the sender and reply address for user confirmations.

### Provider setup

1. Verify the Stratena sending domain in Resend so `info@stratena.com` is authorized for transactional email.
2. Create a Cloudflare Turnstile widget for Stratena.com.
3. Add the Turnstile site key and secret key to the deployment environment.
4. Add the Resend API key and contact receiver address to the deployment environment.
5. Deploy with a Next.js runtime that supports App Router route handlers.

## Netlify Deployment

This project uses Next.js API route handlers for the contact form backend, so it should be deployed with the Netlify Next.js runtime rather than static export-only hosting.

Build locally with:

```bash
npm run build
```

## Project Structure

```text
src/
  app/
    admin/page.tsx
    api/contact/route.ts
    api/contact/config/route.ts
    contact/page.tsx
    layout.tsx
    page.tsx
  components/
    atoms/
    molecules/
    organisms/
    templates/
  lib/
    contact/
```
