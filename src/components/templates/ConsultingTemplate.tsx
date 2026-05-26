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
  currentPath: string;
};

export function ConsultingTemplate({ title, paragraphs, currentPath }: ConsultingTemplateProps) {
  const heroTitle = title === "Consulting" ? "Elite Strategic Advisory" : title;

  const consultingHeroImageByPath: Record<string, string> = {
    "/consulting": "https://lh3.googleusercontent.com/aida-public/AB6AXuBywYAErMxYQ4-i1_p80eEfG7_n2AKk9sICkEj1VLEJdp4TD9vCYcQSYsJvJy6EpMk98Fceg8RfOlfVt2GDwFrLls0W39aPFxQSCQldMh3-YFGvsZc9w4SXjoG4P3-Wv73C-jfwQt4lklTkG1wc_JUl_aaegDpCNRqYeML_7jL63G9daVwgkFiJ2ZAeNHDgBXlehhyXr1WiRRS9OG7KpZv7Wxv57i3v37fGdqRF6ApoZ__6_zERR6AJjQA0jXTL_PXWBRs6FmVlNfjV",
    "/consulting/strategy-consulting": "https://lh3.googleusercontent.com/aida-public/AB6AXuBywYAErMxYQ4-i1_p80eEfG7_n2AKk9sICkEj1VLEJdp4TD9vCYcQSYsJvJy6EpMk98Fceg8RfOlfVt2GDwFrLls0W39aPFxQSCQldMh3-YFGvsZc9w4SXjoG4P3-Wv73C-jfwQt4lklTkG1wc_JUl_aaegDpCNRqYeML_7jL63G9daVwgkFiJ2ZAeNHDgBXlehhyXr1WiRRS9OG7KpZv7Wxv57i3v37fGdqRF6ApoZ__6_zERR6AJjQA0jXTL_PXWBRs6FmVlNfjV",
    "/consulting/operations-consulting": "https://lh3.googleusercontent.com/aida-public/AB6AXuBywYAErMxYQ4-i1_p80eEfG7_n2AKk9sICkEj1VLEJdp4TD9vCYcQSYsJvJy6EpMk98Fceg8RfOlfVt2GDwFrLls0W39aPFxQSCQldMh3-YFGvsZc9w4SXjoG4P3-Wv73C-jfwQt4lklTkG1wc_JUl_aaegDpCNRqYeML_7jL63G9daVwgkFiJ2ZAeNHDgBXlehhyXr1WiRRS9OG7KpZv7Wxv57i3v37fGdqRF6ApoZ__6_zERR6AJjQA0jXTL_PXWBRs6FmVlNfjV",
    "/consulting/financial-consulting": "https://lh3.googleusercontent.com/aida-public/AB6AXuBywYAErMxYQ4-i1_p80eEfG7_n2AKk9sICkEj1VLEJdp4TD9vCYcQSYsJvJy6EpMk98Fceg8RfOlfVt2GDwFrLls0W39aPFxQSCQldMh3-YFGvsZc9w4SXjoG4P3-Wv73C-jfwQt4lklTkG1wc_JUl_aaegDpCNRqYeML_7jL63G9daVwgkFiJ2ZAeNHDgBXlehhyXr1WiRRS9OG7KpZv7Wxv57i3v37fGdqRF6ApoZ__6_zERR6AJjQA0jXTL_PXWBRs6FmVlNfjV",
    "/consulting/partnership-protocols": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
  };

  const heroImageSrc = consultingHeroImageByPath[currentPath] ?? "/company-checkup.png";

  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <ConsultingHero description={paragraphs[0]} imageSrc={heroImageSrc} title={heroTitle} />
      <ConsultingEngagementAreas paragraphs={paragraphs} />
      <ConsultingCaseStudy paragraphs={paragraphs} serviceTitle={title} />
      <ConsultingAdvantage />
      <ConsultingCta />
      <SiteFooter />
    </main>
  );
}
