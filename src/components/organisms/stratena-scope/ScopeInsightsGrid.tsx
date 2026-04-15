import { ScopeInsightCard } from "@/components/molecules/ScopeInsightCard";

const insights = [
  {
    category: "Regulatory",
    title: "The Post-Brexit Financial Services Framework",
    description:
      "A definitive guide for executive boards on navigating the diverging compliance requirements between London and Brussels as new protocols take effect.",
    date: "March 14, 2024",
  },
  {
    category: "M&A Strategy",
    title: "Defensive Positioning in High-Interest Cycles",
    description:
      "Analyzing the rise of structured equity and mezzanine debt as alternative instruments for mid-market consolidation in 2024.",
    date: "March 08, 2024",
  },
  {
    category: "SBA Strategy",
    title: "Optimizing Government-Backed Portfolios",
    description:
      "New directives on federal small business loans present a unique window for restructuring high-yield portfolios for institutional investors.",
    date: "Feb 28, 2024",
  },
  {
    category: "Immigration",
    title: "The Global Talent War: Visa Policy Shifts",
    description:
      "Strategic briefing on the latest H-1B and O-1 visa cap updates and how Fortune 500 companies are adapting their international hiring cycles.",
    date: "Feb 21, 2024",
  },
  {
    category: "Finance",
    title: "Liquidity Cascades in Emerging Markets",
    description:
      "Predicting the impact of currency devaluations on supply chain infrastructure across the APAC region for the coming fiscal year.",
    date: "Feb 15, 2024",
  },
  {
    category: "Archive Selection",
    title: "The 2023 Strategic Foresight Report",
    description:
      "Our annual retrospective on global trends, updated with 2024 performance tracking for long-term strategic benchmarking.",
    date: "Jan 10, 2024",
  },
];

export function ScopeInsightsGrid() {
  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight) => (
          <ScopeInsightCard key={insight.title} {...insight} />
        ))}
      </div>
    </section>
  );
}
