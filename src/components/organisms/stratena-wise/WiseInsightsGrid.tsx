import { WiseInsightCard } from "@/components/molecules/WiseInsightCard";
import { stratenaWiseIssues } from "@/lib/stratena-wise-issues";

export function WiseInsightsGrid() {
  return (
    <section className="mx-auto mb-24 max-w-7xl px-6 lg:px-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {stratenaWiseIssues.map((issue) => (
          <WiseInsightCard
            key={issue.slug}
            category={issue.publication}
            title={`${issue.issue}: ${issue.title}`}
            description={issue.summary}
            date={issue.publication}
            href={`/stratena-wise/${issue.slug}`}
          />
        ))}
      </div>
    </section>
  );
}
