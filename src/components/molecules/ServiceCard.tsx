type ServiceCardProps = {
  title: string;
  description: string;
  bullets: string[];
};

export function ServiceCard({ title, description, bullets }: ServiceCardProps) {
  return (
    <article className="rounded-2xl border border-slate-100 bg-white p-10 shadow-sm">
      <h4 className="mb-4 text-2xl font-bold text-navy">{title}</h4>
      <p className="mb-6 text-slate-600">{description}</p>
      <ul className="space-y-3 text-slate-500">
        {bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-primary">check_circle</span>
            {bullet}
          </li>
        ))}
      </ul>
    </article>
  );
}
