import Link from "next/link";
import { Button } from "@/components/atoms/Button";

const tiers = [
  {
    title: "Starter Package",
    subtitle: "For early-stage SBA loan applicants who need structure before submitting.",
    features: ["SBA readiness review", "Document checklist", "Consultation call"],
    cta: "Choose Starter",
  },
  {
    title: "Growth Package",
    subtitle: "Our most selected option for borrowers who need a lender ready SBA package.",
    features: [
      "Lender-ready SBA loan business plan",
      "3-year SBA loan financial projections",
      "SBA loan application guidance",
      "Revisions support",
    ],
    cta: "Start Growth Package",
    featured: true,
  },
  {
    title: "Premium Funding Package",
    subtitle: "For complex loans, larger requests, franchise purchases, or acquisition funding.",
    features: [
      "Everything in Growth",
      "Investor-grade strategy deck",
      "Advanced projections and sensitivity scenarios",
      "Priority turnaround",
      "1:1 advisory support",
    ],
    cta: "Talk to an Advisor",
  },
];

export function SbaReadinessPackages() {
  return (
    <section id="packages" className="bg-white px-6 py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <h2 className="text-4xl font-extrabold text-charcoal md:text-5xl">SBA Funding Preparation Packages Built for Real Underwriting</h2>
          <p className="mt-4 text-lg text-slate-600">
            Choose the level of SBA startup loan support that matches your timeline, lender requirements, and business stage.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className={`relative flex flex-col rounded-xl border p-8 transition-all lg:p-10 ${
                tier.featured
                  ? "border-navy bg-navy shadow-2xl md:-translate-y-3"
                  : "border-slate-200 bg-white hover:-translate-y-1 hover:shadow-2xl"
              }`}
            >
              {tier.featured ? (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  Most Popular
                </span>
              ) : null}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold ${tier.featured ? "text-white" : "text-charcoal"}`}>{tier.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${tier.featured ? "text-slate-300" : "text-slate-600"}`}>{tier.subtitle}</p>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-start gap-3 text-sm font-medium ${tier.featured ? "text-white" : "text-charcoal"}`}>
                    <span className="material-symbols-outlined mt-0.5 text-[20px] text-primary">check_circle</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="#book-consultation" className="mt-auto">
                {tier.featured ? (
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">{tier.cta}</Button>
                ) : (
                  <Button variant="secondary" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                    {tier.cta}
                  </Button>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
