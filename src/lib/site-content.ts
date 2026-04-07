export type SitePage = {
  title: string;
  seoTitle: string;
  metaDescription: string;
  paragraphs: string[];
};

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Business Plan", href: "/business-plan" },
  { label: "E-1 Business Plan", href: "/business-plan/e-1-business-plan" },
  { label: "E-2 Business Plan", href: "/business-plan/e-2-business-plan" },
  { label: "EB-1C Business Plan", href: "/business-plan/eb-1c-business-plan" },
  { label: "EB-2 NIW Business Plan", href: "/business-plan/eb-2-niw-business-plan" },
  { label: "EB-5 Business Plan", href: "/business-plan/eb-5-business-plan" },
  { label: "H1-B Business Plan", href: "/business-plan/h1-b-business-plan" },
  { label: "L-1 Business Plan", href: "/business-plan/l-1-business-plan" },
  { label: "SBA Loan Business Plans", href: "/business-plan/sba-loan-business-plans" },
  { label: "Consulting", href: "/consulting" },
  { label: "Strategy Consulting", href: "/consulting/strategy-consulting" },
  { label: "Operations Consulting", href: "/consulting/operations-consulting" },
  { label: "Financial Consulting", href: "/consulting/financial-consulting" },
  { label: "Company Check Up", href: "/consulting/company-check-up" },
  { label: "Partnership Protocols", href: "/consulting/partnership-protocols" },
  { label: "SBA Loan Readiness Packages", href: "/consulting/sba-loan-readiness-packages" },
  { label: "Attorney Hub", href: "/attorney-hub" },
  { label: "Business Valuation", href: "/attorney-hub/business-valuation" },
  { label: "Market Research", href: "/attorney-hub/market-research" },
  { label: "Request for Evidence (RFE) Response", href: "/attorney-hub/request-for-evidence-rfe-response" },
  { label: "Stratena Scope", href: "/stratena-scope" },
  { label: "Contact", href: "/contact" },
] as const;

