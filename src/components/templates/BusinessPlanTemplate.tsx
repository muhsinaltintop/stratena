import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { BusinessPlanDetailBlocks } from "@/components/organisms/business-plan/BusinessPlanDetailBlocks";
import { BusinessPlanFinalCta } from "@/components/organisms/business-plan/BusinessPlanFinalCta";
import { BusinessPlanHero } from "@/components/organisms/business-plan/BusinessPlanHero";
import { BusinessPlanStandards } from "@/components/organisms/business-plan/BusinessPlanStandards";

type BusinessPlanTemplateProps = {
  title: string;
  paragraphs: string[];
  isSubpage?: boolean;
};

const fallbackDescription = "High-stakes business planning built for USCIS compliance, legal strategy, and confident execution.";

function toExcerpt(text: string, maxLength = 260) {
  if (text.length <= maxLength) return text;
  const clipped = text.slice(0, maxLength);
  const safeCut = clipped.lastIndexOf(" ");
  return `${clipped.slice(0, safeCut > 80 ? safeCut : maxLength).trimEnd()}...`;
}

export function BusinessPlanTemplate({ title, paragraphs, isSubpage = false }: BusinessPlanTemplateProps) {
  const descriptionSource = paragraphs[0] ?? fallbackDescription;
  const description = isSubpage ? toExcerpt(descriptionSource) : descriptionSource;
  const standardLead = paragraphs[1] ?? "A Stratena plan is not just a document; it is a legal defense engineered to pre-emptively address RFE triggers.";
  const businessPlanImages = ["/business-plan.png", "/business-plan-2.png"];
  const heroImage = businessPlanImages[Math.floor(Math.random() * businessPlanImages.length)];
  const bodyParagraphs = isSubpage ? paragraphs.slice(1) : paragraphs;

  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <BusinessPlanHero title={title} description={description} imageSrc={heroImage} />
      <BusinessPlanStandards lead={standardLead} />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-20">
          <h2 className="mb-10 text-3xl font-extrabold leading-tight text-charcoal md:text-4xl">{title}</h2>
          <div className="space-y-8">
            {bodyParagraphs.map((paragraph) => (
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
