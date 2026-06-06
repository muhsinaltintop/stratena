import Link from "next/link";
import Image from "next/image";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { WiseHero } from "@/components/organisms/stratena-wise/WiseHero";
import { WiseNewsletterCta } from "@/components/organisms/stratena-wise/WiseNewsletterCta";
import { stratenaWiseIssues } from "@/lib/stratena-wise-issues";

export function StratenaWiseTemplate() {
  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <WiseHero />
      <section className="mx-auto mb-20 max-w-7xl px-6 lg:px-20">
        <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">Available Issues</p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy">Read Stratena Wise</h2>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-slate-600">
            Each issue is maintained as structured publication data so future Stratena Wise issues can be added without
            placing article content directly on this landing page.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stratenaWiseIssues.map((issue) => (
            <article
              key={issue.slug}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={issue.image}
                  alt={`${issue.title} visual`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="p-8">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">
                  <span className="rounded-full bg-primary/10 px-3 py-1.5 text-primary">{issue.issue}</span>
                  <span>{issue.language}</span>
                </div>
                <h3 className="text-2xl font-extrabold leading-tight text-navy transition-colors group-hover:text-primary">
                  {issue.title}
                </h3>
                <p className="mt-4 line-clamp-3 text-base leading-relaxed text-slate-600">{issue.summary}</p>
                <Link
                  href={`/stratena-wise/${issue.slug}`}
                  className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-navy"
                >
                  Read Issue
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <WiseNewsletterCta />
      <SiteFooter />
    </main>
  );
}
