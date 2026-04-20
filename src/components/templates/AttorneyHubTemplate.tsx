import Link from "next/link";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { AttorneyHubCollaboration, AttorneyHubFinalCta } from "@/components/organisms/attorney-hub/AttorneyHubCollaboration";
import { AttorneyHubHero } from "@/components/organisms/attorney-hub/AttorneyHubHero";
import { AttorneyHubNarrative } from "@/components/organisms/attorney-hub/AttorneyHubNarrative";
import { AttorneyHubServices } from "@/components/organisms/attorney-hub/AttorneyHubServices";
import { AttorneyHubBusinessValuationPage } from "@/components/templates/AttorneyHubBusinessValuationPage";

type AttorneyHubTemplateProps = {
  title: string;
  paragraphs: string[];
};

const painPoints = [
  {
    problem: "Unreliable vendors disrupt filing plans.",
    solution: "We confirm scope, timeline, and ownership up front so your team can plan each filing with confidence.",
  },
  {
    problem: "Slow communication stalls legal workflows.",
    solution: "Attorney-first communication keeps case managers and paralegals updated at every milestone.",
  },
  {
    problem: "Generic templates weaken case narratives.",
    solution: "Every plan is built from case facts, business model specifics, and market context—not recycled copy.",
  },
  {
    problem: "Weak financials trigger avoidable scrutiny.",
    solution: "Our projection models are structured, transparent, and aligned with the operating narrative.",
  },
  {
    problem: "Missed timelines increase case pressure.",
    solution: "Standard and rush production tracks help you stay ahead of filing deadlines.",
  },
  {
    problem: "Inconsistent quality across cases erodes trust.",
    solution: "A repeatable delivery framework helps firms maintain premium output at scale.",
  },
];

const benefits = [
  "Attorney-first communication",
  "White-label delivery available",
  "Fast turnaround options",
  "High-quality financial projections",
  "USCIS case familiarity",
  "Scalable support for growing firms",
];

const caseTypes = [
  {
    title: "E-2 Treaty Investor",
    description: "Business plans, market positioning, and hiring logic designed to support investment-backed filings.",
  },
  {
    title: "L-1 New Office",
    description: "Expansion-ready plans with staffing roadmaps and financial narratives for U.S. entity growth.",
  },
  {
    title: "EB-5 Investor",
    description: "Structured documentation packages with job creation framing, projections, and market support.",
  },
  {
    title: "Franchise / Acquisition Cases",
    description: "Case-ready plans for purchase, transfer, and franchise-backed investor matters.",
  },
  {
    title: "Expansion Cases",
    description: "Commercial strategy support for multi-location growth, reinvestment, and scaling operations.",
  },
  {
    title: "Entrepreneur & Founder Cases",
    description: "Support for founder-led narratives including O-1 entrepreneur positioning and related strategy materials.",
  },
];

const deliverables = [
  "Professional immigration business plans",
  "Market research and industry analysis",
  "Hiring plans and organizational snapshots",
  "Financial projections and assumptions",
  "Source of funds support summaries (when relevant)",
  "USCIS-focused supporting materials",
  "White-label packaging for law firms",
  "Rush turnaround support",
];

const partnerships = [
  {
    title: "Per Case Support",
    subtitle: "Ideal for occasional filings",
    cta: "Start a Case",
  },
  {
    title: "Ongoing Referral Partner",
    subtitle: "For firms with monthly case volume",
    cta: "Discuss Referral Model",
  },
  {
    title: "White-Label Strategic Partner",
    subtitle: "For firms wanting seamless outsourced support",
    cta: "Build White-Label Program",
  },
];

const testimonials = [
  {
    quote: "Responsive and dependable every time. Their documentation quality makes collaboration easy for our legal team.",
    author: "Managing Attorney, Boutique Immigration Firm",
  },
  {
    quote: "Our E-2 matters move faster with Stratena. Timelines are clear and drafts are consistently strong.",
    author: "Partner, Investor Visa Practice",
  },
  {
    quote: "Excellent financial modeling and clean white-label delivery. They operate like an extension of our firm.",
    author: "Legal Operations Director, Multi-Office Firm",
  },
];

const faqs = [
  {
    question: "Do you work directly with attorneys only?",
    answer:
      "Our primary model is attorney-led collaboration. We can also coordinate with designated legal team members, including paralegals and case managers.",
  },
  {
    question: "Can you white-label deliverables?",
    answer:
      "Yes. We provide discreet white-label support so deliverables can align with your firm's preferred client-facing workflow.",
  },
  {
    question: "What visa types do you support?",
    answer:
      "We support E-2, L-1, EB-5, expansion and acquisition matters, founder cases, and business strategy support for EB-2 NIW and entrepreneur-focused O-1 contexts.",
  },
  {
    question: "How fast can you deliver?",
    answer:
      "Turnaround depends on scope and case complexity. Standard timelines are provided at intake, and rush options are available for urgent matters.",
  },
  {
    question: "Do you provide financial projections?",
    answer:
      "Yes. Financial projections are a core deliverable and are structured to align with the business narrative and documentation package.",
  },
  {
    question: "Can you handle urgent filings?",
    answer:
      "Yes. We offer rush support when capacity allows and will confirm feasibility before engagement.",
  },
  {
    question: "Do you revise drafts?",
    answer:
      "Absolutely. Revision rounds are built into our process to ensure each plan is aligned with attorney feedback and case strategy.",
  },
  {
    question: "How do we start a referral partnership?",
    answer:
      "Book a partner call and share your case profile, expected volume, and preferred collaboration model. We will propose a workflow tailored to your team.",
  },
];

function AttorneyHubLandingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 lg:py-28">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,#1e3a8a1a,transparent_55%)]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Attorney Hub</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-charcoal md:text-6xl">
            Trusted Business Plan Partner for Immigration Attorneys
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
            Support your E-2, L-1, EB-5, and investor visa clients with premium business plans, financial projections,
            and responsive delivery built for legal workflows.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="mailto:partners@stratena.com?subject=Partner%20Call%20Request"
              className="inline-flex items-center justify-center rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-primary"
            >
              Book Partner Call
            </Link>
            <Link
              href="mailto:partners@stratena.com?subject=Referral%20Partner%20Inquiry"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-charcoal transition-colors hover:bg-slate-50"
            >
              Become a Referral Partner
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["Confidential White-Label Support", "Fast Turnaround", "USCIS-Focused Deliverables", "Dedicated Account Support"].map((badge) => (
              <div key={badge} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Business plans for immigration attorneys without workflow friction</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Stratena is an immigration attorney business plan partner focused on precision, speed, and predictable execution.
            We help legal teams avoid bottlenecks and protect filing quality.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {painPoints.map((item) => (
              <article key={item.problem} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-charcoal">{item.problem}</h3>
                <p className="mt-3 text-slate-600">{item.solution}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Why attorneys choose Stratena</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-charcoal">{benefit}</h3>
                <p className="mt-2 text-sm text-slate-600">Premium execution for repeatable attorney referral business plans.</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:px-20">
          <div>
            <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Case types we support</h2>
            <p className="mt-4 max-w-3xl text-lg text-slate-600">
              From E2 visa business plan for law firms to white label visa business plans for ongoing portfolios, we
              support high-stakes matters with consistent quality.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {caseTypes.map((caseType) => (
                <article key={caseType.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-charcoal">{caseType.title}</h3>
                  <p className="mt-3 text-slate-600">{caseType.description}</p>
                </article>
              ))}
            </div>
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-charcoal">Documentation deliverables</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              {deliverables.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-0.5 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Partnership models</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {partnerships.map((option) => (
              <article key={option.title} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-charcoal">{option.title}</h3>
                <p className="mt-2 text-slate-600">{option.subtitle}</p>
                <Link
                  href="mailto:partners@stratena.com?subject=Attorney%20Hub%20Partnership"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-navy px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-primary"
                >
                  {option.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">How it works</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Send case details", "We scope timeline & requirements", "We build documentation package", "You file confidently"].map((step, index) => (
              <article key={step} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Step {index + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-charcoal">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Trusted by legal teams</h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.author} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">FAQ</h2>
          <p className="mt-3 text-slate-600">Answers for firms seeking USCIS compliant business plans and dependable immigration lawyer support services.</p>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-xl border border-slate-200 bg-white p-5">
                <summary className="cursor-pointer list-none text-base font-bold text-charcoal">{faq.question}</summary>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12 text-center lg:px-16">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-5xl">Need a Reliable Business Plan Partner for Your Visa Cases?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Support your clients with premium documentation and dependable turnaround.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="mailto:partners@stratena.com?subject=Partner%20Call%20Request"
              className="inline-flex items-center justify-center rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-primary"
            >
              Book Partner Call
            </Link>
            <Link
              href="mailto:partners@stratena.com?subject=Start%20First%20Case"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-charcoal transition-colors hover:bg-slate-100"
            >
              Start First Case
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur sm:hidden">
        <Link
          href="mailto:partners@stratena.com?subject=Partner%20Call%20Request"
          className="inline-flex w-full items-center justify-center rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white"
        >
          Book Partner Call
        </Link>
      </div>
    </>
  );
}

export function AttorneyHubTemplate({ title, paragraphs }: AttorneyHubTemplateProps) {
  const heroDescription =
    paragraphs[0] ??
    "Empowering law firms with institutional-grade business planning and evidentiary documentation for complex immigration and corporate filings.";

  if (title === "Attorney Hub") {
    return (
      <main className="bg-background-light text-slate-900">
        <SiteHeader />
        <AttorneyHubLandingPage />
        <SiteFooter />
      </main>
    );
  }

  if (title === "Business Valuation") {
    return (
      <main className="bg-background-light text-slate-900">
        <SiteHeader />
        <AttorneyHubBusinessValuationPage />
        <SiteFooter />
      </main>
    );
  }

  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <AttorneyHubHero title={title} description={heroDescription} />
      <AttorneyHubServices />
      <AttorneyHubNarrative paragraphs={paragraphs} />
      <AttorneyHubCollaboration />
      <AttorneyHubFinalCta />
      <SiteFooter />
    </main>
  );
}
