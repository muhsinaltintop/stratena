import Link from "next/link";

type SpecializationCardProps = {
  icon: string;
  title: string;
  description: string;
  href: string;
};

export function SpecializationCard({ icon, title, description, href }: SpecializationCardProps) {
  return (
    <Link href={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2">
      <article className="group rounded-xl border border-slate-100 bg-slate-50/50 p-8 transition-all hover:bg-white hover:shadow-xl">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-white text-navy shadow-sm transition-colors group-hover:bg-navy group-hover:text-white">
          <span className="material-symbols-outlined text-3xl">{icon}</span>
        </div>
        <h4 className="mb-3 text-xl font-bold text-charcoal">{title}</h4>
        <p className="leading-relaxed text-slate-500">{description}</p>
      </article>
    </Link>
  );
}
