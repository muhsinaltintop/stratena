import Image from "next/image";

type BusinessPlanStandardsProps = {
  lead: string;
};

const standards = [
  {
    icon: "gavel",
    title: "Matter of Ho Compliance",
    text: "Rigorous adherence to federal precedent requiring comprehensive, credible, and feasible business trajectories.",
  },
  {
    icon: "analytics",
    title: "Economic Justification",
    text: "Data-backed proof of the enterprise's substantial nature and its capacity to generate significant economic impact.",
  },
  {
    icon: "account_tree",
    title: "Hierarchical Integrity",
    text: "Detailed organizational mapping that justifies executive or managerial capacity for L-1A visa requirements.",
  },
];

export function BusinessPlanStandards({ lead }: BusinessPlanStandardsProps) {
  return (
    <section className="bg-background-light py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-16 flex flex-col gap-12 md:flex-row md:items-end">
          <div className="md:w-2/3">
            <Image
              alt="Regulatory compliance review visual"
              className="mb-6 h-40 w-full rounded-xl object-cover"
              src="/business-plan-2.png"
              width={1400}
              height={500}
            />
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Regulatory Compliance</span>
            <h2 className="text-4xl font-extrabold text-charcoal lg:text-5xl">The Standard of Review</h2>
          </div>
          <p className="leading-relaxed text-slate-600 md:w-1/3">{lead}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {standards.map((item) => (
            <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm" key={item.title}>
              <span className="material-symbols-outlined mb-6 text-4xl text-primary">{item.icon}</span>
              <h3 className="mb-4 text-xl font-bold text-charcoal">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
