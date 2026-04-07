import { ServiceCard } from "@/components/molecules/ServiceCard";

const services = [
  {
    title: "Strategy Consulting",
    description:
      "Clarify positioning, evaluate opportunities, define priorities, and align decisions with realistic growth objectives.",
    bullets: ["Market Direction", "Priority Setting", "Execution Planning"],
  },
  {
    title: "Operations Consulting",
    description:
      "Translate business goals into practical operating structures, process design, role alignment, and workflow clarity.",
    bullets: ["Process Design", "Role Alignment", "Scalable Execution"],
  },
  {
    title: "Financial Planning Support",
    description:
      "Organize assumptions, projections, and revenue logic so numbers align clearly with the operating story.",
    bullets: ["Projection Discipline", "Revenue Logic", "Funding Readiness"],
  },
  {
    title: "Business Readiness Assessment",
    description:
      "Structured review of business model clarity, operations, staffing, market position, and execution readiness.",
    bullets: ["Gap Identification", "Readiness Roadmap", "Strategic Next Steps"],
  },
];

export function ServicesSection() {
  return (
    <section className="bg-slate-50 px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-charcoal">Consulting Services</h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-primary" />
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
