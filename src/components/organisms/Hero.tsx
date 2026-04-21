import { Button } from "@/components/atoms/Button";

export function Hero() {
  return (
    <section className="relative bg-navy overflow-hidden px-6 py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:min-h-[75vh] lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
            Boutique Strategic Consulting
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-secondary">
            Business Intelligence for Key Decisions
          </h1>
          <p className="max-w-lg text-xl leading-relaxed text-slate-500">
            Strategic business planning and advisory built for cases that require credibility, clarity, and institutional readiness.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button>Book Consultation</Button>
            <Button variant="secondary">Speak With Stratena</Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border-8 border-white/50 shadow-2xl">
            <img
              className="h-full w-full object-cover"
              alt="Executive strategy team reviewing financial growth plans"
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-6 shadow-xl md:block">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                <span className="material-symbols-outlined">verified</span>
              </div>
              <div>
                <p className="text-sm font-bold text-charcoal">Certified Strategy</p>
                <p className="text-xs text-slate-500">Industry Grade Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
