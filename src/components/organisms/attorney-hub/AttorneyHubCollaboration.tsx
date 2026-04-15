import Link from "next/link";
import { Button } from "@/components/atoms/Button";

const collaborationSteps = [
  {
    title: "Direct Client Engagement",
    description:
      "We work alongside your firm as the designated business planning partner, billing the client directly or through your office.",
  },
  {
    title: "Strategic White-Labeling",
    description:
      "Our deliverables are formatted to align perfectly with your firm's filing aesthetic and evidentiary standards.",
  },
  {
    title: "Expert Witness Support",
    description:
      "In complex cases, our senior consultants are available for expert testimony or secondary declarations.",
  },
];

export function AttorneyHubCollaboration() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-20">
        <div className="grid overflow-hidden rounded-3xl bg-white shadow-xl lg:grid-cols-2">
          <div className="p-10 lg:p-14">
            <h2 className="text-3xl font-extrabold text-charcoal">Integrated Collaboration Model</h2>
            <div className="mt-8 space-y-8">
              {collaborationSteps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-charcoal">{step.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] bg-navy">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoEarJkPw4oBY59p02ll1TyQLaVM2bTlNJfAKTmxebBLOwJExqI_bhA_KgMfVS4vZV_VX66KwS967SD0wCHJYcbqSDFTDqvWZMJc6FBQu3YKjtpjbBZXFVZaJDKbdzcArRM7O8UU5cTDa-uik717s1fPzeTwldp2t1JYRP6yv83sM_earLBq2nXwAOmaY0FvO7p8jR8u_zrOt6g_Un4QqUpTEDA_noBOg_hd5yvW1VuOlVKxcPaFPtk4qvmY5ZSVxCCWF19_TsrLot"
              alt="Collaboration between legal and strategy teams"
              className="absolute inset-0 h-full w-full object-cover opacity-60 grayscale"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-10 text-white lg:p-12">
              <blockquote className="text-xl italic md:text-2xl">
                &ldquo;Stratena&apos;s ability to translate complex business operations into the &lsquo;National Importance&rsquo; narrative is unparalleled.&rdquo;
              </blockquote>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-200">
                — Senior Partner, Global Mobility Law Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AttorneyHubFinalCta() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-20">
        <h2 className="text-4xl font-extrabold tracking-tight text-charcoal md:text-5xl">Elevate Your Firm&apos;s Filing Success.</h2>
        <p className="mx-auto mt-8 max-w-3xl text-xl font-medium text-slate-600">
          Join 50+ specialized law firms that trust Stratena for high-stakes business documentation.
        </p>
        <div className="mt-12 inline-flex flex-col gap-6 sm:flex-row">
          <Link
            href="mailto:partners@stratena.com"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-10 py-5 text-lg font-bold text-white shadow-lg transition-colors hover:bg-primary/90"
          >
            Request a Firm Briefing
          </Link>
          <Button variant="secondary" size="lg">Schedule a Call</Button>
        </div>
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
          Institutional Grade • Attorney Led • Case Centric
        </p>
      </div>
    </section>
  );
}
