import { Button } from "@/components/atoms/Button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-12 sm:px-6 sm:py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:min-h-[75vh] lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
            Boutique Strategic Consulting
          </div>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-[2.8rem]">
            Business Intelligence for Key Decisions
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
            Strategic business planning and advisory built for cases that require credibility, clarity, and institutional readiness.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button className="w-full sm:w-auto">Book Consultation</Button>
            <Button variant="secondary" className="w-full sm:w-auto">
              Speak With Stratena
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-xl border-8 border-white/50 shadow-2xl">
            <Image
              className="h-full w-full object-cover"
              alt="Clean-shaven American business professionals shaking hands after a meeting"
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600"
            
            width={1600}
            height={900}
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
