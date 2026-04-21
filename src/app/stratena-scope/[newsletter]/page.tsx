import Image from "next/image";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { newsletterLookup, newsletters } from "@/lib/newsletters";
import { limitHeadingWords } from "@/lib/headings";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const dynamicParams = false;

export function generateStaticParams() {
  return newsletters.map((newsletter) => ({ newsletter: newsletter.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ newsletter: string }>;
}): Promise<Metadata> {
  const { newsletter } = await params;
  const article = newsletterLookup[newsletter];

  if (!article) {
    return {
      title: "Newsletter Not Found | Stratena Scope",
    };
  }

  return {
    title: `${article.issue} | ${article.title} | Stratena Scope`,
    description: article.summary,
  };
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ newsletter: string }>;
}) {
  const { newsletter } = await params;
  const article = newsletterLookup[newsletter];

  if (!article) {
    notFound();
  }

  const relatedArticles = newsletters.filter((entry) => entry.slug !== article.slug).slice(0, 2);
  const conciseHeading = limitHeadingWords(article.title);

  return (
    <main className={`${newsreader.variable} bg-[#f4f0e8] text-slate-900`}>
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-black/5 bg-[linear-gradient(180deg,#fbf7f0_0%,#f1ebe1_100%)]">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#dcae65]/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#564a64]/12 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[minmax(0,1.2fr)_360px] lg:px-20 lg:py-20">
          <div className="relative">
            <Link
              href="/stratena-scope"
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-500 transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">west</span>
              Back to Stratena Scope
            </Link>
            <div className="mb-5 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em] text-slate-500">
              <span className="rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-primary">{article.issue}</span>
              <span>{article.category}</span>
              <span>{article.publication}</span>
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#a55d36]">{article.accent}</p>
            <h1
              className="max-w-4xl text-3xl font-semibold leading-tight text-navy"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              {conciseHeading}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">{article.summary}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {article.keyPoints.map((point) => (
                <div key={point} className="rounded-[1.75rem] border border-black/8 bg-white/75 p-5 shadow-[0_18px_40px_rgba(30,42,56,0.06)] backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Key Signal</p>
                  <p className="mt-3 text-sm leading-6 text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-navy shadow-[0_30px_80px_rgba(30,42,56,0.18)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,174,101,0.35),_transparent_55%)]" />
            <div className="relative aspect-[4/5]">
              <Image src={article.heroImage} alt={article.heroAlt} fill className="object-cover mix-blend-luminosity opacity-70" sizes="360px" />
            </div>
            <div className="relative border-t border-white/10 px-7 py-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">BND Scope</p>
              <p className="mt-3 text-2xl leading-tight" style={{ fontFamily: "var(--font-newsreader)" }}>
                How markets absorb conflict-driven shocks when inflation risk is already elevated.
              </p>
              <p className="mt-4 text-sm text-slate-300">{article.readTime}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:px-20 lg:py-20">
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-[1.75rem] border border-black/8 bg-white/80 p-6 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Article Meta</p>
            <dl className="mt-5 space-y-4 text-sm text-slate-600">
              <div>
                <dt className="font-semibold text-slate-900">Published</dt>
                <dd>{article.publication}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Read time</dt>
                <dd>{article.readTime}</dd>
              </div>
              <div>
                <dt className="font-semibold text-slate-900">Series</dt>
                <dd>BND Scope</dd>
              </div>
            </dl>
          </div>
        </aside>

        <article className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(20,32,43,0.08)]">
          <div className="border-b border-slate-200/80 px-7 py-8 md:px-12">
            <p className="text-sm uppercase tracking-[0.22em] text-slate-500">Summary</p>
            <p
              className="mt-4 text-2xl leading-relaxed text-navy md:text-3xl"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              Rising oil prices are no longer just a market story. They are feeding directly into inflation,
              interest-rate expectations, and real economic activity.
            </p>
          </div>

          <div className="px-7 py-10 md:px-12 md:py-14">
            <div className="space-y-12">
              {article.sections.map((section) => (
                <section key={section.title}>
                  <h2
                    className="text-3xl font-semibold leading-tight text-navy md:text-4xl"
                    style={{ fontFamily: "var(--font-newsreader)" }}
                  >
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-5 text-lg leading-8 text-slate-700">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}

              <section className="rounded-[1.75rem] bg-[#1e2a38] px-7 py-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/55">Conclusion</p>
                <div className="mt-5 space-y-4 text-lg leading-8 text-slate-200">
                  {article.conclusion.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <p
                  className="mt-7 border-t border-white/10 pt-6 text-2xl leading-tight text-white"
                  style={{ fontFamily: "var(--font-newsreader)" }}
                >
                  In short: {article.closingNote}
                </p>
              </section>
            </div>
          </div>
        </article>
      </section>

      <section className="border-t border-black/5 bg-[#efe7dc] px-6 py-16 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-slate-500">Continue Reading</p>
              <h2 className="mt-3 text-4xl text-navy" style={{ fontFamily: "var(--font-newsreader)" }}>
                More from Stratena Scope
              </h2>
            </div>
            <Link href="/stratena-scope" className="text-sm font-semibold text-primary transition-colors hover:text-navy">
              View all issues
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {relatedArticles.map((relatedArticle) => (
              <Link
                key={relatedArticle.slug}
                href={`/stratena-scope/${relatedArticle.slug}`}
                className="group rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                  {relatedArticle.issue} • {relatedArticle.category}
                </p>
                <h3
                  className="mt-4 text-3xl leading-tight text-navy transition-colors group-hover:text-primary"
                  style={{ fontFamily: "var(--font-newsreader)" }}
                >
                  {relatedArticle.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{relatedArticle.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