export const SITE_PAGES: Record<string, SitePage> = {
  "/": {
    title: "Home",
    seoTitle: "Immigration-Grade Business Plans & Consulting | Stratena",
    metaDescription:
      "Stratena provides immigration-grade business plans, consulting, and SBA loan readiness support for founders, attorneys, investors, and growing businesses.",
    paragraphs: [
      "Stratena helps founders, investors, attorneys, and growing businesses move from concept to credibility. We develop immigration-grade business plans, practical consulting solutions, and SBA loan readiness materials designed to bring strategy, operations, and financial logic together in a clear and professional way.",
      "Our work is built for clients who need more than a generic document. They need planning materials and business guidance that can stand up to legal review, internal decision-making, lender scrutiny, and real-world execution. That is why every engagement is grounded in business logic, market awareness, and operational clarity.",
      "Whether the objective is an immigration-related matter, a business launch, operational improvement, or financing preparation, Stratena helps clients present a stronger business story and make better business decisions. We build materials that are structured, custom, research-based, and aligned with how serious businesses actually grow.",
    ],
  },
  "/about": {
    title: "About",
    seoTitle: "About Stratena | Business Planning, Consulting & SBA Readiness",
    metaDescription:
      "Learn how Stratena combines business planning, market research, consulting, and SBA readiness into practical, credibility-focused business support.",
    paragraphs: [
      "Stratena was built around a simple idea: strong business documents should reflect a strong business strategy. Too many business plans are written like templates, disconnected from how a company actually operates, grows, hires, and generates revenue. We take a different approach.",
      "Our work combines business planning, market research, operational thinking, and financial clarity to create materials that are useful in real decision-making environments. That makes Stratena especially valuable for immigration matters, attorney-supported cases, new ventures, business expansion, and SBA loan preparation.",
      "We do not see business plans as standalone paperwork. We see them as strategic tools that should communicate substance, credibility, and direction. By connecting planning with execution, Stratena helps clients turn ideas into organized, practical, and defensible business narratives that support both presentation and performance.",
    ],
  },
  "/business-plan": {
    title: "Business Plans",
    seoTitle: "Custom Business Plans for Immigration & SBA | Stratena",
    metaDescription:
      "Explore custom business plans built with market research, operational logic, and financial clarity for immigration matters, business growth, and SBA preparation.",
    paragraphs: [
      "Stratena’s business plans are built for clients who need more than a polished presentation. We create custom business plans that combine market research, operational structure, revenue logic, hiring plans, and financial projections into a clear and defensible business story.",
      "This makes our work especially relevant for immigration-related matters, founder-led ventures, business expansion, and funding preparation. Every plan is tailored to the company’s actual business model, market environment, growth stage, and strategic goals. We do not rely on recycled templates or one-size-fits-all narratives.",
      "Instead, we build business plans that help businesses present themselves with greater credibility to attorneys, reviewers, lenders, and stakeholders. The result is a document that looks professional, reads clearly, and reflects the commercial reality behind the business. At Stratena, the goal is not just to deliver a business plan, but to develop a stronger and more convincing business case.",
    ],
  },
  "/business-plan/e-1-business-plan": {
    title: "E-1 Business Plan",
    seoTitle: "E-1 Business Plan Services | Stratena",
    metaDescription:
      "Custom E-1 business plans built with trade model analysis, market research, operational detail, and financial projections.",
    paragraphs: [
      "An E-1 business plan should clearly explain how the company engages in substantial trade between the United States and the treaty country. It should present the trade model, commercial activity, operational structure, and financial direction in a way that feels organized, credible, and commercially realistic.",
      "Stratena develops E-1 business plans that connect trade flow, product or service delivery, target customers, market opportunity, and financial projections into a cohesive business narrative. We focus on showing that the business is active, practical, and positioned for continued growth rather than being only theoretical on paper.",
      "Our E-1 business plans are tailored to the specific business, industry, and trade relationship involved. By combining business logic with strong presentation, we help clients create a plan that supports the broader case while also serving as a useful strategic document for the business itself.",
    ],
  },
  "/business-plan/e-2-business-plan": {
    title: "E-2 Business Plan",
    seoTitle: "E-2 Business Plan Services | Stratena",
    metaDescription:
      "Tailored E-2 business plans designed to show investment credibility, business viability, hiring plans, and growth potential.",
    paragraphs: [
      "An E-2 business plan should do more than describe an investment. It should show that the business is real, active, commercially viable, and positioned for meaningful growth. A strong E-2 plan connects the investment to a clear business model, hiring logic, revenue strategy, and realistic operating structure.",
      "Stratena creates E-2 business plans that bring those elements together in a professional and well-organized format. We develop plans that explain what the business does, how it will generate revenue, how it will serve its market, and how it is expected to grow over time. Financial projections are supported by the broader operating story rather than standing alone.",
      "Our approach is designed to help clients present a venture that looks thoughtful, practical, and execution-ready. Each E-2 business plan is custom-built around the client’s business concept, industry context, and long-term vision.",
    ],
  },
  "/business-plan/eb-1c-business-plan": {
    title: "EB-1C Business Plan",
    seoTitle: "EB-1C Business Plan Services | Stratena",
    metaDescription:
      "EB-1C business plans that support multinational expansion, management structure, staffing plans, and U.S. business growth.",
    paragraphs: [
      "An EB-1C business plan should support the larger story of multinational growth, executive or managerial leadership, and the commercial purpose of the U.S. operation. It needs to explain how the U.S. entity fits into the broader enterprise and why its growth matters from a business standpoint.",
      "Stratena develops EB-1C business plans that organize company structure, expansion strategy, market opportunity, staffing plans, and management responsibilities into a clear and credible business narrative. We focus on showing that the U.S. operation has substance, direction, and a practical role within the larger organization.",
      "Our goal is to strengthen the business side of a complex petition by creating a plan that is detailed enough to be useful, but clear enough to be persuasive. The final result is a structured document that supports both business logic and case presentation.",
    ],
  },
  "/business-plan/eb-2-niw-business-plan": {
    title: "EB-2 NIW Business Plan",
    seoTitle: "EB-2 NIW Business Plan Services | Stratena",
    metaDescription:
      "EB-2 NIW business plans that turn a proposed endeavor into a clear, credible, and execution-focused business narrative.",
    paragraphs: [
      "An EB-2 NIW business plan should define the proposed endeavor, explain its commercial and practical value, and show a credible path to execution. It should help turn a professional vision into a structured business narrative that demonstrates planning, direction, and real-world viability.",
      "Stratena prepares EB-2 NIW business plans that combine business strategy, market analysis, operational milestones, and financial direction into a thoughtful and organized document. We focus on helping clients articulate what they plan to build, how they plan to build it, and why the business model is commercially sound.",
      "Our EB-2 NIW business plans are especially useful for professionals, founders, and independent operators who need their proposed venture to feel clear, serious, and actionable. The result is a business plan that supports both credibility and clarity from the very first page.",
    ],
  },
  "/business-plan/eb-5-business-plan": {
    title: "EB-5 Business Plan",
    seoTitle: "EB-5 Business Plan Services | Stratena",
    metaDescription:
      "EB-5 business plans developed with job creation strategy, operational detail, investment logic, and financial projections.",
    paragraphs: [
      "An EB-5 business plan requires a detailed and well-structured presentation of the enterprise, the investment framework, the operating model, and the job creation strategy. It should explain not only what the business intends to do, but also how capital will be used, how operations will develop, and how growth will be measured.",
      "Stratena develops EB-5 business plans that bring together market opportunity, business structure, use of funds, hiring plans, operational strategy, and financial projections in one cohesive document. We focus on consistency, realism, and clarity so that the plan reads like a serious business case rather than a generic planning exercise.",
      "Our EB-5 work is designed to help translate complex projects into organized and defensible narratives. The final business plan supports a stronger overall presentation by making the business itself easier to understand and evaluate.",
    ],
  },
  "/business-plan/h1-b-business-plan": {
    title: "H-1B Business Plan",
    seoTitle: "H-1B Business Plan Services | Stratena",
    metaDescription:
      "H-1B business plans for startups and growing companies seeking a clear, credible presentation of commercial activity and growth.",
    paragraphs: [
      "In startup, founder-led, or growth-stage business contexts, an H-1B business plan can help explain the company’s commercial activity, operating model, and long-term direction. A strong plan shows that the business is organized, active, and capable of supporting its strategic objectives with real business substance.",
      "Stratena prepares H-1B business plans that describe the company’s services, market position, staffing approach, revenue model, and projected growth in a clear and professional way. We focus on building a document that helps the business look credible, structured, and commercially grounded.",
      "Our approach is especially useful when a business needs to present itself more clearly as part of a broader legal or strategic matter. The final result is a practical business plan that improves both business communication and overall case presentation.",
    ],
  },
  "/business-plan/l-1-business-plan": {
    title: "L-1 Business Plan",
    seoTitle: "L-1 Business Plan Services | Stratena",
    metaDescription:
      "L-1 business plans that explain U.S. expansion, staffing, operations, and business growth in a clear and credible format.",
    paragraphs: [
      "An L-1 business plan should explain how the U.S. entity will operate, grow, and support the transfer of a qualifying employee. It needs to show that the business is more than an idea by presenting a realistic operating model, staffing roadmap, and commercial growth strategy.",
      "Stratena creates L-1 business plans that connect company background, U.S. expansion plans, organizational structure, market opportunity, operational detail, and financial projections into one structured narrative. We focus on helping clients present a U.S. operation that feels purposeful, credible, and execution-ready.",
      "Each L-1 business plan is tailored to the company’s industry, growth plans, and cross-border business structure. The result is a document that helps clarify the logic of the expansion while presenting the business in a more organized and persuasive way.",
    ],
  },
  "/business-plan/sba-loan-business-plans": {
    title: "SBA Loan Business Plans",
    seoTitle: "SBA Loan Business Plans | Stratena",
    metaDescription:
      "SBA loan business plans with lender-facing structure, market research, financial projections, and business strategy.",
    paragraphs: [
      "An SBA loan business plan should help a lender understand how the business works, how the requested funds will be used, and how repayment is expected to be supported over time. It is not just a descriptive document. It is part of the borrower’s overall credibility and readiness story.",
      "Stratena prepares SBA loan business plans with lender-facing structure, market research, operational detail, and disciplined financial projections. We develop plans for new businesses, acquisitions, expansions, refinancing scenarios, and working capital needs, always focusing on clarity and business logic.",
      "Our SBA loan business plans are designed to help borrowers enter funding conversations with stronger materials and a more professional presentation. By combining business narrative with practical financial planning, we help businesses communicate readiness, purpose, and commercial viability more effectively.",
    ],
  },
  "/consulting": {
    title: "Consulting",
    seoTitle: "Business Strategy & Operations Consulting | Stratena",
    metaDescription:
      "Business consulting services focused on strategy, operations, financial planning, readiness assessment, and growth execution.",
    paragraphs: [
      "Stratena’s consulting services are built for businesses that need more than a document. We help clients strengthen the strategy, operations, and financial logic behind the business so that it is not only well presented, but also better prepared to perform and grow.",
      "Our consulting work is especially valuable for founders preparing for immigration matters, market entry, business launches, operational improvement, internal realignment, or funding review. We focus on practical solutions that improve clarity, structure, and execution rather than theory alone.",
      "Because our work is closely connected to planning and readiness, consulting at Stratena is designed to strengthen the business behind the presentation. That makes our support useful both before and after a business plan is written. The objective is simple: help clients build businesses that are easier to explain, easier to manage, and better prepared for growth.",
    ],
  },
  "/consulting/strategy-consulting": {
    title: "Strategy Consulting",
    seoTitle: "Strategy Consulting Services | Stratena",
    metaDescription:
      "Strategy consulting to clarify business direction, evaluate opportunities, and support growth with practical, structured thinking.",
    paragraphs: [
      "Strategy consulting at Stratena is designed to help businesses move with more direction and less guesswork. We work with clients to clarify positioning, evaluate opportunities, define priorities, and align business decisions with realistic growth objectives.",
      "Whether a company is entering a new market, launching a new venture, adjusting its model, or preparing for a major business milestone, strategy work helps bring structure to the next phase. We focus on practical business questions such as where the opportunity is, what the business should prioritize, how growth should be staged, and what the market is likely to support.",
      "Our strategy consulting process is built around clarity, relevance, and execution. The goal is not to produce abstract recommendations, but to help businesses make sharper decisions, communicate a stronger direction, and move forward with greater confidence.",
    ],
  },
  "/consulting/operations-consulting": {
    title: "Operations Consulting",
    seoTitle: "Operations Consulting Services | Stratena",
    metaDescription:
      "Operations consulting that improves business structure, internal processes, execution readiness, and scalable growth.",
    paragraphs: [
      "Operations consulting is where business planning becomes business execution. Stratena helps clients translate goals into practical operating structures, internal processes, team responsibilities, and workflow systems that support growth in a more organized way.",
      "We review how the business runs today, identify gaps or inefficiencies, and develop improvements that make execution clearer and more scalable. This may include process design, role alignment, operating structure, service delivery logic, or business coordination across functions.",
      "Our operations consulting work is especially valuable for businesses that need to demonstrate not only vision, but also operational credibility. A business can have a compelling idea, but if the operating model feels weak or unclear, confidence drops. We help businesses build stronger foundations so the company runs better and presents itself more convincingly.",
    ],
  },
  "/consulting/financial-consulting": {
    title: "Financial Consulting",
    seoTitle: "Financial Planning Support for Businesses | Stratena",
    metaDescription:
      "Financial planning support that strengthens projections, revenue logic, financial assumptions, and overall business readiness.",
    paragraphs: [
      "Financial planning support at Stratena brings discipline and clarity to the numbers behind the business. We help clients organize assumptions, develop realistic projections, evaluate revenue models, and strengthen the financial logic that supports a business plan, funding request, or strategic decision.",
      "Our focus is not abstract finance. It is business-ready financial thinking that helps clients explain how the company earns revenue, manages costs, supports growth, and plans for future performance. Stronger financial planning improves both internal decision-making and external presentation.",
      "This service is especially useful for founders preparing business plans, businesses seeking funding, and companies that need their numbers to align more clearly with their operating story. The result is a financial framework that feels more coherent, more defensible, and more useful in real business conversations.",
    ],
  },
  "/consulting/company-check-up": {
    title: "Company Check Up",
    seoTitle: "Business Readiness Assessment | Stratena",
    metaDescription:
      "A structured business readiness assessment covering operations, model clarity, financial direction, and growth capacity.",
    paragraphs: [
      "Business Readiness Assessment is Stratena’s structured review of how prepared a business is for growth, presentation, funding, or strategic next steps. We assess core areas such as business model clarity, operational structure, staffing logic, market position, financial direction, and execution readiness.",
      "This service is ideal for founders and operators who want an outside perspective before launching, expanding, applying, or entering lender or attorney conversations. Sometimes the business idea is strong, but the structure around it is still underdeveloped. A readiness review helps identify what is clear, what is missing, and what should be strengthened first.",
      "The outcome is not just feedback. It is a more focused roadmap for improvement. We help clients understand where the business stands today and what needs to happen to make it more credible, organized, and growth-ready.",
    ],
  },
  "/consulting/partnership-protocols": {
    title: "Partnership Protocols",
    seoTitle: "Partnership Structuring Support | Stratena",
    metaDescription:
      "Partnership structuring support for founder alignment, decision-making, accountability, and long-term operating clarity.",
    paragraphs: [
      "Strong partnerships need more than alignment in principle. They need clarity around roles, decision-making, ownership expectations, communication, and accountability. Without structure, even promising partnerships can create confusion, friction, and long-term inefficiency.",
      "Stratena helps businesses develop partnership structures that support healthier collaboration and clearer operating dynamics. This may include defining responsibilities, clarifying authority, improving decision frameworks, and organizing expectations around how partners work together in practice.",
      "This service is especially useful for founder partnerships, family businesses, investor-backed ventures, and companies that are growing into more complex operating relationships. Our goal is to help businesses build partnership foundations that reduce ambiguity, improve coordination, and support stronger long-term execution.",
    ],
  },
  "/consulting/sba-loan-readiness-packages": {
    title: "SBA Loan Readiness Packages",
    seoTitle: "SBA Loan Readiness Packages | Stratena",
    metaDescription:
      "SBA loan readiness packages that help businesses prepare stronger planning, financial, and presentation materials before applying.",
    paragraphs: [
      "SBA loan readiness packages are designed for businesses that want to approach lenders with stronger preparation and greater confidence. A business may need more than a loan business plan alone. It may also need clearer financial materials, stronger business positioning, and a more lender-ready overall presentation.",
      "Stratena helps organize the strategic, operational, and financial components that support a serious loan application. This can include business narrative development, market context, financial planning, use-of-funds clarity, presentation logic, and broader readiness support before underwriting questions begin.",
      "Our objective is to help borrowers look prepared, credible, and financing-ready from the start. By bringing planning, structure, and business logic together, we help clients enter the lending process with materials that feel more complete, more organized, and more professionally developed.",
    ],
  },
  "/attorney-hub": {
    title: "Attorney Hub",
    seoTitle: "Attorney Hub | Business Support for Law Firms | Stratena",
    metaDescription:
      "Attorney Hub provides law firms with business plans, market research, valuation support, and RFE response materials.",
    paragraphs: [
      "Attorney Hub is Stratena’s dedicated support space for law firms and attorneys who need reliable business-side materials for client matters. We work alongside counsel to prepare business plans, market research, valuation-related support, and RFE response materials that are organized, strategic, and easy to integrate into a broader case strategy.",
      "Our role is to strengthen the commercial narrative behind the matter while helping attorneys save time and maintain quality. We understand that legal teams often need business documentation that is not only polished, but also logically structured and responsive to the facts of the case.",
      "Attorney Hub is built around responsiveness, collaboration, and practical support. Whether the matter involves a new filing, a revised business plan, research support, or a more developed case narrative, Stratena helps attorneys present stronger business-side materials with greater confidence.",
    ],
  },
  "/attorney-hub/business-valuation": {
    title: "Business Valuation",
    seoTitle: "Business Valuation Support | Stratena",
    metaDescription:
      "Business valuation support that helps present company value, business logic, and commercial context with greater clarity.",
    paragraphs: [
      "Business valuation support can help attorneys and clients present a more grounded view of enterprise value, commercial positioning, and the business logic behind a company. In the right context, valuation-related work adds structure and perspective to how a business is understood.",
      "Stratena approaches valuation support with a practical, documentation-driven mindset. We connect the business model, market environment, operating profile, growth direction, and financial picture to help frame value in a clearer and more organized way. Our focus is not on inflated narratives, but on logical presentation and credible business context.",
      "Where a matter benefits from a stronger value story, we help organize supporting materials that make the business easier to understand and discuss. The result is clearer positioning and stronger business-side support for the broader legal or strategic objective.",
    ],
  },
  "/attorney-hub/market-research": {
    title: "Market Research",
    seoTitle: "Market Research Services | Stratena",
    metaDescription:
      "Targeted market research for business plans, legal matters, SBA preparation, and strategic business decisions.",
    paragraphs: [
      "Market research at Stratena is designed to strengthen business plans, strategic decisions, legal matters, and funding preparation with targeted commercial insight. Strong research helps explain market demand, customer behavior, industry conditions, competition, location dynamics, and growth opportunity in a more credible way.",
      "Rather than relying on generic summaries, we focus on research that supports a real business story. The objective is to make the market context more useful, more relevant, and more directly connected to the business model being presented. This creates stronger planning materials and more convincing business narratives.",
      "Our market research services support immigration-related business plans, attorney-led matters, SBA loan preparation, and broader consulting work. When the business environment needs to be explained clearly, strong research becomes one of the most valuable tools in the file.",
    ],
  },
  "/attorney-hub/request-for-evidence-rfe-response": {
    title: "Request for Evidence (RFE) Response",
    seoTitle: "RFE Response Support | Stratena",
    metaDescription:
      "RFE response support with revised business plans, market research, financial narrative improvements, and stronger commercial context.",
    paragraphs: [
      "Request for Evidence response support is designed for matters that need stronger business documentation, clearer commercial explanations, or more developed context around the company and its plans. When an RFE highlights gaps, the business-side response needs to be organized, precise, and strategically aligned.",
      "Stratena works with attorneys and clients to reinforce the business narrative through revised business plans, added market research, refined financial framing, and stronger operational explanation. We focus on developing materials that directly improve clarity and strengthen the overall logic of the response.",
      "Our role is to help turn weak or incomplete business-side presentation into something more structured and more persuasive. When additional explanation is required, quality matters. A better-organized business narrative can make the broader response package stronger, more coherent, and easier to understand.",
    ],
  },
  "/stratena-scope": {
    title: "Stratena Scope",
    seoTitle: "Stratena Scope | Insights on Business Plans, Operations & Funding",
    metaDescription:
      "Read Stratena Scope for insights on business planning, immigration strategy, operations, market research, and SBA readiness.",
    paragraphs: [
      "Stratena Scope is our insight section covering business planning, immigration-related strategy, market trends, operational readiness, financial planning, and SBA loan preparation. It is a newsletter-style space where founders, attorneys, and business operators can explore practical perspectives on how businesses are built, positioned, and presented.",
      "Some articles will focus on planning strategy. Some will explore market and operational questions. Others will look at lender readiness, case support issues, or broader business decision-making. The purpose of Stratena Scope is not simply to publish content, but to share thinking that is useful, relevant, and grounded in real business situations.",
      "Stratena Scope reflects how we work: commercially aware, detail-oriented, and focused on helping businesses move with greater clarity. It is where strategy, planning, and practical insight meet.",
    ],
  },
  "/contact": {
    title: "Contact",
    seoTitle: "Contact Stratena | Start Your Business Planning Conversation",
    metaDescription:
      "Contact Stratena to discuss immigration-grade business plans, consulting, SBA loan readiness, market research, or attorney support.",
    paragraphs: [
      "Contact Stratena to discuss business plans, consulting services, SBA loan readiness, market research, or attorney support needs. Whether you are preparing a new matter, strengthening your business foundation, planning a launch, or getting ready for lender review, our team is here to help you move with more clarity and structure.",
      "Share a few details about your business, your objective, and your timeline, and we will help guide the next step with a focused and professional approach. We work with founders, investors, attorneys, and growing businesses that need planning materials and business support built around credibility, organization, and practical execution.",
      "Every strong engagement starts with a clearer conversation. Reach out to Stratena to begin building the right foundation for your next move.",
    ],
  },
};

export const PAGE_PATHS = Object.keys(SITE_PAGES).filter((path) => path !== "/");
