import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { pageLookup } from "@/lib/navigation";
import { SiteHeader } from "@/components/organisms/SiteHeader";

export const dynamicParams = false;

const pageContent: Record<string, string[]> = {
  "/about": [
    "Stratena was built around a simple idea: strong business documents should reflect a strong business strategy. Too many business plans are written like templates, disconnected from how a company actually operates, grows, hires, and generates revenue. We take a different approach.",
    "Our work combines business planning, market research, operational thinking, and financial clarity to create materials that are useful in real decision-making environments. That makes Stratena especially valuable for immigration matters, attorney-supported cases, new ventures, business expansion, and SBA loan preparation.",
    "We do not see business plans as standalone paperwork. We see them as strategic tools that should communicate substance, credibility, and direction. By connecting planning with execution, Stratena helps clients turn ideas into organized, practical, and defensible business narratives that support both presentation and performance.",
  ],
  "/business-plan": [
    "Stratena's business plans are built for clients who need more than a polished presentation. We create custom business plans that combine market research, operational structure, revenue logic, hiring plans, and financial projections into a clear and defensible business story.",
    "This makes our work especially relevant for immigration-related matters, founder-led ventures, business expansion, and funding preparation. Every plan is tailored to the company's actual business model, market environment, growth stage, and strategic goals. We do not rely on recycled templates or one-size-fits-all narratives.",
    "Instead, we build business plans that help businesses present themselves with greater credibility to attorneys, reviewers, lenders, and stakeholders. The result is a document that looks professional, reads clearly, and reflects the commercial reality behind the business. At Stratena, the goal is not just to deliver a business plan, but to develop a stronger and more convincing business case.",
  ],

  "/business-plan/e-1-business-plan": [
    "An E-1 business plan should clearly explain how the company engages in substantial trade between the United States and the treaty country. It should present the trade model, commercial activity, operational structure, and financial direction in a way that feels organized, credible, and commercially realistic.",
    "Stratena develops E-1 business plans that connect trade flow, product or service delivery, target customers, market opportunity, and financial projections into a cohesive business narrative. We focus on showing that the business is active, practical, and positioned for continued growth rather than being only theoretical on paper.",
    "Our E-1 business plans are tailored to the specific business, industry, and trade relationship involved. By combining business logic with strong presentation, we help clients create a plan that supports the broader case while also serving as a useful strategic document for the business itself.",
  ],
  "/business-plan/e-2-business-plan": [
    "An E-2 business plan should do more than describe an investment. It should show that the business is real, active, commercially viable, and positioned for meaningful growth. A strong E-2 plan connects the investment to a clear business model, hiring logic, revenue strategy, and realistic operating structure.",
    "Stratena creates E-2 business plans that bring those elements together in a professional and well-organized format. We develop plans that explain what the business does, how it will generate revenue, how it will serve its market, and how it is expected to grow over time. Financial projections are supported by the broader operating story rather than standing alone.",
    "Our approach is designed to help clients present a venture that looks thoughtful, practical, and execution-ready. Each E-2 business plan is custom-built around the client’s business concept, industry context, and long-term vision.",
  ],
  "/business-plan/eb-1c-business-plan": [
    "An EB-1C business plan should support the larger story of multinational growth, executive or managerial leadership, and the commercial purpose of the U.S. operation. It needs to explain how the U.S. entity fits into the broader enterprise and why its growth matters from a business standpoint.",

    "Stratena develops EB-1C business plans that organize company structure, expansion strategy, market opportunity, staffing plans, and management responsibilities into a clear and credible business narrative. We focus on showing that the U.S. operation has substance, direction, and a practical role within the larger organization.",

    "Our goal is to strengthen the business side of a complex petition by creating a plan that is detailed enough to be useful, but clear enough to be persuasive. The final result is a structured document that supports both business logic and case presentation.",
  ],
  "/business-plan/eb-2-niw-business-plan": [
    "An EB-2 NIW business plan should define the proposed endeavor, explain its commercial and practical value, and show a credible path to execution. It should help turn a professional vision into a structured business narrative that demonstrates planning, direction, and real-world viability.",
    "Stratena prepares EB-2 NIW business plans that combine business strategy, market analysis, operational milestones, and financial direction into a thoughtful and organized document. We focus on helping clients articulate what they plan to build, how they plan to build it, and why the business model is commercially sound.",
    "Our EB-2 NIW business plans are especially useful for professionals, founders, and independent operators who need their proposed venture to feel clear, serious, and actionable. The result is a business plan that supports both credibility and clarity from the very first page.",
  ],
  "/business-plan/eb-5-business-plan": [
    "An EB-5 business plan requires a detailed and well-structured presentation of the enterprise, the investment framework, the operating model, and the job creation strategy. It should explain not only what the business intends to do, but also how capital will be used, how operations will develop, and how growth will be measured.",

    "Stratena develops EB-5 business plans that bring together market opportunity, business structure, use of funds, hiring plans, operational strategy, and financial projections in one cohesive document. We focus on consistency, realism, and clarity so that the plan reads like a serious business case rather than a generic planning exercise.",

    "Our EB-5 work is designed to help translate complex projects into organized and defensible narratives. The final business plan supports a stronger overall presentation by making the business itself easier to understand and evaluate.",
  ],
  "/business-plan/h1-b-business-plan": [
    "In startup, founder-led, or growth-stage business contexts, an H-1B business plan can help explain the company’s commercial activity, operating model, and long-term direction. A strong plan shows that the business is organized, active, and capable of supporting its strategic objectives with real business substance.",

    "Stratena prepares H-1B business plans that describe the company’s services, market position, staffing approach, revenue model, and projected growth in a clear and professional way. We focus on building a document that helps the business look credible, structured, and commercially grounded.",

    "Our approach is especially useful when a business needs to present itself more clearly as part of a broader legal or strategic matter. The final result is a practical business plan that improves both business communication and overall case presentation.",
  ],
  "/business-plan/l-1-business-plan": [
    "An L-1 business plan should explain how the U.S. entity will operate, grow, and support the transfer of a qualifying employee. It needs to show that the business is more than an idea by presenting a realistic operating model, staffing roadmap, and commercial growth strategy.",

    "Stratena creates L-1 business plans that connect company background, U.S. expansion plans, organizational structure, market opportunity, operational detail, and financial projections into one structured narrative. We focus on helping clients present a U.S. operation that feels purposeful, credible, and execution-ready.",

    "Each L-1 business plan is tailored to the company’s industry, growth plans, and cross-border business structure. The result is a document that helps clarify the logic of the expansion while presenting the business in a more organized and persuasive way.",
  ],
  "/business-plan/sba-loan-business-plans": [
    "An SBA loan business plan should help a lender understand how the business works, how the requested funds will be used, and how repayment is expected to be supported over time. It is not just a descriptive document. It is part of the borrower’s overall credibility and readiness story.",

    "Stratena prepares SBA loan business plans with lender-facing structure, market research, operational detail, and disciplined financial projections. We develop plans for new businesses, acquisitions, expansions, refinancing scenarios, and working capital needs, always focusing on clarity and business logic.",

    "Our SBA loan business plans are designed to help borrowers enter funding conversations with stronger materials and a more professional presentation. By combining business narrative with practical financial planning, we help businesses communicate readiness, purpose, and commercial viability more effectively.",
  ],
  "/consulting": [
    "Stratena’s consulting services are built for businesses that need more than a document. We help clients strengthen the strategy, operations, and financial logic behind the business so that it is not only well presented, but also better prepared to perform and grow.",

    "Our consulting work is especially valuable for founders preparing for immigration matters, market entry, business launches, operational improvement, internal realignment, or funding review. We focus on practical solutions that improve clarity, structure, and execution rather than theory alone.",

    "Because our work is closely connected to planning and readiness, consulting at Stratena is designed to strengthen the business behind the presentation. That makes our support useful both before and after a business plan is written. The objective is simple: help clients build businesses that are easier to explain, easier to manage, and better prepared for growth.",
  ],
  "/consulting/strategy-consulting": [
    "Strategy consulting at Stratena is designed to help businesses move with more direction and less guesswork. We work with clients to clarify positioning, evaluate opportunities, define priorities, and align business decisions with realistic growth objectives.",

    "Whether a company is entering a new market, launching a new venture, adjusting its model, or preparing for a major business milestone, strategy work helps bring structure to the next phase. We focus on practical business questions such as where the opportunity is, what the business should prioritize, how growth should be staged, and what the market is likely to support.",

    "Our strategy consulting process is built around clarity, relevance, and execution. The goal is not to produce abstract recommendations, but to help businesses make sharper decisions, communicate a stronger direction, and move forward with greater confidence.",
  ],

  "/consulting/operations-consulting": [
    "Operations consulting is where business planning becomes business execution. Stratena helps clients translate goals into practical operating structures, internal processes, team responsibilities, and workflow systems that support growth in a more organized way.",

    "We review how the business runs today, identify gaps or inefficiencies, and develop improvements that make execution clearer and more scalable. This may include process design, role alignment, operating structure, service delivery logic, or business coordination across functions.",

    "Our operations consulting work is especially valuable for businesses that need to demonstrate not only vision, but also operational credibility. A business can have a compelling idea, but if the operating model feels weak or unclear, confidence drops. We help businesses build stronger foundations so the company runs better and presents itself more convincingly.",
  ],
  "/consulting/financial-consulting": [
    "Financial planning support at Stratena brings discipline and clarity to the numbers behind the business. We help clients organize assumptions, develop realistic projections, evaluate revenue models, and strengthen the financial logic that supports a business plan, funding request, or strategic decision.",

    "Our focus is not abstract finance. It is business-ready financial thinking that helps clients explain how the company earns revenue, manages costs, supports growth, and plans for future performance. Stronger financial planning improves both internal decision-making and external presentation.",

    "This service is especially useful for founders preparing business plans, businesses seeking funding, and companies that need their numbers to align more clearly with their operating story. The result is a financial framework that feels more coherent, more defensible, and more useful in real business conversations.",
  ],
  "/consulting/company-check-up": [
    "Business Readiness Assessment is Stratena’s structured review of how prepared a business is for growth, presentation, funding, or strategic next steps. We assess core areas such as business model clarity, operational structure, staffing logic, market position, financial direction, and execution readiness.",

    "This service is ideal for founders and operators who want an outside perspective before launching, expanding, applying, or entering lender or attorney conversations. Sometimes the business idea is strong, but the structure around it is still underdeveloped. A readiness review helps identify what is clear, what is missing, and what should be strengthened first.",

    "The outcome is not just feedback. It is a more focused roadmap for improvement. We help clients understand where the business stands today and what needs to happen to make it more credible, organized, and growth-ready.",
  ],

  "/consulting/partnership-protocols": [
    "Strong partnerships need more than alignment in principle. They need clarity around roles, decision-making, ownership expectations, communication, and accountability. Without structure, even promising partnerships can create confusion, friction, and long-term inefficiency.",

    "Stratena helps businesses develop partnership structures that support healthier collaboration and clearer operating dynamics. This may include defining responsibilities, clarifying authority, improving decision frameworks, and organizing expectations around how partners work together in practice.",

    "This service is especially useful for founder partnerships, family businesses, investor-backed ventures, and companies that are growing into more complex operating relationships. Our goal is to help businesses build partnership foundations that reduce ambiguity, improve coordination, and support stronger long-term execution.",
  ],
  "/sba-loan-readiness-packages": [
    "SBA loan readiness packages are designed for businesses that want to approach lenders with stronger preparation and greater confidence. A business may need more than a loan business plan alone. It may also need clearer financial materials, stronger business positioning, and a more lender-ready overall presentation.",

    "Stratena helps organize the strategic, operational, and financial components that support a serious loan application. This can include business narrative development, market context, financial planning, use-of-funds clarity, presentation logic, and broader readiness support before underwriting questions begin.",

    "Our objective is to help borrowers look prepared, credible, and financing-ready from the start. By bringing planning, structure, and business logic together, we help clients enter the lending process with materials that feel more complete, more organized, and more professionally developed.",
  ],
  "/attorney-hub": [
    "Attorney Hub is Stratena’s dedicated support space for law firms and attorneys who need reliable business-side materials for client matters. We work alongside counsel to prepare business plans, market research, valuation-related support, and RFE response materials that are organized, strategic, and easy to integrate into a broader case strategy.",

    "Our role is to strengthen the commercial narrative behind the matter while helping attorneys save time and maintain quality. We understand that legal teams often need business documentation that is not only polished, but also logically structured and responsive to the facts of the case.",

    "Attorney Hub is built around responsiveness, collaboration, and practical support. Whether the matter involves a new filing, a revised business plan, research support, or a more developed case narrative, Stratena helps attorneys present stronger business-side materials with greater confidence.",
  ],
  "/attorney-hub/business-valuation": [
    "Business valuation support can help attorneys and clients present a more grounded view of enterprise value, commercial positioning, and the business logic behind a company. In the right context, valuation-related work adds structure and perspective to how a business is understood.",

    "Stratena approaches valuation support with a practical, documentation-driven mindset. We connect the business model, market environment, operating profile, growth direction, and financial picture to help frame value in a clearer and more organized way. Our focus is not on inflated narratives, but on logical presentation and credible business context.",

    "Where a matter benefits from a stronger value story, we help organize supporting materials that make the business easier to understand and discuss. The result is clearer positioning and stronger business-side support for the broader legal or strategic objective.",
  ],
  "/attorney-hub/market-search": [
    "Market research at Stratena is designed to strengthen business plans, strategic decisions, legal matters, and funding preparation with targeted commercial insight. Strong research helps explain market demand, customer behavior, industry conditions, competition, location dynamics, and growth opportunity in a more credible way.",

    "Rather than relying on generic summaries, we focus on research that supports a real business story. The objective is to make the market context more useful, more relevant, and more directly connected to the business model being presented. This creates stronger planning materials and more convincing business narratives.",

    "Our market research services support immigration-related business plans, attorney-led matters, SBA loan preparation, and broader consulting work. When the business environment needs to be explained clearly, strong research becomes one of the most valuable tools in the file.",
  ],
  "/attorney-hub/request-for-evidence-rfe-response": [
    "Request for Evidence response support is designed for matters that need stronger business documentation, clearer commercial explanations, or more developed context around the company and its plans. When an RFE highlights gaps, the business-side response needs to be organized, precise, and strategically aligned.",

    "Stratena works with attorneys and clients to reinforce the business narrative through revised business plans, added market research, refined financial framing, and stronger operational explanation. We focus on developing materials that directly improve clarity and strengthen the overall logic of the response.",

    "Our role is to help turn weak or incomplete business-side presentation into something more structured and more persuasive. When additional explanation is required, quality matters. A better-organized business narrative can make the broader response package stronger, more coherent, and easier to understand.",
  ],
  "/stratena-scope": [
    "Stratena Scope is our insight section covering business planning, immigration-related strategy, market trends, operational readiness, financial planning, and SBA loan preparation. It is a newsletter-style space where founders, attorneys, and business operators can explore practical perspectives on how businesses are built, positioned, and presented.", 

    "Some articles will focus on planning strategy. Some will explore market and operational questions. Others will look at lender readiness, case support issues, or broader business decision-making. The purpose of Stratena Scope is not simply to publish content, but to share thinking that is useful, relevant, and grounded in real business situations.",
    
    "Stratena Scope reflects how we work: commercially aware, detail-oriented, and focused on helping businesses move with greater clarity. It is where strategy, planning, and practical insight meet.",
  ],
};

