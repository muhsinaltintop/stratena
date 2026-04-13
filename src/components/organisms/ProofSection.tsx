import { StatItem } from "@/components/molecules/StatItem";

export function ProofSection() {
  return (
    <section className="bg-slate-100 px-6 py-20 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[2fr_auto] md:items-center md:gap-4">
        <div className="flex flex-col gap-10 md:pl-4">
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
        <div className="mx-auto aspect-square w-full max-w-[240px] overflow-hidden rounded-2xl border border-white/70 bg-white shadow-lg md:mx-0 md:mr-4 md:h-full md:max-h-[320px] md:w-auto">
          <img
            className="h-full w-full object-cover"
            alt="Business analyst reviewing performance charts and KPI dashboard"
            src="https://images.unsplash.com/photo-1711097383282-28097ae16b1d?auto=format&fit=crop&w=1200&q=80"
          />
        </div>
      </div>
    </section>
  );
}
