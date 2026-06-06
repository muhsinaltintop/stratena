import Image from "next/image";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { stratenaWiseIssueLookup, stratenaWiseIssues } from "@/lib/stratena-wise-issues";

const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader" });

export const dynamicParams = false;

export function generateStaticParams() {
  return stratenaWiseIssues.map((issue) => ({ newsletter: issue.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ newsletter: string }>;
}): Promise<Metadata> {
  const { newsletter } = await params;
  const issue = stratenaWiseIssueLookup[newsletter];

  if (!issue) {
    return {
      title: "Issue Not Found | Stratena Wise",
    };
  }

  return {
    title: `${issue.issue} | ${issue.title} | Stratena Wise`,
    description: issue.summary,
  };
}

function renderIssueBody(body: string) {
  return body.split("\n").map((line, index) => {
    const key = `${index}-${line}`;

    if (line === "---") {
      return <hr key={key} className="my-10 border-slate-200" />;
    }

    if (line.startsWith("## ")) {
      return (
        <h2
          key={key}
          className="mb-5 mt-12 text-3xl font-semibold leading-tight text-navy md:text-4xl"
          style={{ fontFamily: "var(--font-newsreader)" }}
        >
          {line.replace(/^## /, "")}
        </h2>
      );
    }

    if (line.startsWith("# ")) {
      return (
        <h1
          key={key}
          className="mb-5 mt-10 text-4xl font-semibold leading-tight text-navy md:text-5xl"
          style={{ fontFamily: "var(--font-newsreader)" }}
        >
          {line.replace(/^# /, "")}
        </h1>
      );
    }

    if (line.trim() === "") {
      return null;
    }

    return (
      <p key={key} className="mb-5 text-lg leading-8 text-slate-700">
        {line}
      </p>
    );
  });
}

export default async function NewsletterPage({
  params,
}: {
  params: Promise<{ newsletter: string }>;
}) {
  const { newsletter } = await params;
  const issue = stratenaWiseIssueLookup[newsletter];

  if (!issue) {
    notFound();
  }

  const relatedIssues = stratenaWiseIssues.filter((entry) => entry.slug !== issue.slug).slice(0, 2);

  return (
    <main className={`${newsreader.variable} bg-[#f4f0e8] text-slate-900`}>
      <SiteHeader />

      <section className="relative isolate overflow-hidden border-b border-black/5 bg-[linear-gradient(180deg,#fbf7f0_0%,#f1ebe1_100%)]">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#dcae65]/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#564a64]/12 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-20 lg:py-20">
          <div className="relative">
            <Link
              href="/stratena-wise"
              className="mb-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-500 transition-colors hover:text-primary"
            >
              <span className="material-symbols-outlined text-base">west</span>
              Back to Stratena Wise
            </Link>
            <div className="mb-5 inline-flex rounded-full border border-black/10 bg-white/70 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              {issue.publication} {issue.issue}
            </div>
            <h1
              className="max-w-4xl text-4xl font-semibold leading-tight text-navy md:text-6xl"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              {issue.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">{issue.summary}</p>
          </div>

          <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-navy shadow-[0_30px_80px_rgba(30,42,56,0.18)]">
            <Image
              src={issue.image}
              alt={`${issue.title} header image`}
              width={1920}
              height={1080}
              className="h-auto w-full"
              sizes="(min-width: 1280px) 1120px, calc(100vw - 48px)"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-20 lg:py-20">
        <article className="overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-[0_24px_60px_rgba(20,32,43,0.08)]">
          <div className="px-7 py-10 md:px-12 md:py-14">{renderIssueBody(issue.body)}</div>
        </article>
      </section>

      {relatedIssues.length > 0 ? (
        <section className="border-t border-black/5 bg-[#efe7dc] px-6 py-16 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.26em] text-slate-500">Continue Reading</p>
                <h2 className="mt-3 text-4xl text-navy" style={{ fontFamily: "var(--font-newsreader)" }}>
                  More from Stratena Wise
                </h2>
              </div>
              <Link href="/stratena-wise" className="text-sm font-semibold text-primary transition-colors hover:text-navy">
                View all issues
              </Link>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {relatedIssues.map((relatedIssue) => (
                <Link
                  key={relatedIssue.slug}
                  href={`/stratena-wise/${relatedIssue.slug}`}
                  className="group rounded-[1.75rem] border border-black/8 bg-white p-7 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    {relatedIssue.issue} • {relatedIssue.publication}
                  </p>
                  <h3
                    className="mt-4 text-3xl leading-tight text-navy transition-colors group-hover:text-primary"
                    style={{ fontFamily: "var(--font-newsreader)" }}
                  >
                    {relatedIssue.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{relatedIssue.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SiteFooter />
    </main>
  );
}
