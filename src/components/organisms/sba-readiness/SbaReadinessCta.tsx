import { Button } from "@/components/atoms/Button";

export function SbaReadinessCta() {
  return (
    <section className="px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-navy p-16 text-center">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
          </div>

          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-300">Self-Assessment</span>
          <h2 className="mb-6 mt-4 text-4xl font-extrabold text-white md:text-5xl">Are You SBA-Ready?</h2>
          <p className="mb-12 max-w-2xl text-lg text-slate-300">
            Take our 5-minute diagnostic to identify gaps in your financial documentation before you approach a lender.
          </p>

          <div className="flex flex-col gap-6 sm:flex-row">
            <Button variant="inverse" size="lg" className="hover:scale-105">
              Check Your Readiness
            </Button>
            <Button size="lg" className="border-2 border-slate-500 bg-transparent text-white shadow-none hover:bg-white/10">
              Download Checklist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
