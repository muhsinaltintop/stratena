import { Button } from "@/components/atoms/Button";
import { limitHeadingWords } from "@/lib/headings";

type BusinessPlanHeroProps = {
  title: string;
  description: string;
};

export function BusinessPlanHero({ title, description }: BusinessPlanHeroProps) {
  const conciseTitle = limitHeadingWords(title, 5);

  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 lg:px-20">
        <div>
          <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Strategic Institutional Advisory</span>
          <h1 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-charcoal">
            <span className="text-primary">Immigration-Grade {conciseTitle}</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button>Schedule Consultation</Button>
            <Button variant="secondary">Review Sample Plans</Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-primary/5" />
          <img
            alt="Executive skyscraper architectural detail"
            className="relative z-10 aspect-[4/5] w-full rounded-xl object-cover shadow-2xl grayscale transition-all duration-700 hover:grayscale-0"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcrXpnAeoqYINNIjR_lSRU8YMwtb8XuuLi8seWekF_MJor484-MfxhBDHu9plCLVqX-hdtrNAU6BmWJvCN8GW8vqFuo0wPyilW3j-SzsIZvPFzPffQwJ0OJNyMXGQBYfntV2HrMpiimbKa1kohy4m1Mi5Gt4fHab4T4TTkgx90BilG88l9K6NbchQUbyExq2ZqJ-igs4oRl8uNaG4vjYki3aV_Nr_kpx9Nk1V5Bl5kl0MZYvN_lEk6_nT0d8Sj-6nmRTqhTmokyCaw"
          />
        </div>
      </div>
    </section>
  );
}
