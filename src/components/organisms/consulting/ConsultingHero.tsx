type ConsultingHeroProps = {
  title: string;
  description: string;
};

export function ConsultingHero({ title, description }: ConsultingHeroProps) {
  return (
    <section className="relative flex min-h-[760px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Executive Boardroom"
          className="h-full w-full object-cover grayscale brightness-50"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBywYAErMxYQ4-i1_p80eEfG7_n2AKk9sICkEj1VLEJdp4TD9vCYcQSYsJvJy6EpMk98Fceg8RfOlfVt2GDwFrLls0W39aPFxQSCQldMh3-YFGvsZc9w4SXjoG4P3-Wv73C-jfwQt4lklTkG1wc_JUl_aaegDpCNRqYeML_7jL63G9daVwgkFiJ2ZAeNHDgBXlehhyXr1WiRRS9OG7KpZv7Wxv57i3v37fGdqRF6ApoZ__6_zERR6AJjQA0jXTL_PXWBRs6FmVlNfjV"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-20">
        <div className="max-w-3xl">
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-white/70">Corporate Strategy Division</span>
          <h1 className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-white md:text-6xl">{title}</h1>
          <p className="mb-12 max-w-2xl text-xl font-medium leading-relaxed text-slate-300">{description}</p>
          <button className="rounded-lg bg-white px-8 py-4 font-bold text-navy shadow-2xl transition-all hover:bg-slate-50">
            Request Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
