import { StatItem } from "@/components/molecules/StatItem";

export function ProofSection() {
  return (
    <section className="bg-slate-100 px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <div className="flex-1">
            <h2 className="mb-4 text-3xl font-bold text-charcoal">A Proven Track Record of Excellence</h2>
            <p className="text-slate-600">
              Our results speak for the quality of our strategic interventions across diverse market sectors.
            </p>
          </div>
          <div className="flex flex-wrap gap-12">
            <StatItem value="120+" label="Plans Delivered" />
            <StatItem value="35+" label="Industries Served" />
            <StatItem value="100%" label="High-Stakes Focus" />
          </div>
        </div>
      </div>
    </section>
  );
}
