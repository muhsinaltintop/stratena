import { Newsreader } from "next/font/google";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import Link from "next/link";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});


export default function AboutPage() {
  return (
    <div
      className={`${newsreader.variable} min-h-screen bg-[#f6f6f8] text-slate-900 antialiased`}
    >
      <SiteHeader />

      <section className="relative flex min-h-[30vh] flex-col items-center justify-center overflow-hidden bg-white px-6 py-20 text-center">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#135bec_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1
            className="mb-6 text-5xl font-bold leading-[1.1] text-slate-900 md:text-7xl"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Strategic Clarity, Delivered Precisely
          </h1>
          <p
            className="text-xl italic text-slate-600 md:text-2xl"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Boutique business planning for decisions that require precision.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 lg:px-20">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
          <img
            alt="Minimalist luxury corporate office interior"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDl6ibOQEK22iWLxGsU-1OTJ2LOP8OFzRAxVj_YVNyP2MIHbfADvNf79TtHyxlGw-vYF6O5N9ZI5LosQ-WA1SJT6Iem7Rln0e3FNS95mHHrYnDzjAvc-I3rvClsnQWI6ujo9vH5chQsAJ1mn9lKHwTndwo-41fDazK9egwoBAsKpHZQFmuxf4efhQmeyYq-Lo_UfC6D33L3dLCkQWs2ao0Tgd6OWWruDCtsHKz3zK8LTBcF1K6OpTvf9DiAfhR4mLvHypCo9OFHgq9w"
          />
        </div>
        <div className="space-y-8">
          <h2
            className="text-4xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            What are we doing?
          </h2>
          <div
            className="space-y-6 text-lg leading-relaxed text-slate-700"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            <p>
              Stratena helps founders, investors, attorneys, and growing
              businesses move from concept to credibility. We develop
              immigration-grade business plans, practical consulting solutions,
              and SBA loan readiness materials designed to bring strategy,
              operations, and financial logic together in a clear and
              professional way.
            </p>
            <p>
              Our work is built for clients who need more than a generic
              document. They need planning materials and business guidance that
              can stand up to legal review, internal decision-making, lender
              scrutiny, and real-world execution. That is why every engagement
              is grounded in business logic, market awareness, and operational
              clarity.
            </p>
            <p>
              Whether the objective is an immigration-related matter, a business
              launch, operational improvement, or financing preparation,
              Stratena helps clients present a stronger business story and make
              better business decisions. We build materials that are structured,
              custom, research-based, and aligned with how serious businesses
              actually grow.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="border-y border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid gap-12 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                className="flex flex-col items-center text-center"
                key={pillar.title}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#135bec]/10 text-[#135bec]">
                  <span className="material-symbols-outlined scale-125">
                    {pillar.icon}
                  </span>
                </div>
                <h3
                  className="mb-3 text-xl font-bold"
                  style={{ fontFamily: "var(--font-newsreader)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-slate-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="mx-auto max-w-7xl px-6 py-24 lg:px-20">
        <div className="mb-16 text-center">
          <h2
            className="text-4xl font-bold text-slate-900"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Our Leadership
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#135bec]" />
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {leaders.map((leader) => (
            <div className="group" key={leader.name}>
              <div className="mb-6 aspect-[3/4] overflow-hidden rounded-[12px] bg-slate-200">
                <img
                  alt={leader.alt}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  src={leader.src}
                />
              </div>
              <h4
                className="text-2xl font-bold text-slate-900"
                style={{ fontFamily: "var(--font-newsreader)" }}
              >
                {leader.name}
              </h4>
              <p className="mt-1 text-sm font-semibold uppercase tracking-widest text-[#135bec]">
                {leader.title}
              </p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="bg-[#F7F9FC] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="material-symbols-outlined mb-8 block text-6xl text-[#135bec]/40">
            format_quote
          </span>
          <blockquote
            className="text-3xl italic leading-snug text-slate-800 md:text-4xl"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            &ldquo;Our mission is to make business ideas credible under scrutiny.
We develop plans and documentation that hold up in legal, financial, and operational contexts.&rdquo;
          </blockquote>
          <cite className="mt-8 block text-lg font-bold not-italic text-slate-900">
            — Albert S.Y. - 2026
          </cite>
        </div>
      </section>

      <section className="bg-[#1E2A38] px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2
            className="mb-8 text-4xl font-bold md:text-5xl"
            style={{ fontFamily: "var(--font-newsreader)" }}
          >
            Begin a Strategic Partnership
          </h2>
          <p className="mb-12 text-lg text-slate-300">
            Discuss your documentation and strategic needs with our senior
            consultants.
          </p>
          <Link href="/contact">
          <button className="rounded-lg bg-white px-10 py-4 text-lg font-bold text-[#1E2A38] transition-all hover:bg-[#135bec] hover:text-white">
            Schedule a Consultation
          </button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 pb-10 pt-20 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-20 grid gap-12 md:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="text-[#135bec]">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      clipRule="evenodd"
                      d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
                      fill="currentColor"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
                <span
                  className="text-xl font-bold"
                  style={{ fontFamily: "var(--font-newsreader)" }}
                >
                  Stratena
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-500">
                Boutique strategic documentation and business planning for the
                world&apos;s most discerning firms.
              </p>
            </div>
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Services</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Strategic Planning
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Legal Documentation
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Corporate Governance
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Crisis Advisory
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Company</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Insights
                  </a>
                </li>
                <li>
                  <a
                    className="transition-colors hover:text-[#135bec]"
                    href="#"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="mb-6 font-bold text-slate-900">Contact</h5>
              <ul className="space-y-4 text-sm text-slate-600">
                <li>advisory@stratena.com</li>
                <li>+1 (212) 555-0198</li>
                <li>Madison Avenue, New York</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-10 text-xs text-slate-400 md:flex-row">
            <p>© 2024 Stratena Strategic Consulting. All rights reserved.</p>
            <div className="flex gap-8">
              <a className="hover:text-slate-600" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-slate-600" href="#">
                Terms of Service
              </a>
              <a className="hover:text-slate-600" href="#">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
