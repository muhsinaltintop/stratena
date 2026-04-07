import { StatItem } from "@/components/molecules/StatItem";

export function ProofSection() {
  return (
    <section className="bg-slate-100 px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">
              Strong business documents should reflect a strong business strategy.
            </h2>
            <p className="text-slate-600">
              Stratena combines business planning, market research, operational thinking, and financial clarity to
              create materials that are useful in real decision-making environments.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <StatItem value="Immigration" label="Business Plans" />
            <StatItem value="SBA" label="Loan Readiness" />
            <StatItem value="Attorney" label="Hub Support" />
          </div>
        </div>
      </div>
    </section>
  );
}
