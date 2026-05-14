import { Button } from "@/components/atoms/Button";
import { BalancedSplitSection } from "@/components/layout/BalancedSplitSection";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <BalancedSplitSection className="relative overflow-hidden bg-navy" contentClassName="items-center lg:min-h-[72vh]">
      <div className="flex h-full flex-col justify-center gap-6 sm:gap-8">
        <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-secondary">
          Boutique Strategic Consulting
        </div>
        <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-secondary sm:text-4xl lg:text-[2.8rem]">
          Business Intelligence for Key Decisions
        </h1>
        <p className="max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:text-xl">
          Strategic business planning and advisory built for cases that require credibility, clarity, and institutional readiness.
        </p>
        <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button as={Link} href="/contact" className="w-full sm:w-auto">
            Book Consultation
          </Button>
          <Button as={Link} href="/contact" variant="secondary" className="w-full sm:w-auto">
            Speak With Stratena
          </Button>
        </div>
      </div>

      <div className="relative flex h-full items-center">
        <div className="media-frame w-full border-white/40">
          <Image
            className="media-aspect"
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
    </BalancedSplitSection>
  );
}
