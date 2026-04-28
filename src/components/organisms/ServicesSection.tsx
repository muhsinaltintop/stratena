import { ServiceCard } from "@/components/molecules/ServiceCard";
import Image from "next/image";

const services = [
  {
    title: "Immigration-Grade Plans",
    description: "Visa-specific documentation that adheres strictly to USCIS Matter of Ho requirements.",
    bullets: ["5-Year Financial Projections", "Organizational Charts", "Staffing Plans"],
  },
  {
    title: "SBA Readiness",
    description: "Bank-grade financial packages and operational summaries for capital acquisition.",
    bullets: ["Debt Service Coverage Analysis", "Use of Proceeds Detail", "Collateral Analysis"],
  },
  {
    title: "Corporate Strategy",
    description: "High-level advisory for market entry, expansion, and corporate restructuring.",
    bullets: ["SWOT & GAP Analysis", "Market Entry Roadmaps", "Operational Efficiency Audits"],
  },
  {
    title: "Legal Support",
    description: "Expert witness and advisory services for complex commercial litigation cases.",
    bullets: ["Economic Impact Reports", "Forensic Financial Review", "Expert Testimony Support"],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center sm:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-charcoal sm:text-4xl">Service Excellence</h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          <Image
            className="h-52 w-full object-cover sm:h-72"
            alt="Clean-shaven American business advisor presenting strategy to stakeholders"
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600"
          
            width={1600}
            height={900}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