export function generateStaticParams() {
  return Object.keys(pageLookup)
    .filter((path) => path !== "/")
    .map((path) => ({ slug: path.slice(1).split("/") }));
}

const pageImageBySection = {
  about: {
    src: "/images/pages/about-hero.svg",
    alt: "Team planning session with strategy notes",
  },
  businessPlan: {
    src: "/images/pages/business-plan-hero.svg",
    alt: "Business planning dashboard with financial charts",
  },
  consulting: {
    src: "/images/pages/consulting-hero.svg",
    alt: "Consulting workshop with process mapping",
  },
  default: {
    src: "/images/pages/insight-hero.svg",
    alt: "Business growth insights and trend analysis",
  },
} as const;

function getPageImage(currentPath: string) {
  if (currentPath === "/about") {
    return pageImageBySection.about;
  }

  if (currentPath.startsWith("/business-plan")) {
    return pageImageBySection.businessPlan;
  }

  if (currentPath.startsWith("/consulting")) {
    return pageImageBySection.consulting;
  }

  return pageImageBySection.default;
}

export default async function MenuPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const currentPath = `/${slug.join("/")}`;
  const page = pageLookup[currentPath];

  if (!page) {
    notFound();
  }

  const paragraphs = pageContent[currentPath] ?? [
    "This page has been created and linked to the navigation menu. You can replace this placeholder content with your final copy and service details.",
  ];
  const pageImage = getPageImage(currentPath);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-16 lg:px-20 lg:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {page.parent ? `${page.parent} · ${page.title}` : `${page.title}`}
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-slate-900 sm:mt-4 sm:text-4xl">
          {page.title}
        </h1>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm sm:mt-8">
          <Image
            src={pageImage.src}
            alt={pageImage.alt}
            width={1200}
            height={680}
            className="h-52 w-full object-cover sm:h-64 md:h-72"
            priority
          />
        </div>
        <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-slate-600">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Contact Stratena
        </Link>
      </main>
    </div>
  );
}
