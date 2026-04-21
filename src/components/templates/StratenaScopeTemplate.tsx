import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ScopeHero } from "@/components/organisms/stratena-scope/ScopeHero";
import { ScopeNewsletterCta } from "@/components/organisms/stratena-scope/ScopeNewsletterCta";

export function StratenaScopeTemplate() {
  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <ScopeHero />
      <section className="mx-auto mb-20 max-w-7xl px-6 lg:px-20">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <h2 className="text-3xl font-extrabold text-navy">Editorial Launch in Progress</h2>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-600">
            Stratena Scope is being prepared as a premium publication focused on U.S. macroeconomic developments,
            corporate performance trends, and policy-linked business implications. Our editorial framework is designed
            for founders, operators, advisors, and leadership teams that require concise, decision-ready intelligence.
          </p>
          <p className="mt-4 max-w-4xl text-lg leading-relaxed text-slate-600">
            Initial issues will feature executive briefings on American market direction, sector-level dynamics, and
            strategic planning signals that influence growth, hiring, capital access, and operational risk management.
          </p>
        </div>
      </section>
      <ScopeNewsletterCta />
      <SiteFooter />
    </main>
  );
}
