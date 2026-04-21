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
    <section className="bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-charcoal">Service Excellence</h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary" />
        </div>

        <div className="mb-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
          <Image
            className="h-52 w-full object-cover sm:h-72"
            alt="Business advisor presenting strategic roadmap to executive stakeholders"
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
          
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
