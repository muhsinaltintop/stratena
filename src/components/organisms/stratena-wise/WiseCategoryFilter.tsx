const categories = ["All Insights", "Regulatory", "M&A", "SBA Strategy", "Immigration", "Finance"];

export function WiseCategoryFilter() {
  return (
    <section className="mx-auto mb-12 max-w-7xl px-6 lg:px-20">
      <div className="flex flex-wrap items-center justify-between gap-6 border-b-2 border-slate-100 pb-6">
        <div className="flex flex-wrap items-center gap-7">
          {categories.map((category, index) => (
            <button
              type="button"
              key={category}
              className={`pb-1 text-sm font-bold transition-colors ${
                index === 0 ? "border-b-2 border-primary text-navy" : "text-slate-400 hover:text-navy"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <button type="button" className="inline-flex items-center text-sm font-bold text-navy">
          <span className="material-symbols-outlined mr-2">filter_list</span>
          Advanced Filters
        </button>
      </div>
    </section>
  );
}
