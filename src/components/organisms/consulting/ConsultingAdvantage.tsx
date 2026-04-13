const advantageItems = [
  {
    icon: "lock",
    title: "Discretion",
    text: "Our mandates are executed with absolute confidentiality. We operate as silent architects behind the world's most sensitive corporate maneuvers.",
  },
  {
    icon: "architecture",
    title: "Precision",
    text: "No generic templates. Every advisory engagement is built from first principles, utilizing rigorous data modeling and legal-grade scrutiny.",
  },
  {
    icon: "gavel",
    title: "Authority",
    text: "Leveraging decades of senior-tier experience to provide advice that commands respect in boardrooms and capital markets alike.",
  },
];

export function ConsultingAdvantage() {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="mb-24 text-center">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Institutional Standards</span>
          <h2 className="text-4xl font-extrabold tracking-tight">The Stratena Advantage</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {advantageItems.map((item) => (
            <article className="group text-center" key={item.title}>
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 group-hover:bg-navy group-hover:text-white">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="mb-4 text-xl font-extrabold uppercase tracking-tighter">{item.title}</h3>
              <p className="leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
