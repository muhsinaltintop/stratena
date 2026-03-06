# Stratena

Initial Next.js starter for Stratena, prepared with:

- Next.js App Router
- TypeScript
- Tailwind CSS
- Atomic Design based folder structure (`atoms`, `molecules`, `organisms`, `templates`)
- Admin panel starter route (`/admin`)

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Netlify Deployment

This project is configured for static export deployment on Netlify:

- `next.config.ts` uses `output: "export"` and `trailingSlash: true`
- `netlify.toml` publishes the generated `out/` directory

Build locally with:

```bash
npm run build
```

## Project Structure

```text
src/
  app/
    admin/page.tsx
    layout.tsx
    page.tsx
  components/
    atoms/
    molecules/
    organisms/
    templates/
  lib/
```
