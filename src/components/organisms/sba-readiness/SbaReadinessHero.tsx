import { Button } from "@/components/atoms/Button";

type SbaReadinessHeroProps = {
  description: string;
};

export function SbaReadinessHero({ description }: SbaReadinessHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-24 lg:px-20">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.2em] text-primary">
            SBA Readiness
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-[-0.025em] text-charcoal md:text-6xl">
            Bank-Grade SBA Documentation
          </h1>
          <p className="mt-6 max-w-xl text-xl leading-relaxed text-slate-600">{description}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button>View Packages</Button>
            <Button variant="secondary">Lender Portal</Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-3xl" />
          <img
            alt="Bank-grade documentation"
            className="relative h-[500px] w-full rounded-xl object-cover grayscale shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg6vEi9n9s7XVbXgbw3XVQRxSgMpsQguYBcLhf7b53ztRboLBRBw5F0ktnjxU4a-oyeWkdQdIt2D7F-CiVhB93QxloHPf_QtpQv15kJGYRgLK6Zv81PinigSvwV96Zp80gctJfBR_3RmC7GyWBrWir_pjHZg_gh0BJHttHisG8LKteE9KycQ_Lz_yu02qUsDl0RWTZUlXPlon4oOGwga9ABs4wBJgBeDPnxYPvotr52E5AYV4UeIoBHl-GttInBiJyF1SYlr6Pcnal"
          />
          <div className="absolute -bottom-8 -left-8 max-w-[200px] rounded-lg border border-slate-200 bg-white p-6 shadow-xl">
            <div className="text-3xl font-extrabold text-primary">98%</div>
            <div className="mt-1 text-[12px] font-bold uppercase tracking-wider text-slate-600">Lender Acceptance Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
