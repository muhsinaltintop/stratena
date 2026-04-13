type ConsultingCaseStudyProps = {
  paragraphs: string[];
};

export function ConsultingCaseStudy({ paragraphs }: ConsultingCaseStudyProps) {
  return (
    <section className="overflow-hidden bg-navy py-24 text-white">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-20">
        <div>
          <span className="mb-8 block text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Executive Brief: Case 0482</span>
          <h2 className="mb-12 text-4xl font-extrabold leading-tight">Global Logistics Transformation: A $4.2B Operational Pivot.</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-primary/40 pl-8">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">The Challenge</h4>
              <p className="text-lg italic text-slate-300">{paragraphs[0]}</p>
            </div>
            <div className="border-l-2 border-primary/40 pl-8">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">The Result</h4>
              <p className="text-lg italic text-slate-300">{paragraphs[2] ?? paragraphs[1] ?? paragraphs[0]}</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-800 shadow-2xl">
            <img
              alt="Strategic Planning"
              className="h-full w-full object-cover opacity-60 mix-blend-overlay"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZzd0j6cOZwVeusg5gNvSPiKCOsy5-0jVsONEfEEM2OyVp2GhVTfpBzJ7AdWDxMtj6rqcypbeuVIfhgmpE7DNfGSnApU4S1pDRCR7kQYGmrvUGwlgAJKKJx1o9UXO1q58nikWgmN0MaMwk2xMjqKBKWTcNbxaKie-zQOOGcfrHFcbwuSN_rlAdglyiHazJiyA0BowpBFYkaVCX9x_GLGjMDBHntjbMdTEH02zyOhpGe0dgntqDh0IaXbaYb27d2i-wyTbydXtGCuiB"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-12">
              <div className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <p className="mb-4 text-sm font-medium leading-relaxed text-slate-200">{paragraphs[1] ?? paragraphs[0]}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300">— Stratena Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
