import { SitePage } from "@/lib/site-content";
import { GenericSiteHeader } from "@/components/organisms/GenericSiteHeader";
import { GenericSiteFooter } from "@/components/organisms/GenericSiteFooter";

type ContentTemplateProps = {
  page: SitePage;
};

export function ContentTemplate({ page }: ContentTemplateProps) {
  return (
    <main className="min-h-screen bg-[#f6f8fc] text-[#23314f]">
      <GenericSiteHeader />

      <section className="border-b border-[#d6dce8] bg-[#e8eef8] px-6 py-14 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#4f638d]">Stratena Legacy Content</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl">{page.title}</h1>
        </div>
      </section>

      <section className="px-6 py-14 lg:px-20">
        <div className="mx-auto max-w-5xl space-y-8 text-lg leading-relaxed text-[#33456b]">
          {page.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <GenericSiteFooter />
    </main>
  );
}
