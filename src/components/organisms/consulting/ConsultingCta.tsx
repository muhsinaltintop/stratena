import Link from "next/link";

export function ConsultingCta() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-20">
        <div className="relative overflow-hidden rounded-lg bg-navy p-16 shadow-2xl md:p-24">
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative z-10 text-center">
            <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-white md:text-4xl">Secure Your Strategic Position</h2>
            <p className="mx-auto mb-12 max-w-lg text-lg leading-relaxed text-slate-300">
              Engage our advisory team for a preliminary high-level assessment of your organizational objectives.
            </p>
            <Link
              className="inline-flex rounded-lg bg-white px-10 py-5 text-sm font-bold uppercase tracking-widest text-navy shadow-lg transition-colors hover:bg-slate-100"
              href="/contact"
            >
              Schedule an Advisory Session
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
