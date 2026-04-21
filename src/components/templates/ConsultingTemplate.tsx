import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ConsultingAdvantage } from "@/components/organisms/consulting/ConsultingAdvantage";
import { ConsultingCaseStudy } from "@/components/organisms/consulting/ConsultingCaseStudy";
import { ConsultingCta } from "@/components/organisms/consulting/ConsultingCta";
import { ConsultingEngagementAreas } from "@/components/organisms/consulting/ConsultingEngagementAreas";
import { ConsultingHero } from "@/components/organisms/consulting/ConsultingHero";

type ConsultingTemplateProps = {
  title: string;
  paragraphs: string[];
};

export function ConsultingTemplate({ title, paragraphs }: ConsultingTemplateProps) {
  const heroTitle = title === "Consulting" ? "Elite Strategic Advisory" : title;

  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <ConsultingHero description={paragraphs[0]} title={heroTitle} />
      <ConsultingEngagementAreas paragraphs={paragraphs} />
      <ConsultingCaseStudy paragraphs={paragraphs} serviceTitle={title} />
      <ConsultingAdvantage />
      <ConsultingCta />
      <SiteFooter />
    </main>
  );
}
