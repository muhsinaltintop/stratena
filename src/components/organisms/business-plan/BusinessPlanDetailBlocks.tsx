import Image from "next/image";
const timeline = [
  {
    step: "1",
    title: "Intake & Discovery",
    text: "Comprehensive review of visa intent, investment structure, and operational goals.",
  },
  {
    step: "2",
    title: "Economic Modeling",
    text: "Development of the financial core and market positioning narratives.",
  },
  {
    step: "3",
    title: "Drafting & Refinement",
    text: "Iterative drafting with focus on regulatory compliance and attorney feedback.",
  },
  {
    step: "4",
    title: "Final Delivery",
    text: "Ready-for-filing document with exhaustive appendices and data citations.",
    highlighted: true,
  },
];

export function BusinessPlanDetailBlocks() {
  return (
    <>
      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-charcoal lg:text-5xl">Plan Components</h2>
            <div className="mx-auto h-1 w-24 bg-primary" />
          </div>

          <div className="grid gap-8 md:grid-cols-12">
            <div className="group overflow-hidden rounded-xl bg-background-light md:col-span-7">
              <div className="p-12">
                <Image
                  alt="Financial planning narrative visual"
                  className="mb-6 h-40 w-full rounded-xl object-cover"
                  src="/business-plan.png"
                  width={1400}
                  height={500}
                />
                <h3 className="mb-6 text-4xl font-bold text-charcoal">Financial Narrative</h3>
                <p className="mb-8 max-w-md text-lg text-slate-600">
                  5-year pro-forma projections including P&amp;L, Cash Flow, and Balance Sheets, cross-referenced with industry benchmarks.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-navy p-12 text-white md:col-span-5">
              <div>
                <h3 className="mb-6 text-3xl font-bold">Market Analysis</h3>
                <p className="leading-relaxed text-slate-300">Deep-dive competitive landscape and target demographic segmentation using institutional datasets.</p>
              </div>
              <Image
                alt="Financial data visualization"
                className="mt-8 rounded-lg opacity-50 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAeX-yYeLdvQpAhQABmpTMUVzLXkFLnqiY_erK7Ex_pg9lDPhKsHCDd_rxaxDczoV5U5YGde7yx4eB0VG1hZaZlbsnDY2flMACd1H-TiA0Pms_8Sr3-_rtCrZeutfgGfkVrE6-rSxajA46exzSottl5LEX5fNFeef4JSMC_Cm7nwMJMbvdgLwFV7rCA-jXfAd8hd4z_P0rWOEEt7afoknXI4FWsK3EddrcgfNZxqVrem8om9Ium7vlQfQ6FuEe9zGpwQsgFwPQPtWo"
              
            width={1600}
            height={900}
          />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background-light py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-2 text-4xl font-bold text-charcoal">The Institutional Difference</h2>
            <p className="text-slate-600">Why standard templates fail where Stratena succeeds.</p>
          </div>
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-navy text-white">
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Feature Focus</th>
                  <th className="p-6 text-[11px] font-bold uppercase tracking-widest">Standard Plans</th>
                  <th className="bg-primary/10 p-6 text-[11px] font-bold uppercase tracking-widest">Stratena</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr><td className="p-6 font-bold">Regulatory Alignment</td><td className="p-6 text-slate-600">Generic Template</td><td className="bg-primary/5 p-6 font-semibold">Matter of Ho / USCIS Manual</td></tr>
                <tr><td className="p-6 font-bold">Financial Modeling</td><td className="p-6 text-slate-600">Basic Spreadsheets</td><td className="bg-primary/5 p-6 font-semibold">Institutional Pro-Formas</td></tr>
                <tr><td className="p-6 font-bold">Market Research</td><td className="p-6 text-slate-600">Google-level Search</td><td className="bg-primary/5 p-6 font-semibold">Paid Industry Databases</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-white py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-20 text-center">
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Operational Roadmap</span>
            <h2 className="text-4xl font-extrabold text-charcoal lg:text-5xl">Path to Submission</h2>
          </div>
          <div className="relative">
            <div className="absolute left-0 top-1/2 hidden h-0.5 w-full -translate-y-1/2 bg-slate-200 md:block" />
            <div className="relative z-10 grid gap-8 md:grid-cols-4">
              {timeline.map((item) => (
                <div key={item.step}>
                  <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full font-bold text-white ${item.highlighted ? "bg-primary" : "bg-navy"}`}>
                    {item.step}
                  </div>
                  <h4 className="mb-3 text-lg font-bold text-charcoal">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
