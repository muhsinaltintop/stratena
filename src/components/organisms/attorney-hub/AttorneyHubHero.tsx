import Link from "next/link";
import { Button } from "@/components/atoms/Button";

type AttorneyHubHeroProps = {
  title: string;
  description: string;
};

export function AttorneyHubHero({ title, description }: AttorneyHubHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-20">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Legal Partnership Portal</p>
          <h1 className="text-4xl font-extrabold leading-tight text-charcoal md:text-6xl">{title}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600">{description}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button size="md">Request a Firm Briefing</Button>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 px-8 py-4 text-base font-bold text-charcoal transition-colors hover:bg-slate-50"
            >
              Explore Services
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVKdj_2zgBElojxPxke6IdUyJbVUreyRBWehtEHvmDGpnZdHS4esmba0Lk3pVyK5dggqOBfGGXc7aR8tz7BTMh4QRLjjvfbId_fr-zXj1H0SKTp2I3iZwGTo-jYMqwRNBMwLn_SUMFoEp7lvMLXtQ_5B-7Au2I58fgnYT8OBBEbRfVEyvTqbcCzJkC3pZ8-clLKCKjQi6RGtJ6vonI2Y3BCTg96422OFkg1v-r9havPr9JtzjqWZ_2oUVMXzJpXGp83LMmQvhXbJk_"
            alt="Modern professional office interior"
            className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl grayscale"
          />
        </div>
      </div>
    </section>
  );
}
