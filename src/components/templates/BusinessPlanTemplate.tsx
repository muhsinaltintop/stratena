import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { BusinessPlanDetailBlocks } from "@/components/organisms/business-plan/BusinessPlanDetailBlocks";
import { BusinessPlanFinalCta } from "@/components/organisms/business-plan/BusinessPlanFinalCta";
import { BusinessPlanHero } from "@/components/organisms/business-plan/BusinessPlanHero";
import { BusinessPlanStandards } from "@/components/organisms/business-plan/BusinessPlanStandards";

type BusinessPlanTemplateProps = {
  title: string;
  paragraphs: string[];
};

export function BusinessPlanTemplate({ title, paragraphs }: BusinessPlanTemplateProps) {
  const description = paragraphs[0] ?? "High-stakes business planning built for USCIS compliance, legal strategy, and confident execution.";
  const standardLead = paragraphs[1] ?? "A Stratena plan is not just a document; it is a legal defense engineered to pre-emptively address RFE triggers.";

  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <BusinessPlanHero title={title} description={description} />
      <BusinessPlanStandards lead={standardLead} />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-20">
          <h2 className="mb-10 text-3xl font-extrabold leading-tight text-charcoal md:text-4xl">{title}</h2>
          <div className="space-y-8">
            {paragraphs.map((paragraph) => (
              <p className="text-lg leading-relaxed text-slate-700" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <BusinessPlanDetailBlocks />
      <BusinessPlanFinalCta />
      <SiteFooter />
    </main>
  );
}
