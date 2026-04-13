import { Button } from "@/components/atoms/Button";

const tiers = [
  {
    title: "Initial Review",
    subtitle: "For businesses needing a gap analysis before formal application.",
    price: "$2,500",
    suffix: "/ flat fee",
    features: ["Lender-Ready Audit", "Financial Gap Analysis", "1-Year Forecast Review"],
    cta: "Get Started",
  },
  {
    title: "Full Package",
    subtitle: "The gold standard for SBA 7(a) and 504 loan applications.",
    price: "$7,500",
    suffix: "/ flat fee",
    features: [
      "Complete Narrative Plan",
      "5-Year Integrated Projections",
      "Debt Service Coverage Ratios",
      "Market & Industry Benchmarking",
    ],
    cta: "Select Full Package",
    featured: true,
  },
  {
    title: "Accelerated Case",
    subtitle: "High-priority support for complex deals or rapid closings.",
    price: "Custom",
    suffix: "/ quote",
    features: ["10-Day Expedited Delivery", "Lender Introduction Support", "Unlimited Underwriting Q&A"],
    cta: "Consult with Us",
  },
];

export function SbaReadinessPackages() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold text-charcoal md:text-5xl">Readiness Packages</h2>
          <p className="mt-4 text-lg text-slate-600">
            Select the tier that aligns with your current preparation level and funding requirements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.title}
              className={`relative flex flex-col rounded-xl border p-10 transition-all ${
                tier.featured
                  ? "-translate-y-0 border-navy bg-navy shadow-2xl md:-translate-y-4"
                  : "border-slate-200 bg-white hover:shadow-2xl"
              }`}
            >
              {tier.featured ? (
                <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  Most Recommended
                </span>
              ) : null}

              <div className="mb-8">
                <h3 className={`text-2xl font-bold ${tier.featured ? "text-white" : "text-charcoal"}`}>{tier.title}</h3>
                <p className={`mt-2 text-sm ${tier.featured ? "text-slate-400" : "text-slate-600"}`}>{tier.subtitle}</p>
              </div>

              <div className={`mb-8 text-4xl font-extrabold ${tier.featured ? "text-white" : "text-charcoal"}`}>
                {tier.price} <span className={`text-sm font-medium ${tier.featured ? "text-slate-400" : "text-slate-500"}`}>{tier.suffix}</span>
              </div>

              <ul className="mb-10 flex-grow space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-sm font-medium ${tier.featured ? "text-white" : "text-charcoal"}`}>
                    <span className="material-symbols-outlined text-[20px] text-primary">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.featured ? (
                <Button className="w-full bg-primary text-white hover:bg-primary/90">{tier.cta}</Button>
              ) : (
                <Button variant="secondary" className="w-full border-navy text-navy hover:bg-navy hover:text-white">
                  {tier.cta}
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
