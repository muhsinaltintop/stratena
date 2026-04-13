const faqs = [
  {
    question: "How does Stratena differ from a standard business plan writer?",
    answer:
      "Generic writers focus on marketing; we focus on underwriting. Our consultants are former bank officers and SBA specialists who understand exactly what an underwriter looks for in debt service coverage ratios and secondary repayment sources.",
  },
  {
    question: "Do you guarantee loan approval?",
    answer:
      "While we cannot guarantee a third-party lender's decision, we guarantee that your documentation will meet or exceed all SBA standard operating procedure (SOP) requirements for the narrative and financial package.",
  },
  {
    question: "Can you work directly with my lender?",
    answer:
      "Yes. Many of our clients are referred directly by lenders. We can join underwriting calls to defend the financial assumptions and clarify technical aspects of the business plan.",
  },
];

export function SbaReadinessFaq() {
  return (
    <section className="bg-white px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-16 text-center text-4xl font-extrabold text-charcoal">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq) => (
            <article className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm" key={faq.question}>
              <h4 className="flex items-center justify-between text-lg font-bold text-charcoal">
                {faq.question}
                <span className="material-symbols-outlined text-slate-400">expand_more</span>
              </h4>
              <p className="mt-4 leading-relaxed text-slate-600">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
