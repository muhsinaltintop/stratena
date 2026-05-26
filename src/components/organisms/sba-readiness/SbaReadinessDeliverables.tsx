import Link from "next/link";

const painPoints = [
  "Weak SBA loan business plan structure",
  "SBA loan financial projections that do not match operations",
  "Missing or disorganized supporting documents",
  "Unclear use of funds and repayment narrative",
  "Applications submitted before true lender readiness",
];

const solutions = [
  {
    title: "Strategic Application Positioning",
    body: "We align your business story, financing need, and repayment logic so lenders can evaluate your file quickly and confidently.",
  },
  {
    title: "Lender-Focused Documentation",
    body: "Every package includes clear narrative writing, underwriting-conscious assumptions, and organized support materials.",
  },
  {
    title: "Readiness-First Process",
    body: "Before submission, we identify gaps, resolve inconsistencies, and strengthen your package to reduce avoidable delays.",
  },
];

const benefits = [
  "U.S. lender expectations knowledge",
  "Professional writers & analysts",
  "Fast delivery",
  "Customized plans",
  "Higher approval readiness",
  "Ongoing support",
];

const processSteps = [
  "Free consultation",
  "We gather your info",
  "We build your package",
  "You apply confidently",
];

export function SbaReadinessDeliverables() {
  return (
    <>
      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-charcoal md:text-4xl">
                Why SBA Loan Applications Get Delayed or Rejected
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Most files are declined for quality and clarity issues, not just credit profile. We help fix these before they cost you time.
              </p>

              <ul className="mt-8 space-y-3">
                {painPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700 md:text-base">
                    <span className="material-symbols-outlined mt-0.5 text-[20px] text-red-500">cancel</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-5 rounded-xl bg-navy p-7 text-white lg:p-8">
              <h3 className="text-2xl font-bold">How Stratena Solves It</h3>
              {solutions.map((item, index) => (
                <article key={item.title} className="rounded-lg border border-white/15 bg-white/5 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-300">0{index + 1}</p>
                  <h4 className="mt-1 text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.body}</p>
                </article>
              ))}
              <div className="text-sm text-slate-300">
                Need complementary support? Explore our
                {" "}
                <Link href="/business-plan/sba-loan-business-plans" className="font-semibold text-white underline decoration-primary/70 underline-offset-4">
                  SBA loan business plans
                </Link>
                ,
                {" "}
                <Link href="/consulting/financial-consulting" className="font-semibold text-white underline decoration-primary/70 underline-offset-4">
                  financial projections consulting
                </Link>
                , and
                {" "}
                <Link href="/consulting" className="font-semibold text-white underline decoration-primary/70 underline-offset-4">
                  strategic consulting
                </Link>
                .
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
            <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">Why Choose Stratena for SBA Loan Application Help</h2>
            <p className="mt-4 text-lg text-slate-600">
              Premium execution, practical guidance, and lender-focused detail from kickoff through submission.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <article key={benefit} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="flex items-start gap-2 text-lg font-semibold text-charcoal">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span>{benefit}</span>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-slate-50 p-8 lg:p-12">
          <h2 className="text-center text-3xl font-extrabold text-charcoal md:text-4xl">Our 4-Step SBA Funding Preparation Process</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <article key={step} className="rounded-xl bg-white p-6 text-center shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold text-charcoal">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
