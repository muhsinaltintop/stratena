import { SpecializationCard } from "@/components/molecules/SpecializationCard";

const cards = [
  {
    icon: "gavel",
    title: "Immigration Law",
    description: "Strategic business plans meticulously crafted for L-1, E-2, and EB-5 visa categories.",
  },
  {
    icon: "account_balance_wallet",
    title: "SBA Lending",
    description: "Comprehensive financial modeling and narratives designed to meet rigorous bank requirements.",
  },
  {
    icon: "insights",
    title: "Strategic Acquisitions",
    description: "Due diligence and growth projections for high-stakes mergers and acquisitions.",
  },
];

export function SpecializationsSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-12 text-center text-sm font-bold uppercase tracking-[0.2em] text-primary">Core Specializations</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <SpecializationCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
