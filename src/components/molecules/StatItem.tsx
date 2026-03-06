type StatItemProps = {
  value: string;
  label: string;
};

export function StatItem({ value, label }: StatItemProps) {
  return (
    <div className="text-center">
      <p className="mb-2 text-6xl font-black tracking-tighter text-navy">{value}</p>
      <p className="text-xs font-bold uppercase tracking-widest text-primary">{label}</p>
    </div>
  );
}
