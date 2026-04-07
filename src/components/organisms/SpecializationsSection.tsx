import { SpecializationCard } from "@/components/molecules/SpecializationCard";

const cards = [
  {
    icon: "description",
    title: "Business Plans",
    description:
      "Custom plans that combine market research, operational structure, hiring logic, and financial projections.",
  },
  {
    icon: "handshake",
    title: "Consulting",
    description:
      "Practical consulting support focused on strategy, operations, and financial planning for real execution.",
  },
  {
    icon: "balance",
    title: "Attorney Hub",
    description:
      "Dedicated business-side materials for law firms including plans, research, valuation support, and RFE work.",
  },
];

export function SpecializationsSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-center text-sm font-bold uppercase tracking-[0.2em] text-primary">Core Services</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <SpecializationCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
