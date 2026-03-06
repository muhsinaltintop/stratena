type ProcessStepProps = {
  index: number;
  title: string;
  description: string;
};

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-navy font-bold text-white">{index}</div>
      <div>
        <h5 className="mb-2 text-xl font-bold text-charcoal">{title}</h5>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
}
