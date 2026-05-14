import { Button } from "@/components/atoms/Button";
import { limitHeadingWords } from "@/lib/headings";
import Image from "next/image";
import Link from "next/link";

type BusinessPlanHeroProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export function BusinessPlanHero({ title, description, imageSrc }: BusinessPlanHeroProps) {
  const conciseTitle = limitHeadingWords(title, 5);

  return (
    <section className="relative flex min-h-[820px] items-center overflow-hidden bg-white">
      <div className="mx-auto grid w-full max-w-7xl gap-16 px-6 py-20 md:grid-cols-2 lg:px-20">
        <div>
          <span className="mb-6 block text-xs font-bold uppercase tracking-[0.2em] text-primary">Strategic Institutional Advisory</span>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-charcoal">
            <span className="text-primary">Immigration-Grade {conciseTitle}</span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600">{description}</p>
          <div className="flex flex-wrap gap-4">
            <Button as={Link} href="/contact">Start Engagement</Button>
            <Button as={Link} href="/contact" variant="secondary">Request Proposal</Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center md:justify-end">
          <div className="absolute inset-4 rotate-3 rounded-[2rem] bg-primary/5" />
          <Image
            alt="Business planning strategy visual"
            className="relative z-10 aspect-[4/3] w-full max-w-md rounded-xl object-cover shadow-2xl grayscale transition-all duration-700 hover:grayscale-0 lg:max-w-lg"
            src={imageSrc}
            width={1600}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}
