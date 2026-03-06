type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="space-y-2">
      {eyebrow ? <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-slate-600">{description}</p> : null}
    </div>
  );
}
