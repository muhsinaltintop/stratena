import { FinalCtaSection } from "@/components/organisms/FinalCtaSection";
import { Hero } from "@/components/organisms/Hero";
import { ProcessSection } from "@/components/organisms/ProcessSection";
import { ProofSection } from "@/components/organisms/ProofSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SpecializationsSection } from "@/components/organisms/SpecializationsSection";

export function LandingTemplate() {
  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <Hero />
      <SpecializationsSection />
      <ProofSection />
      <ProcessSection />
      <ServicesSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
