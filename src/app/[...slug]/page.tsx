import Link from "next/link";
import { Newsreader } from "next/font/google";
import { notFound } from "next/navigation";
import { pageLookup } from "@/lib/navigation";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { BusinessPlanTemplate } from "@/components/templates/BusinessPlanTemplate";
import { ConsultingTemplate } from "@/components/templates/ConsultingTemplate";
import { SbaReadinessTemplate } from "@/components/templates/SbaReadinessTemplate";
import { StratenaWiseTemplate } from "@/components/templates/StratenaWiseTemplate";
import { AttorneyHubTemplate } from "@/components/templates/AttorneyHubTemplate";
import { limitHeadingWords } from "@/lib/headings";

export const dynamicParams = false;

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const pageContent: Record<string, string[]> = {
  "/about": [
    "Stratena is a boutique strategic consulting firm focused on high-value business planning and advisory work for situations where clarity, credibility, and professional structure are essential. The firm is built to support clients in complex commercial, legal, and financial contexts where a business document must do more than describe a company. It must present a well-reasoned business case, communicate commercial substance, and reflect a level of quality suitable for serious review.",
    "At its core, Stratena provides business plans and strategic advisory solutions designed for high-stakes use cases, including immigration matters, SBA lending, business acquisitions, and broader corporate planning needs. Its positioning reflects a firm that understands the importance of combining sound business logic with polished presentation. Rather than relying on generic templates or surface-level summaries, Stratena appears to emphasize tailored documentation that aligns commercial realities with the expectations of attorneys, lenders, and decision-makers.",
    "The firm’s approach suggests a disciplined and methodical process grounded in analysis, structure, and strategic narrative development. From evaluating business models and market positioning to organizing financial direction and operational logic, Stratena is positioned as a partner that helps transform business information into clear, credible, and decision-ready materials. This creates value not only through writing, but through the ability to shape a stronger and more coherent business story.",
    "Overall, Stratena presents itself as a refined consulting platform for entrepreneurs, businesses, and professionals who require serious documentation for serious decisions. Its brand reflects precision, discretion, and strategic depth, making it well suited for clients who need business plans and advisory materials that are both commercially grounded and professionally presented. In that sense, Stratena stands as a modern advisory firm built around substance, structure, and credibility.",
  ],
  "/business-plan": [
    "Stratena's business plans are built for clients who need more than a polished presentation. We create custom business plans that combine market research, operational structure, revenue logic, hiring plans, and financial projections into a clear and defensible business story.",
    "This makes our work especially relevant for immigration-related matters, founder-led ventures, business expansion, and funding preparation. Every plan is tailored to the company's actual business model, market environment, growth stage, and strategic goals. We do not rely on recycled templates or one-size-fits-all narratives.",
    "Instead, we build business plans that help businesses present themselves with greater credibility to attorneys, reviewers, lenders, and stakeholders. The result is a document that looks professional, reads clearly, and reflects the commercial reality behind the business. At Stratena, the goal is not just to deliver a business plan, but to develop a stronger and more convincing business case.",
  ],

  "/business-plan/e-1-business-plan": [
    "An E-1 business plan should establish the trade case at the center of the filing: what is being traded, how the U.S. and treaty-country activity connects, and why the volume and continuity of transactions are commercially meaningful. The introduction should frame the company as an operating cross-border enterprise, not a concept, by tying its trade pattern to a workable business model, market demand, and day-to-day execution.",
    "A well-prepared E-1 business plan should also explain the nature of the goods or services being traded, the direction of the trade flow, and the reason the business is positioned to succeed in its market. This includes showing how the company generates revenue, how it manages cross-border commercial activity, and how the business supports long-term trade continuity. The plan should connect day-to-day operations with the broader trade strategy so that the reader understands that the enterprise is not speculative, but built around a functioning and sustainable international business model.",
    "From a practical standpoint, an E-1 visa business plan should include a clear operational narrative. It should describe how products or services move between parties, how orders are handled, how logistics or fulfillment are managed, and how the company maintains commercial relationships across both countries. It should also explain the organizational structure, management oversight, and commercial purpose of the enterprise in a way that makes the business appear organized, active, and prepared for growth. This level of detail helps transform a basic company description into a business case with real commercial substance.",
    "A professionally developed E-1 business plan also supports credibility by showing thoughtful financial direction and realistic growth expectations. Revenue forecasts, expense assumptions, and trade expansion plans should align with the company’s actual business model and market position. When written correctly, an immigration-grade E-1 business plan becomes more than a supporting document. It becomes a strategic presentation of the company’s trade activity, commercial purpose, and future direction, helping present the business as a legitimate and scalable treaty trader operation.",
  ],
  "/business-plan/e-2-business-plan": [
    "An E-2 business plan should connect invested capital to a concrete operating plan, showing how funds translate into launch activity, customer acquisition, and sustainable revenue. Rather than treating investment as an endpoint, the opening section should position the business as a functioning U.S. enterprise with defined services or products, operational discipline, and a practical path from startup stage to stable growth.",
    "A high-quality E-2 business plan should clearly describe the company’s products or services, target market, competitive positioning, and go-to-market strategy. It should show why the business is needed, how it will attract customers, and what makes it capable of competing in its industry. This is especially important for service businesses, retail operations, distribution companies, online businesses, franchise models, and startup ventures, where the reader needs to understand how the business will move from investment stage to active operations. The plan should connect the capital investment to tangible business activity and measurable business development.",
    "Operational clarity is another essential part of an effective E-2 business plan. The document should explain how the company will be managed, how its team will grow, what roles will be needed, and how the owner’s involvement fits into the business. It should demonstrate that the company has an organized operating structure, a realistic hiring roadmap, and a clear plan for carrying out its services or commercial functions. A thoughtful staffing plan, combined with practical execution steps, helps reinforce that the business is not marginal in nature and is intended to operate as a serious commercial enterprise.",
    "Financially, an immigration-grade E-2 business plan should reflect credible assumptions and commercially realistic projections. Revenue expectations, startup costs, operating expenses, and expansion plans should all work together to support the overall story of a viable and growth-oriented company. When properly written, an E-2 visa business plan becomes a powerful business presentation that connects investment, operations, hiring, and long-term strategy into one cohesive narrative. It helps present the business as structured, purposeful, and ready to grow in the U.S. market.",
  ],
  "/business-plan/eb-1c-business-plan": [
    "An EB-1C business plan should clarify the corporate relationship between the foreign and U.S. entities and explain the business logic of expanding managerial functions into the United States. A strong introduction frames the U.S. operation as a substantive extension of an existing multinational enterprise, with defined organizational purpose, growth responsibilities, and commercial relevance within the broader group.",

    "Stratena develops EB-1C business plans that organize company structure, expansion strategy, market opportunity, staffing plans, and management responsibilities into a clear and credible business narrative. We focus on showing that the U.S. operation has substance, direction, and a practical role within the larger organization.",

    "An immigration-grade EB-1C business plan should support a broader corporate narrative centered on multinational growth, executive or managerial leadership, and the strategic importance of the U.S. entity. It should explain how the U.S. company fits within the larger international enterprise and why its existence serves a legitimate commercial function. A strong EB-1C business plan helps present the U.S. operation not as an isolated startup concept, but as an intentional extension of an established business structure with a defined purpose, management framework, and long-term growth strategy.",

    "A well-developed EB-1C business plan should clearly describe the relationship between the foreign company and the U.S. entity. This includes the ownership structure, operational connection, business purpose, and commercial coordination between the two organizations. The plan should explain how the U.S. business contributes to the overall enterprise, whether through expansion, market development, client servicing, distribution, administration, or strategic growth. By showing how the companies work together as part of a larger business platform, the plan helps reinforce the seriousness and legitimacy of the multinational operation.",
    "The document should also place strong emphasis on management and organizational structure. Since EB-1C matters often involve executive or managerial roles, the business plan should carefully explain how the U.S. entity will be staffed, how functions will be delegated, and how leadership responsibilities will be carried out. It should present a practical operating model that shows the company is positioned for real business activity and meaningful development. This includes explaining team growth, departmental responsibilities, service or product delivery, and the business logic behind the expansion of the U.S. operation.",
    "A strong EB-1C visa business plan should also include realistic financial direction and measurable commercial objectives. Revenue strategy, market positioning, operational milestones, and staffing growth should work together to show that the business has a defined path forward. When prepared correctly, an immigration-grade EB-1C business plan becomes more than a standard company summary. It becomes a structured business narrative that supports the commercial purpose of the U.S. entity, the logic of multinational expansion, and the strategic leadership role within the broader enterprise.",
  ],
  "/business-plan/eb-2-niw-business-plan": [
    "An EB-2 NIW business plan should introduce the proposed endeavor as a structured venture with identifiable services, market need, and implementation milestones. The opening paragraph works best when it translates a professional concept into an executable business framework, showing how the work will be carried out, monetized, and sustained in practical commercial terms.",
    "Stratena prepares EB-2 NIW business plans that combine business strategy, market analysis, operational milestones, and financial direction into a thoughtful and organized document. We focus on helping clients articulate what they plan to build, how they plan to build it, and why the business model is commercially sound.",
    "An immigration-grade EB-2 NIW business plan should turn a professional vision into a structured and commercially credible business narrative. It should clearly define the proposed endeavor, explain what problem it addresses, and show how the work creates practical, economic, scientific, professional, or industry-related value. A strong EB-2 NIW business plan helps translate expertise, innovation, and long-term goals into a format that feels organized, actionable, and grounded in real-world execution. It should show that the proposed endeavor is more than an abstract idea and that it has a meaningful framework for development.",
    "A well-prepared EB-2 NIW business plan should describe the nature of the endeavor in detail, including the services, solutions, products, initiatives, or systems the applicant intends to develop. It should explain who benefits from the work, what sector or market it impacts, and why the endeavor has practical relevance. Whether the case involves healthcare, engineering, technology, education, consulting, public-interest innovation, research commercialization, or another specialized field, the plan should connect professional background to a clear strategic direction. The goal is to present the endeavor as thoughtful, needed, and realistically positioned for advancement.",
    "Operational planning is equally important in an EB-2 NIW business plan. The document should explain how the endeavor will be carried out, what business or professional model supports it, what resources are needed, and how the work will progress over time. It should show implementation logic, development phases, and a clear path from concept to measurable activity. Even when the proposed endeavor is highly specialized or mission-driven, the plan should still feel commercially and operationally coherent. This helps create a stronger impression of seriousness, structure, and readiness.",
    "A strong EB-2 NIW business plan should also include financial and strategic direction that supports the broader narrative. Revenue opportunities, funding logic, operational expenses, partnerships, scalability, and market relevance should all align with the proposed endeavor. When drafted properly, an immigration-grade EB-2 NIW business plan becomes a valuable tool for presenting both professional purpose and business discipline. It helps show that the applicant has not only a strong idea, but also a credible plan to execute, grow, and create meaningful impact through a structured endeavor.",
  ],
  "/business-plan/eb-5-business-plan": [
    "An EB-5 business plan should open with a clear explanation of the project structure, deployment of capital, and the operating assumptions that support planned job creation. The introductory narrative needs to align investment mechanics with real business execution so the reader can evaluate how the enterprise is expected to launch, scale, and produce measurable economic activity over time.",

    "Stratena develops EB-5 business plans that bring together market opportunity, business structure, use of funds, hiring plans, operational strategy, and financial projections in one cohesive document. We focus on consistency, realism, and clarity so that the plan reads like a serious business case rather than a generic planning exercise.",

    "An immigration-grade EB-5 business plan requires a comprehensive and well-organized presentation of the enterprise, the investment structure, the operating model, and the job creation strategy. It should clearly explain what the business will do, how the investment capital will be used, how operations will be launched and expanded, and how the company expects to create measurable economic activity over time. A strong EB-5 business plan is not simply a narrative description. It is a detailed business document that should present the enterprise as credible, commercially viable, and supported by a realistic implementation roadmap.",
    "A well-developed EB-5 business plan should provide a clear explanation of the business concept, market opportunity, target customer base, operational strategy, and competitive landscape. It should show why the enterprise has a place in the market and how it intends to generate revenue in a sustainable way. Whether the business involves hospitality, retail, logistics, healthcare, manufacturing, franchising, construction, food service, technology, or another industry, the plan should align the investment with a logical commercial model. The reader should come away with a clear understanding of how the business functions and how growth will occur.",

    "Operational detail is especially important in an EB-5 visa business plan. The plan should explain how the company will open, who will manage key functions, what equipment or infrastructure will be needed, how staffing will be phased, and how the business will move from startup or expansion stage into stable operations. A strong plan should also present a detailed hiring roadmap that matches the size, nature, and development stage of the business. This level of specificity helps support the larger business case by showing that the enterprise is planned with seriousness and practical foresight.",

    "Financial presentation and job creation logic are central to an effective EB-5 business plan. Capital allocation, projected revenues, operating expenses, staffing growth, and timing assumptions should all align with the company’s operational narrative. The business plan should make clear how the investment supports development and how the business expects to generate the jobs associated with its growth. When properly prepared, an immigration-grade EB-5 business plan becomes a strategic document that presents the enterprise as organized, investment-ready, and capable of moving forward with structure, discipline, and measurable commercial progress.",
  ],
  "/business-plan/h1-b-business-plan": [
    "For founder-led and growth-stage companies, an H-1B business plan should introduce the business as an active commercial operation with defined services, internal structure, and revenue strategy. The first paragraph should set up how the company functions today and how planned growth, staffing, and operations support a credible long-term business trajectory.",

    "Stratena prepares H-1B business plans that describe the company’s services, market position, staffing approach, revenue model, and projected growth in a clear and professional way. We focus on building a document that helps the business look credible, structured, and commercially grounded.",

    "In startup, founder-led, or growth-stage business contexts, an immigration-grade H-1B business plan can play an important role in explaining the company’s commercial substance, operating model, and long-term strategic direction. It should present the business as organized, active, and commercially grounded, rather than informal or speculative. A strong H-1B business plan helps explain what the company does, how it generates value, how it is structured operationally, and how its business activities support its broader objectives in the market.", 
    "A well-written H-1B business plan should describe the company’s products or services, market focus, customer strategy, and operational workflow in a way that makes the business easy to understand. The document should show that the enterprise has a real commercial purpose, a functioning business model, and a clear reason for growth. For startups and founder-led businesses in particular, this kind of planning helps present the company as disciplined and professionally structured. It moves the narrative beyond general ambition and into practical business reality.",
    "The plan should also explain how the business is organized internally and how responsibilities are managed. This may include team structure, department functions, operational oversight, service delivery, sales processes, and expansion plans. A thoughtful H-1B business plan should show that the company is capable of carrying out its business strategy with consistency and professional management. It should also demonstrate that the business is positioned for continuity and development, rather than existing only as an early concept or loosely defined venture.",
    "From a strategic and financial perspective, an immigration-grade H-1B business plan should include realistic revenue expectations, operating expenses, business milestones, and growth plans. These elements should support the overall message that the company has business substance, commercial direction, and a clear operating purpose. When properly developed, an H-1B business plan becomes more than a supporting business summary. It becomes a professional presentation of the company’s structure, activity, and growth potential, helping communicate the seriousness and legitimacy of the business itself.",
  ],
  "/business-plan/l-1-business-plan": [
    "An L-1 business plan should begin by explaining the U.S. expansion in operational terms: what the new entity will do, how it will be staffed, and how it integrates with the foreign company’s existing business activity. This framing helps establish that the transfer supports a real commercial buildout with defined management needs, not a speculative market entry.",

    "Stratena creates L-1 business plans that connect company background, U.S. expansion plans, organizational structure, market opportunity, operational detail, and financial projections into one structured narrative. We focus on helping clients present a U.S. operation that feels purposeful, credible, and execution-ready.",

    "An immigration-grade L-1 business plan should clearly explain how the U.S. entity will operate, grow, and support the transfer of a qualifying employee within a legitimate business framework. It should present the company as a real commercial operation with a defined structure, practical growth plan, and meaningful role in the U.S. market. A strong L-1 business plan helps show that the business is more than an idea or a placeholder. It is a functioning or soon-to-be functioning enterprise with clear operational direction and strategic intent.", 
    "A high-quality L-1 business plan should describe the nature of the U.S. company, its products or services, target market, competitive position, and business objectives. It should also explain how the U.S. entity relates to the foreign company and why the expansion or transfer makes commercial sense. Whether the U.S. office is being established to expand sales, manage operations, serve clients, coordinate distribution, or develop a new market presence, the plan should present that purpose in a clear and commercially logical way. The business narrative should feel organized, realistic, and connected to actual growth goals.",
    "The operational section of an L-1 visa business plan should be especially detailed. It should explain how the company will function on a day-to-day basis, how staffing will grow over time, and how management responsibilities will be structured. This includes presenting a practical hiring roadmap, internal reporting logic, service or product delivery methods, and the overall operating model of the U.S. office. A strong plan should demonstrate that the business will not remain minimal or inactive, but is positioned to evolve into a stable and productive operation.",
    "Financially, an immigration-grade L-1 business plan should support the business narrative with realistic projections and measurable milestones. Revenue strategy, operating costs, staffing growth, and market development assumptions should all align with the broader commercial purpose of the entity. When properly written, an L-1 business plan becomes a strategic document that helps explain the business rationale behind the U.S. operation, the structure needed for growth, and the seriousness of the company’s expansion plans in the United States.",
  ],
  "/business-plan/sba-loan-business-plans": [
    "An SBA loan business plan should open with a lender-focused explanation of the business model, financing purpose, and repayment logic tied to expected operations. The introduction should make clear why the requested capital is necessary, how it will be applied in the business, and how projected performance supports a responsible borrowing case.",

    "Stratena prepares SBA loan business plans with lender-facing structure, market research, operational detail, and disciplined financial projections. We develop plans for new businesses, acquisitions, expansions, refinancing scenarios, and working capital needs, always focusing on clarity and business logic.",

    "An SBA loan business plan should help a lender understand not only what the business does, but also how it operates, how the requested funds will be used, and how repayment is expected to be supported over time. It should present the company as organized, commercially sound, and financially disciplined. A strong SBA business plan is a critical part of the borrower’s overall credibility. It helps show that the business owner understands the market, has a practical operating strategy, and is prepared to manage growth with clarity and responsibility.", 
    "A well-prepared SBA loan business plan should clearly describe the company’s products or services, target customers, market opportunity, industry positioning, and competitive strengths. It should explain how the business makes money, what demand it serves, and why it is well-positioned for continued activity or expansion. Whether the loan is being used for startup costs, equipment, working capital, inventory, renovations, acquisitions, or business expansion, the plan should connect the requested funds directly to a logical business purpose. The lender should be able to understand not just the need for financing, but also the business logic behind it.", 
    "Operational detail is another major strength in an effective SBA business plan. The document should explain how the business runs, who manages key functions, how staff and operations are organized, and what systems are in place to support daily performance. It should also show how the company plans to maintain service quality, manage expenses, and achieve its next phase of development. A thoughtful and well-structured operations section helps create confidence that the business is not only viable on paper, but also manageable in practice.", 
    "A strong SBA loan business plan should also include credible financial projections and a realistic repayment narrative. Revenue forecasts, cost assumptions, cash flow expectations, and growth plans should work together to demonstrate financial awareness and operational readiness. When drafted correctly, an SBA loan business plan becomes far more than a descriptive company overview. It becomes a lender-facing business presentation that supports trust, preparedness, and long-term commercial sustainability.",
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
    "Get lender-ready with Stratena's SBA loan readiness for founders, franchise buyers, and existing businesses pursuing SBA 7(a), 504, or microloan financing. We combine SBA loan application help, lender-ready business plans, and SBA loan financial projections so your file is built for underwriting.",

    "Our team delivers SBA funding preparation with practical execution: business plan narrative, use-of-funds clarity, repayment logic, and documentation packaging aligned to U.S. lender expectations. Every engagement is structured to reduce avoidable delays and improve approval readiness.",

    "Whether you are a startup applying for your first loan or a borrower reapplying after a prior denial, Stratena helps you present a stronger, more credible file with clear strategy, complete support materials, and confident lender communication.",
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
  "/attorney-hub/market-research": [
    "Market research at Stratena is designed to strengthen business plans, strategic decisions, legal matters, and funding preparation with targeted commercial insight. Strong research helps explain market demand, customer behavior, industry conditions, competition, location dynamics, and growth opportunity in a more credible way.",

    "Rather than relying on generic summaries, we focus on research that supports a real business story. The objective is to make the market context more useful, more relevant, and more directly connected to the business model being presented. This creates stronger planning materials and more convincing business narratives.",

    "Our market research services support immigration-related business plans, attorney-led matters, SBA loan preparation, and broader consulting work. When the business environment needs to be explained clearly, strong research becomes one of the most valuable tools in the file.",
  ],
  "/attorney-hub/request-for-evidence-rfe-response": [
    "Request for Evidence response support is designed for matters that need stronger business documentation, clearer commercial explanations, or more developed context around the company and its plans. When an RFE highlights gaps, the business-side response needs to be organized, precise, and strategically aligned.",

    "Stratena works with attorneys and clients to reinforce the business narrative through revised business plans, added market research, refined financial framing, and stronger operational explanation. We focus on developing materials that directly improve clarity and strengthen the overall logic of the response.",

    "Our role is to help turn weak or incomplete business-side presentation into something more structured and more persuasive. When additional explanation is required, quality matters. A better-organized business narrative can make the broader response package stronger, more coherent, and easier to understand.",
  ],
  "/stratena-wise": [
    "Stratena Wise is our insight section covering business planning, immigration-related strategy, market trends, operational readiness, financial planning, and SBA loan preparation. It is a newsletter-style space where founders, attorneys, and business operators can explore practical perspectives on how businesses are built, positioned, and presented.",

    "Some articles will focus on planning strategy. Some will explore market and operational questions. Others will look at lender readiness, case support issues, or broader business decision-making. The purpose of Stratena Wise is not simply to publish content, but to share thinking that is useful, relevant, and grounded in real business situations.",

    "Stratena Wise reflects how we work: commercially aware, detail-oriented, and focused on helping businesses move with greater clarity. It is where strategy, planning, and practical insight meet.",
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const currentPath = `/${slug.join("/")}`;

  if (currentPath === "/sba-loan-readiness-packages") {
    return {
      title: "SBA Loan Readiness | Business Plans & Funding Support | Stratena",
      description:
        "Get lender-ready with Stratena's SBA loan readiness. Business plans, projections, documentation support, and expert guidance.",
    };
  }

  if (currentPath === "/attorney-hub/business-valuation") {
    return {
      title:
        "Business Valuation Services | Professional Company Valuation | Stratena",
      description:
        "Get expert business valuation services for transactions, legal matters, planning, and growth. Professional reports for attorneys, owners, and investors.",
    };
  }

  if (currentPath === "/attorney-hub") {
    return {
      title:
        "Attorney Hub | White-Label Business Plans for Immigration Attorneys | Stratena",
      description:
        "Partner with Stratena for premium E-2, L-1, EB-5 and investor visa business plans. White-label support for immigration attorneys and law firms.",
    };
  }

  return {};
}

export function generateStaticParams() {
  return Object.keys(pageLookup)
    .filter((path) => path !== "/" && path !== "/about" && path !== "/contact")
    .map((path) => ({ slug: path.slice(1).split("/") }));
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

  const title = page.parent ? `${page.parent} · ${page.title}` : page.title;
  const conciseTitle = limitHeadingWords(page.title, 6);

  if (currentPath.startsWith("/business-plan")) {
    return (
      <BusinessPlanTemplate
        title={page.title}
        paragraphs={paragraphs}
        isSubpage={currentPath !== "/business-plan"}
      />
    );
  }

  if (currentPath.startsWith("/consulting")) {
    return (
      <ConsultingTemplate
        title={page.title}
        paragraphs={paragraphs}
        currentPath={currentPath}
      />
    );
  }

  if (currentPath.startsWith("/sba-loan-readiness-packages")) {
    return <SbaReadinessTemplate paragraphs={paragraphs} />;
  }

  if (currentPath === "/stratena-wise") {
    return <StratenaWiseTemplate />;
  }

  if (currentPath.startsWith("/attorney-hub")) {
    return <AttorneyHubTemplate title={page.title} paragraphs={paragraphs} />;
  }

  return (
    <div
      className={`${newsreader.variable} min-h-screen bg-[#f6f6f8] text-slate-900`}
    >
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden bg-white px-6 py-20 text-center lg:px-20">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(#564a64_1px,transparent_1px)] [background-size:40px_40px]" />
          </div>
          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {title}
            </p>
            <h1
              className="mt-4 text-4xl font-bold leading-tight text-slate-900"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              {conciseTitle}
            </h1>
            <p
              className="mx-auto mt-6 max-w-3xl text-lg italic text-slate-600 md:text-xl"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              Built for high-stakes decisions, legal precision, and confident
              execution.
            </p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:px-20">
          <div className="space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
            {paragraphs.map((paragraph) => (
              <p
                className="text-lg leading-relaxed text-slate-700"
                key={paragraph}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-2xl bg-[#1E2A38] p-8 text-white shadow-sm">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "var(--font-newsreader)" }}
            >
              Need a custom scope?
            </h2>
            <p className="mt-4 text-sm leading-6 text-slate-200">
              Every engagement is built around your legal context, strategic
              objective, and documentation standards.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E2A38] transition-colors hover:bg-primary hover:text-white"
            >
              Request Consultation
            </Link>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
