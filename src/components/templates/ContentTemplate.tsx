import Link from "next/link";
import { SitePage, NAV_ITEMS } from "@/lib/site-content";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";

type ContentTemplateProps = {
  page: SitePage;
};

export function ContentTemplate({ page }: ContentTemplateProps) {
  return (
    <main className="min-h-screen bg-background-light text-slate-900">
      <SiteHeader />
      <section className="border-b border-slate-200 bg-white px-6 py-14 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Stratena</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{page.title}</h1>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-relaxed text-slate-700">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-14 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold">Explore All Pages</h2>
          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
