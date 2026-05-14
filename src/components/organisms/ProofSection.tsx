import { StatItem } from "@/components/molecules/StatItem";
import Image from "next/image";

export function ProofSection() {
  return (
    <section className="section-shell bg-slate-100">
      <div className="section-content grid items-center gap-8 md:grid-cols-[1.8fr_1fr] lg:gap-12">
        <div className="flex flex-col gap-8 lg:gap-10">
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
        <div className="media-frame mx-auto max-w-sm self-stretch bg-white md:mx-0">
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
