import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export function BusinessPlanFinalCta() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="relative overflow-hidden rounded-2xl bg-navy p-16 text-center">
          <div className="absolute right-0 top-0 -mr-32 -mt-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-32 -ml-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
          <h2 className="relative z-10 mb-6 text-4xl font-extrabold text-white lg:text-5xl">Secure Your Visa Foundation</h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-xl text-slate-300">
            Don&apos;t leave your immigration status to chance. Partner with consultants attorneys trust for complex cases.
          </p>
          <div className="relative z-10">
            <Button as={Link} href="/contact" variant="inverse" size="lg">Begin Your Case</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
