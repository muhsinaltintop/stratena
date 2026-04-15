import Link from "next/link";

type ScopeInsightCardProps = {
  category: string;
  title: string;
  description: string;
  date: string;
  href?: string;
};

export function ScopeInsightCard({ category, title, description, date, href = "#" }: ScopeInsightCardProps) {
  return (
    <article className="group flex h-full flex-col border border-slate-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <span className="mb-6 text-[11px] font-bold uppercase tracking-widest text-primary">{category}</span>
      <h3 className="mb-4 text-2xl font-bold leading-tight text-navy transition-colors group-hover:text-primary">{title}</h3>
      <p className="mb-8 line-clamp-3 text-base text-slate-600">{description}</p>
      <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-6">
        <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{date}</span>
        <Link
          href={href}
          aria-label={`${title} detail`}
          className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-1"
        >
          north_east
        </Link>
      </div>
    </article>
  );
}
