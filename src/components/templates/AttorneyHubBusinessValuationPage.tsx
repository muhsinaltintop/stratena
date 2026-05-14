import Link from "next/link";
import Image from "next/image";

const trustBadges = ["Confidential Process", "Fast Turnaround", "Strategic Analysis", "Professional Reporting"];

const valuationReasons = [
  "Selling a business with confidence",
  "Buying a company at a fair price",
  "Supporting legal disputes with objective analysis",
  "Raising capital with credible valuation logic",
  "Planning succession and leadership transitions",
  "Structuring partner exits and buyouts",
  "Guiding strategic growth and reinvestment",
];

const valuationApproaches = [
  {
    title: "Income Approach",
    description:
      "Estimates value based on expected future cash flows and risk-adjusted return assumptions. Often useful when earnings quality and growth trajectory drive value.",
  },
  {
    title: "Market Approach",
    description:
      "Benchmarks the business against relevant market transactions and valuation multiples. Helpful when comparable deals and industry data are available.",
  },
  {
    title: "Asset Approach",
    description:
      "Evaluates the fair value of assets and liabilities to determine net business value. Typically considered for asset-heavy businesses or special situations.",
  },
];

const audiences = [
  "Attorneys",
  "Business Owners",
  "Investors",
  "Buyers",
  "Partners in Buyout Situations",
  "Advisory Firms",
];

const useCases = [
  "Buy/Sell Transactions",
  "Divorce & Legal Matters",
  "Shareholder Disputes",
  "Immigration & Investor Cases",
  "Exit Planning",
  "Acquisition Due Diligence",
];

const reasonsToChoose = [
  "Tailored valuation analysis",
  "Clean, professional reports",
  "Fast delivery options",
  "Confidential process",
  "Strategic business expertise",
  "Responsive support team",
];

const processSteps = [
  { title: "Discovery call", description: "Define objectives, timeline, and decision context." },
  { title: "Financial data collection", description: "Review financials, business drivers, and supporting documents." },
  { title: "Valuation analysis", description: "Apply the appropriate methodology and test assumptions." },
  { title: "Delivery of report & next-step guidance", description: "Provide a clear company valuation report and strategic recommendations." },
];

const valueFactors = [
  "Revenue consistency and quality",
  "Profit margins and operating efficiency",
  "Growth trends and scalability",
  "Owner dependency and management depth",
  "Recurring income profile",
  "Industry demand and outlook",
  "Customer concentration risk",
  "Systems and process maturity",
  "Overall risk profile",
];

const testimonials = [
  {
    quote:
      "Stratena delivered a clear company valuation report on a tight deadline. It helped us frame negotiations with more confidence.",
    author: "Corporate Attorney, Mid-Market Transaction",
  },
  {
    quote:
      "Their team provided valuable support during our acquisition process. The analysis was practical, professional, and easy to work with.",
    author: "Managing Director, Acquisition Advisory Firm",
  },
  {
    quote:
      "Excellent communication and high-quality output. The valuation gave our client a stronger strategic view beyond just a number.",
    author: "Partner, Business Law Practice",
  },
];

const faqs = [
  {
    question: "How is a business valuation calculated?",
    answer:
      "A professional business valuation typically evaluates financial performance, growth profile, risk factors, and market comparables using one or more accepted methodologies such as income, market, and asset approaches.",
  },
  {
    question: "How much does a business valuation cost?",
    answer:
      "Pricing depends on complexity, timeline, and scope. We provide a clear proposal after an initial consultation so you understand deliverables and turnaround before engagement.",
  },
  {
    question: "How long does it take?",
    answer:
      "Standard timelines vary by case complexity and data readiness. Fast-turnaround options are available for urgent legal, transaction, or planning needs.",
  },
  {
    question: "What documents are needed?",
    answer:
      "Most projects require historical financial statements, tax returns, ownership details, operating information, and relevant market context. We provide a tailored checklist at kickoff.",
  },
  {
    question: "Can you help attorneys with client matters?",
    answer:
      "Yes. We regularly support attorneys with business valuation for attorneys, including litigation support contexts, investor matters, and transaction-related advisory needs.",
  },
  {
    question: "Do you value small businesses?",
    answer:
      "Yes. Our small business valuation services are designed for owner-operated and growth-stage companies as well as larger middle-market situations.",
  },
  {
    question: "Which valuation method is best?",
    answer:
      "The right method depends on the business model, industry, earnings profile, and valuation objective. Many assignments use a weighted view across multiple methods.",
  },
  {
    question: "How do I get started?",
    answer:
      "Book a consultation or request valuation support. We will confirm scope, timeline, and required information, then begin the engagement with a focused discovery process.",
  },
];

export function AttorneyHubBusinessValuationPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white py-20 lg:py-24">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top,#0f172a12,transparent_55%)]" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Attorney Hub · Business Valuation Services</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-charcoal">
              Business Valuation for Legal Matters
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              Know what your business is worth with confidence. Get a clear, professionally prepared company valuation report for transactions, disputes, planning, or investor decisions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-primary"
              >
                Request Valuation
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-charcoal transition-colors hover:bg-slate-50"
              >
                Book Consultation
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-3xl" />
            <Image
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&fm=jpg&q=80&w=1800"
              alt="Financial valuation documents with calculator and charts"
              className="relative z-10 aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl"
            
            width={1600}
            height={900}
          />
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-7xl px-6 lg:px-20">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map((badge) => (
              <div key={badge} className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Why business valuation matters</h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            A professional business appraisal supports higher-quality decisions when stakes are high. Whether you are preparing for valuation for acquisition,
            planning a partner exit, or resolving a legal matter, a structured business worth calculation improves clarity and negotiating position.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {valuationReasons.map((reason) => (
              <article key={reason} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-charcoal">{reason}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">How we value businesses</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Our business valuation services are tailored to each assignment. Method selection depends on business type, industry, size, historical performance,
            financial quality, and the objective of the valuation.
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {valuationApproaches.map((approach) => (
              <article key={approach.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-charcoal">{approach.title}</h3>
                <p className="mt-3 text-slate-600">{approach.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Who we help</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience} className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
                <h3 className="text-lg font-bold text-charcoal">{audience}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Use cases we support</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <article key={useCase} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-bold text-charcoal">{useCase}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Why choose Stratena</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reasonsToChoose.map((reason) => (
              <article key={reason} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-charcoal">{reason}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">How it works</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Step {index + 1}</p>
                <h3 className="mt-3 text-lg font-bold text-charcoal">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">How much is my business worth?</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            Value is shaped by more than one metric. Our professional business valuation process examines the factors that influence enterprise value and decision readiness.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {valueFactors.map((factor) => (
              <article key={factor} className="rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
                <h3 className="text-base font-semibold text-charcoal">{factor}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Client feedback</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.author} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-slate-700">“{item.quote}”</p>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{item.author}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-20">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Business valuation FAQ</h2>
          <p className="mt-3 text-slate-600">Answers to common questions about business valuation services, methods, timelines, and deliverables.</p>
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

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-slate-50 px-6 py-12 text-center lg:px-16">
          <h2 className="text-4xl font-extrabold text-charcoal md:text-5xl">Need to Know What Your Business Is Worth?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Get a professional valuation report built for decisions, negotiations, and growth.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-navy px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-primary"
            >
              Request Valuation
            </Link>
            <Link
              href="mailto:partners@stratena.com?subject=Speak%20with%20a%20Stratena%20Advisor"
              className="inline-flex items-center justify-center rounded-xl border-2 border-slate-200 bg-white px-8 py-4 text-base font-bold text-charcoal transition-colors hover:bg-slate-100"
            >
              Speak with an Advisor
            </Link>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur sm:hidden">
        <Link
          href="/contact"
          className="inline-flex w-full items-center justify-center rounded-lg bg-navy px-4 py-3 text-sm font-bold text-white"
        >
          Request Valuation
        </Link>
      </div>
    </>
  );
}
