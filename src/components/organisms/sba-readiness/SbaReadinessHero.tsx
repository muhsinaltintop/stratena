import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import Image from "next/image";
import { BalancedSplitSection } from "@/components/layout/BalancedSplitSection";

type SbaReadinessHeroProps = {
  description: string;
};

const trustIndicators = ["Fast Turnaround", "U.S. Market Expertise", "Lender-Focused Deliverables"];

export function SbaReadinessHero({ description }: SbaReadinessHeroProps) {
  return (
    <BalancedSplitSection className="relative overflow-hidden pt-20 lg:pt-24" contentClassName="items-center">
        <div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
            SBA Loan Readiness
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-charcoal">
            SBA Loan Readiness
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">{description}</p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Book Free Consultation</Button>
            </Link>
            <Link href="#packages">
              <Button variant="secondary" size="lg">
                Get Started Today
              </Button>
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {trustIndicators.map((item) => (
              <li key={item} className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative flex h-full items-center">
          <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />
          <Image
            alt="Business owners reviewing SBA loan application documents"
            className="relative media-aspect rounded-xl shadow-2xl"
            src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
          
            width={1600}
            height={900}
          />
          <div className="absolute -bottom-6 -left-3 max-w-[230px] rounded-lg border border-slate-200 bg-white p-5 shadow-xl md:-left-8 md:-bottom-8">
            <div className="text-4xl font-extrabold text-primary">Lender-Ready</div>
            <div className="mt-1 text-[12px] font-bold uppercase tracking-wider text-slate-600">
              SBA Loan Business Plan + Financial Projections + Document Packaging
            </div>
          </div>
        </div>
    </BalancedSplitSection>
  );
}
