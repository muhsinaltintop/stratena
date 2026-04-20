const testimonials = [
  {
    quote:
      "After our first lender feedback call, we knew our package was too thin. Stratena rebuilt the business plan and projections into something our banker could actually underwrite.",
    name: "D. Robinson",
    role: "Franchise Buyer, Texas",
  },
  {
    quote:
      "We were previously denied due to documentation gaps. This time, everything from use of funds to repayment assumptions was clear and consistent.",
    name: "M. Patel",
    role: "Small Business Owner, Illinois",
  },
  {
    quote:
      "The process was structured and fast. Their team asked the right questions, and our SBA 7(a) file looked far more professional than what we had before.",
    name: "A. Martinez",
    role: "Startup Founder, California",
  },
];

export function SbaReadinessTestimonials() {
  return (
    <section className="bg-white px-6 py-20 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <h2 className="text-3xl font-extrabold text-charcoal md:text-4xl">What Clients Say About Our SBA Loan Consultant Support</h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from founders and owners who needed stronger SBA loan application help.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
              <p className="mt-6 text-sm font-bold text-charcoal">{item.name}</p>
              <p className="text-sm text-slate-500">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
