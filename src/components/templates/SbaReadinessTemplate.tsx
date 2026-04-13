import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SbaReadinessCta } from "@/components/organisms/sba-readiness/SbaReadinessCta";
import { SbaReadinessDeliverables } from "@/components/organisms/sba-readiness/SbaReadinessDeliverables";
import { SbaReadinessFaq } from "@/components/organisms/sba-readiness/SbaReadinessFaq";
import { SbaReadinessHero } from "@/components/organisms/sba-readiness/SbaReadinessHero";
import { SbaReadinessPackages } from "@/components/organisms/sba-readiness/SbaReadinessPackages";

type SbaReadinessTemplateProps = {
  paragraphs: string[];
};

export function SbaReadinessTemplate({ paragraphs }: SbaReadinessTemplateProps) {
  const description =
    paragraphs[0] ??
    "Accelerate your funding timeline with meticulously structured business plans and financial models designed to meet strict lender underwriting requirements.";

  return (
    <main className="bg-background-light text-charcoal">
      <SiteHeader />
      <SbaReadinessHero description={description} />
      <SbaReadinessPackages />
      <SbaReadinessDeliverables />
      <SbaReadinessFaq />
      <SbaReadinessCta />
      <SiteFooter />
    </main>
  );
}
