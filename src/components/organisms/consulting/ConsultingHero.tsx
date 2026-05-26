import { limitHeadingWords } from "@/lib/headings";
import Image from "next/image";
import Link from "next/link";

type ConsultingHeroProps = {
  title: string;
  description: string;
  imageSrc?: string;
};

export function ConsultingHero({ title, description, imageSrc = "/company-checkup.png" }: ConsultingHeroProps) {
  const conciseTitle = limitHeadingWords(title);

  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          alt="Executive Boardroom"
          className="h-full w-full object-cover grayscale brightness-50"
          src={imageSrc}
        
            width={1600}
            height={900}
          />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-20">
        <div className="max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-white/70">Corporate Strategy Division</span>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white">{conciseTitle}</h1>
          <p className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-slate-300">{description}</p>
          <Link href="/contact" className="rounded-lg bg-white px-8 py-4 font-bold text-navy shadow-2xl transition-all hover:bg-slate-50">
            Request Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
