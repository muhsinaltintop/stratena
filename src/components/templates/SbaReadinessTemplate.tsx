import Link from "next/link";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SbaReadinessCta } from "@/components/organisms/sba-readiness/SbaReadinessCta";
import { SbaReadinessDeliverables } from "@/components/organisms/sba-readiness/SbaReadinessDeliverables";
import { SbaReadinessFaq } from "@/components/organisms/sba-readiness/SbaReadinessFaq";
import { SbaReadinessHero } from "@/components/organisms/sba-readiness/SbaReadinessHero";
import { SbaReadinessTestimonials } from "@/components/organisms/sba-readiness/SbaReadinessTestimonials";

type SbaReadinessTemplateProps = {
  paragraphs: string[];
};

export function SbaReadinessTemplate({ paragraphs }: SbaReadinessTemplateProps) {
  const description =
    paragraphs[0] ??
    "Get lender-ready for your SBA loan application with strategic business plans, financial projections, documentation support, and expert readiness consulting tailored to U.S. lenders.";

  return (
    <main className="bg-background-light pb-20 text-charcoal md:pb-0">
      <SiteHeader />
      <SbaReadinessHero description={description} />
      <SbaReadinessDeliverables />
      <SbaReadinessTestimonials />
      <SbaReadinessFaq />
      <SbaReadinessCta />
      <SiteFooter />

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <Link
          href="/contact"
          className="block rounded-xl bg-navy px-4 py-3 text-center text-sm font-bold text-white shadow-lg hover:bg-primary"
        >
          Book Free Consultation
        </Link>
      </div>
    </main>
  );
}
