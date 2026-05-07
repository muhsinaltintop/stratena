import { StatItem } from "@/components/molecules/StatItem";
import Image from "next/image";

export function ProofSection() {
  return (
    <section className="bg-slate-100 px-4 py-14 sm:px-6 sm:py-20 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[2fr_auto] md:items-center md:gap-4">
        <div className="flex flex-col gap-8 md:pl-4 md:gap-10">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-charcoal sm:text-3xl">A Proven Track Record of Excellence</h2>
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
          <Image
            className="h-full w-full object-cover"
            alt="Clean-shaven American analyst reviewing performance dashboards"
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
          
            width={1600}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}
