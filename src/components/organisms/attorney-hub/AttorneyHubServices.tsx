const supportCards = [
  {
    icon: "description",
    title: "EB-2 NIW",
    description:
      "Substantiating the \"National Importance\" prong through detailed industry analysis and comprehensive business impact modeling.",
    bullets: ["Proposed Endeavor Briefs", "Economic Impact Analysis"],
  },
  {
    icon: "corporate_fare",
    title: "L-1A / L-1B",
    description:
      "Detailed organizational charts and managerial duty breakdowns that clearly delineate executive and specialized knowledge roles.",
    bullets: ["5-Year Staffing Plans", "Role Justification Reports"],
  },
  {
    icon: "payments",
    title: "E-2 Investor",
    description:
      "Robust business plans highlighting \"substantial investment\" and ensuring the venture is not \"marginal\" through clear P&L forecasting.",
    bullets: ["Pro-Forma Financials", "Market Entry Strategy"],
  },
];

export function AttorneyHubServices() {
  return (
    <section id="services" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Precision Documentation for Immigration</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          We bridge the gap between legal theory and business reality, providing the substantiation required for USCIS
          adjudicators.
        </p>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {supportCards.map((card) => (
            <article
              key={card.title}
              className="group rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <span className="material-symbols-outlined">{card.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-charcoal">{card.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{card.description}</p>
              <ul className="mt-6 space-y-3 text-xs font-bold uppercase tracking-[0.16em] text-charcoal">
                {card.bullets.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
                    {item}
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
