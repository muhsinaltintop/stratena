export function Logo({ light = false }: { light?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${light ? "text-white" : "text-charcoal"}`}>
      <span className="text-primary material-symbols-outlined">account_balance</span>
      <span className="font-extrabold uppercase tracking-tighter">Stratena</span>
    </div>
  );
}
