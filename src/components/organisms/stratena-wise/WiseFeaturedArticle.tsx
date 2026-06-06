import Image from "next/image";
import Link from "next/link";
import { featuredStratenaWiseIssue } from "@/lib/stratena-wise-issues";

export function WiseFeaturedArticle() {
  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-20">
      <article className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-2xl">
        <div className="grid items-stretch gap-0 md:grid-cols-2">
          <div className="flex flex-col justify-center p-10 md:p-14">
            <span className="mb-6 text-[12px] font-bold uppercase tracking-widest text-primary">
              Featured Issue
            </span>
            <h2 className="mb-8 text-4xl font-extrabold leading-[1.1] text-navy md:text-5xl">
              {featuredStratenaWiseIssue.issue}: {featuredStratenaWiseIssue.title}
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600">{featuredStratenaWiseIssue.summary}</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={`/stratena-wise/${featuredStratenaWiseIssue.slug}`}
                className="inline-flex items-center gap-2 rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-primary"
              >
                Read Issue
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <span className="text-sm font-semibold text-slate-400">{featuredStratenaWiseIssue.language}</span>
            </div>
          </div>

          <div className="relative min-h-[380px] md:min-h-[500px]">
            <Image
              src={featuredStratenaWiseIssue.image}
              alt={`${featuredStratenaWiseIssue.title} visual`}
              fill
              className="object-cover grayscale contrast-125"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>
        </div>
      </article>
    </section>
  );
}
