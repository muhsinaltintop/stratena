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
      <BusinessPlanDetailBlocks />
      <BusinessPlanFinalCta />
      <SiteFooter />
    </main>
  );
}
