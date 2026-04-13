const deliverables = [
  {
    title: "5-Year Integrated Financials",
    body: "Dynamic P&L, Balance Sheets, and Cash Flow statements with verifiable assumptions.",
  },
  {
    title: "Debt Service Coverage (DSCR)",
    body: "Detailed mapping of your ability to service debt across various sensitivity scenarios.",
  },
  {
    title: "Use of Proceeds Narrative",
    body: "Clear, justified allocation of funds meeting SBA eligibility requirements.",
  },
];

const checklistItems = [
  "Comprehensive Business Narrative",
  "Management Resumes & Experience Analysis",
  "Industry Benchmarking (RMA Data)",
  "Collateral Valuation Analysis",
  "Environmental & Zoning Declarations",
  "Personal Financial Statement Guidance",
];

export function SbaReadinessDeliverables() {
  return (
    <section className="px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-start gap-16 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-extrabold leading-tight text-charcoal">
            Meticulous Deliverables for Institutional Approval
          </h2>
          <p className="mb-12 mt-6 text-lg text-slate-600">
            Our work doesn&apos;t just pass the test—it sets the benchmark. Every package includes a comprehensive dossier
            tailored for the most discerning bank underwriters.
          </p>

          <div className="space-y-8">
            {deliverables.map((item, index) => (
              <div className="flex gap-6 rounded-lg bg-slate-100 p-6" key={item.title}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-lg font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-navy shadow-2xl">
          <div className="border-b border-white/10 p-8">
            <h3 className="text-xl font-bold text-white">The Stratena Checklist</h3>
            <p className="text-sm text-slate-400">Universal SBA Requirements Covered</p>
          </div>

          <div className="grid gap-4 p-8">
            {checklistItems.map((item) => (
              <div className="flex items-center justify-between border-b border-white/5 pb-3 text-white" key={item}>
                <span className="text-sm">{item}</span>
                <span className="material-symbols-outlined text-primary">check_circle</span>
              </div>
            ))}
          </div>

          <div className="bg-slate-800/50 p-8">
            <img
              alt="Financial analysis tools"
              className="h-48 w-full rounded-lg object-cover grayscale opacity-60"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf5JEoGduJWKko1WbgOw4jhHAn2gRjSZKGY5dcYE9ND9uKIZYBJTCcmn4PL3fyh0Yzta3eEFdTjloVDzoNBg8NvsE00uoKcd8viTrLWyUyio0havsYx6X9KxoxSA_fyx-pP3yirLRAmziJPUBWK713VnwOieA-qn26ELuUccC6ufVIC0yKdkmvZ2ybJ9ENll7Q0wGRORvISPVn_PBfMPnfY6YdIoqv3Qvi68L9pIIRRL0tcZvWExsstaa5jAR1fuRZpQa9h07rJbvL"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
