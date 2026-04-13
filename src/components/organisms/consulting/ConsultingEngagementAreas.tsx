type ConsultingEngagementAreasProps = {
  paragraphs: string[];
};

const areaItems = [
  {
    icon: "corporate_fare",
    title: "M&A Strategy",
    bullets: ["Target Identification", "Strategic Due Diligence", "Post-Merger Integration"],
  },
  {
    icon: "account_tree",
    title: "Operational Structuring",
    bullets: ["Capital Allocation", "Governance Frameworks", "Process Architecture"],
  },
  {
    icon: "warning",
    title: "Crisis Advisory",
    bullets: ["Rapid Remediation", "Continuity Planning", "Stakeholder Management"],
  },
];

export function ConsultingEngagementAreas({ paragraphs }: ConsultingEngagementAreasProps) {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-20 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Our Expertise</span>
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Core Strategic Disciplines</h2>
          </div>
          <p className="max-w-sm pb-1 leading-relaxed text-slate-600">{paragraphs[1] ?? paragraphs[0]}</p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-slate-200 md:grid-cols-3">
          {areaItems.map((item, index) => (
            <article className="bg-white p-12 transition-colors duration-500 hover:bg-slate-50" key={item.title}>
              <span className="material-symbols-outlined mb-8 text-4xl text-primary">{item.icon}</span>
              <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
              <p className="mb-8 leading-relaxed text-slate-600">{paragraphs[index] ?? paragraphs[0]}</p>
              <ul className="space-y-3 text-sm font-semibold text-navy">
                {item.bullets.map((bullet) => (
                  <li className="flex items-center gap-2" key={bullet}>
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
