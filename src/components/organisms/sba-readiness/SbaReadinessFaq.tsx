const faqs = [
  {
    question: "What is an SBA loan readiness package?",
    answer:
      "An SBA loan readiness package is a structured set of documents and advisory support designed to make your loan file lender-ready. It typically includes strategy, narrative, projections, and document organization before submission.",
  },
  {
    question: "Do I need a business plan for an SBA loan?",
    answer:
      "In most cases, yes. Lenders usually expect an SBA loan business plan that explains your model, market, management team, use of funds, and repayment capability in a clear format.",
  },
  {
    question: "How long does it take to complete a package?",
    answer:
      "Most projects are completed in 7 to 15 business days depending on package scope, responsiveness, and complexity. Priority timelines are available in premium engagements.",
  },
  {
    question: "Do you help startups applying for SBA funding?",
    answer:
      "Yes. We support startup founders with SBA startup loan support, including business plan development, assumptions modeling, and lender-focused SBA funding preparation.",
  },
  {
    question: "Can you help if I was denied before?",
    answer:
      "Absolutely. We often work with previously denied borrowers to diagnose weak areas, rebuild the file, and improve lender confidence before reapplying.",
  },
  {
    question: "What SBA loan programs do you support?",
    answer:
      "We support SBA 7(a), 504, and microloan-related preparation, including standard operating businesses, franchise buyers, and acquisition-focused borrowers.",
  },
  {
    question: "Are financial projections included?",
    answer:
      "Yes. Growth and Premium tiers include SBA loan financial projections. We align revenue, expense, cash flow, and debt service assumptions with your business model.",
  },
  {
    question: "How do I get started with Stratena?",
    answer:
      "Book a free consultation. We review your current status, identify documentation gaps, and recommend the best SBA loan readiness package for your goals.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export function SbaReadinessFaq() {
  return (
    <section className="bg-white px-6 py-20 lg:px-20 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-charcoal md:text-4xl">SBA Loan Readiness FAQ</h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm" open={false}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-bold text-charcoal marker:content-none">
                {faq.question}
                <span className="material-symbols-outlined text-slate-400 transition-transform group-open:rotate-180">expand_more</span>
              </summary>
              <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </section>
  );
}
