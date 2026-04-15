type AttorneyHubNarrativeProps = {
  paragraphs: string[];
};

export function AttorneyHubNarrative({ paragraphs }: AttorneyHubNarrativeProps) {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">Attorney Hub Narrative</p>
            <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Collaborative Strategic Support</h2>
            <p className="mt-5 text-slate-600">
              Existing page content is preserved below and presented in the updated Attorney Hub experience.
            </p>
          </div>

          <div className="grid gap-6 lg:col-span-8">
            {paragraphs.map((paragraph, index) => (
              <article
                key={`${index}-${paragraph.slice(0, 30)}`}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-8 text-slate-700 shadow-sm"
              >
                <p className="leading-relaxed">{paragraph}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
