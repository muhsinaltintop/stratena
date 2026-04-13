import { StatItem } from "@/components/molecules/StatItem";

export function ProofSection() {
  return (
    <section className="bg-slate-100 px-6 py-20 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1fr_auto] md:items-stretch">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-charcoal">A Proven Track Record of Excellence</h2>
            <p className="text-slate-600">
              Our results speak for the quality of our strategic interventions across diverse market sectors.
            </p>
          </div>
          <div className="flex flex-wrap gap-8 sm:gap-12">
            <StatItem value="120+" label="Plans Delivered" />
            <StatItem value="35+" label="Industries Served" />
            <StatItem value="100%" label="High-Stakes Focus" />
          </div>
        </div>
        <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-lg md:mx-0 md:h-full md:max-h-[320px] md:w-auto">
          <img
            className="h-full w-full object-cover"
            alt="Consultants reviewing growth dashboards in a strategy session"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
          />
        </div>
      </div>
    </section>
  );
}
