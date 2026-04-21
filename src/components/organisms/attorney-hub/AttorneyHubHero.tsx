import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { limitHeadingWords } from "@/lib/headings";
import Image from "next/image";

type AttorneyHubHeroProps = {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
};

export function AttorneyHubHero({
  title,
  description,
  imageSrc = "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&fm=jpg&q=80&w=1600",
  imageAlt = "A legal team reviewing documents in an office",
}: AttorneyHubHeroProps) {
  const conciseTitle = limitHeadingWords(title);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-20">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-primary">Legal Partnership Portal</p>
          <h1 className="text-4xl font-extrabold leading-tight text-charcoal">{conciseTitle}</h1>
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
          <Image
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl grayscale"
          
            width={1600}
            height={900}
          />
        </div>
      </div>
    </section>
  );
}
