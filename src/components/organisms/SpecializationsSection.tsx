import { SpecializationCard } from "@/components/molecules/SpecializationCard";

const cards = [
  {
    icon: "business_center",
    title: "Business Plan",
    description: "Comprehensive business plans developed to support funding, growth, and strategic execution with confidence.",
    href: "/business-plan",
  },
  {
    icon: "account_balance_wallet",
    title: "SBA Lending",
    description: "Comprehensive financial modeling and narratives designed to meet rigorous bank requirements.",
    href: "/sba-loan-readiness-packages",
  },
  {
    icon: "insights",
    title: "Strategic Acquisitions",
    description: "Due diligence and growth projections for high-stakes mergers and acquisitions.",
    href: "/consulting",
  },
];

export function SpecializationsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <h3 className="mb-10 text-center text-xs font-bold uppercase tracking-[0.2em] text-primary sm:mb-12 sm:text-sm">Core Specializations</h3>
        <div className="grid gap-8 md:grid-cols-3">
          {cards.map((card) => (
            <SpecializationCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
