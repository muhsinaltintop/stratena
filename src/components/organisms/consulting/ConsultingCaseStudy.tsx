type ConsultingCaseStudyProps = {
  paragraphs: string[];
  serviceTitle: string;
};

const caseStudies: Record<string, string> = {
  "OPERATIONS CONSULTING":
    "Multi-location distributor facing rising overhead and inconsistent workflows. Stratena redesigned reporting lines, vendor controls, and operating procedures, improving efficiency and restoring margin visibility within one quarter.",
  "GROWTH STRATEGY":
    "Founder-led services company stalled after rapid expansion. Stratena rebuilt growth priorities, pricing structure, and channel focus, leading to stronger pipeline quality and higher conversion opportunities.",
  "MARKET ENTRY STRATEGY":
    "International company entering the U.S. market needed structured launch direction. Stratena developed positioning, customer targeting, and rollout priorities to support a disciplined market entry plan.",
  "ACQUISITION ADVISORY":
    "Buyer evaluating a lower middle-market acquisition required commercial clarity. Stratena assessed revenue durability, risks, and integration priorities to support a smarter transaction decision.",
  "FINANCIAL STRATEGY":
    "Growing operator lacked clear planning visibility. Stratena introduced budgeting logic, KPI dashboards, and forward planning tools to improve cash control and decision-making.",
  "TURNAROUND STRATEGY":
    "Business under margin pressure needed urgent direction. Stratena identified profit leaks, cost inefficiencies, and restructuring priorities to stabilize performance.",
  "EXPANSION STRATEGY":
    "Regional brand preparing multi-state growth needed scalable structure. Stratena mapped hiring, systems, and rollout sequencing for sustainable expansion.",
  "PROCESS IMPROVEMENT":
    "Service company experiencing delivery bottlenecks needed operational consistency. Stratena redesigned workflow systems and accountability checkpoints to improve execution speed.",
};

const serviceCaseMap: Record<string, string> = {
  "STRATEGY CONSULTING": "GROWTH STRATEGY",
  "OPERATIONS CONSULTING": "OPERATIONS CONSULTING",
  "FINANCIAL CONSULTING": "FINANCIAL STRATEGY",
  "COMPANY CHECK UP": "PROCESS IMPROVEMENT",
  "PARTNERSHIP PROTOCOLS": "EXPANSION STRATEGY",
  CONSULTING: "MARKET ENTRY STRATEGY",
};

export function ConsultingCaseStudy({ paragraphs, serviceTitle }: ConsultingCaseStudyProps) {
  const normalizedService = serviceTitle.toUpperCase();
  const caseTitle = serviceCaseMap[normalizedService] ?? normalizedService;
  const caseContent = caseStudies[caseTitle] ?? paragraphs[1] ?? paragraphs[0];

  return (
    <section className="overflow-hidden bg-navy py-24 text-white">
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2 lg:px-20">
        <div>
          <span className="mb-8 block text-xs font-bold uppercase tracking-[0.2em] text-slate-300">Executive Brief: Case 0482</span>
          <h2 className="mb-12 text-4xl font-extrabold leading-tight">{caseTitle}</h2>
          <div className="space-y-12">
            <div className="border-l-2 border-primary/40 pl-8">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">The Challenge</h4>
              <p className="text-lg italic text-slate-300">{paragraphs[0]}</p>
            </div>
            <div className="border-l-2 border-primary/40 pl-8">
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-400">The Result</h4>
              <p className="text-lg italic text-slate-300">{caseContent}</p>
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
                <p className="mb-4 text-sm font-medium leading-relaxed text-slate-200">{caseContent}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-300">— Stratena Advisory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
