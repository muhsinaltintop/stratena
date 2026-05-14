import Link from "next/link";
import { Button } from "@/components/atoms/Button";

export function SbaReadinessCta() {
  return (
    <section id="book-consultation" className="px-6 py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative flex flex-col items-center overflow-hidden rounded-2xl bg-navy p-10 text-center md:p-16">
          <div className="pointer-events-none absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
            <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-primary blur-[120px]" />
          </div>

          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-slate-300">SBA Funding Preparation</span>
          <h2 className="mb-6 mt-4 text-4xl font-extrabold text-white md:text-5xl">Ready to Apply for an SBA Loan with Confidence?</h2>
          <p className="mb-10 max-w-2xl text-lg text-slate-300">
            Talk with our team about your timeline, loan type, and documentation status. We&apos;ll map the fastest route to a lender-ready package.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Link href="/contact">
              <Button variant="inverse" size="lg" className="hover:scale-[1.02]">
                Book Consultation
              </Button>
            </Link>
            <Link href="#packages">
              <Button size="lg" className="border-2 border-slate-500 bg-transparent text-white shadow-none hover:bg-white/10">
                Start My Package
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
