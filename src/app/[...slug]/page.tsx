import Link from "next/link";
import { notFound } from "next/navigation";
import { pageLookup } from "@/lib/navigation";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const currentPath = `/${slug.join("/")}`;
  const page = pageLookup[currentPath];

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 py-20 lg:px-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {page.parent ? `${page.parent} · Service Page` : "Stratena"}
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-900">{page.title}</h1>
        <p className="mt-6 max-w-2xl text-base text-slate-600">
          This page has been created and linked to the navigation menu. You can replace this placeholder content
          with your final copy and service details.
        </p>
        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Contact Stratena
        </Link>
      </main>
    </div>
  );
}
