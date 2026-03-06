import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { SectionHeader } from "@/components/molecules/SectionHeader";

export function Hero() {
  return (
    <section className="rounded-2xl bg-white p-10 shadow-sm">
      <SectionHeader
        eyebrow="Stratena"
        title="Build and manage your website with an admin-first workflow"
        description="This starter is powered by Next.js, TypeScript, Tailwind CSS, and an Atomic Design based component structure."
      />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/admin">
          <Button>Open Admin Panel</Button>
        </Link>
        <Button variant="secondary">Preview Site Content</Button>
      </div>
    </section>
  );
}
