import { ScopeInsightCard } from "@/components/molecules/ScopeInsightCard";
import { newsletters } from "@/lib/newsletters";

export function ScopeInsightsGrid() {
  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {newsletters.map((insight) => (
          <ScopeInsightCard
            key={insight.slug}
            category={insight.category}
            title={`${insight.issue}: ${insight.title}`}
            description={insight.summary}
            date={insight.publication}
            href={`/stratena-scope/${insight.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
