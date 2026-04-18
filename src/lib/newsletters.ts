export type NewsletterSection = {
  title: string;
  paragraphs: string[];
};

export type NewsletterArticle = {
  slug: string;
  issue: string;
  title: string;
  summary: string;
  publication: string;
  readTime: string;
  category: string;
  accent: string;
  heroImage: string;
  heroAlt: string;
  sections: NewsletterSection[];
  keyPoints: string[];
  conclusion: string[];
  closingNote: string;
};

export const newsletters: NewsletterArticle[] = [
  {
    slug: "issue-24-energy-shock-spreads-across-the-economy",
    issue: "Issue 24",
    title: "Energy Shock Spreads Across the Economy",
    summary:
      "A sharp drop in gold prices and a rapid surge in oil. This dual shock triggered by the Iran-centered conflict is reshaping market dynamics, lifting inflation risks, and pushing investors to focus on interest rates, energy, and liquidity conditions.",
    publication: "April 9, 2026",
    readTime: "3 min read",
    category: "Macro & Markets",
    accent: "Energy shock",
    heroImage:
      "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Industrial refinery at dusk with warm lights and cooling towers",
    keyPoints: [
      "Oil disruption around the Strait of Hormuz is transmitting pressure beyond commodities and into supply chains.",
      "The U.S. economy entered the shock from a position of relative strength, but input costs and labor momentum are moving in opposite directions.",
      "Traditional war trades are losing effectiveness as markets become more sensitive to liquidity and interest-rate expectations.",
    ],
    sections: [
      {
        title: "The shock is no longer confined to energy markets",
        paragraphs: [
          "The Iran war is increasingly being felt beyond energy markets. Disruptions around the Strait of Hormuz, a critical route for global oil supply, are pushing prices higher and creating uncertainty across supply chains.",
          "The effects are already visible. Rising fuel costs are feeding into transportation, production, and even everyday goods. Companies are facing higher input costs, while shortages in key materials like chemicals and industrial inputs are beginning to emerge.",
          "Globally, this is translating into slower business activity, with some factories shutting down and companies struggling to meet existing contracts. Even if the conflict ends soon, the economic impact is likely to persist because supply disruptions, logistics bottlenecks, and higher energy costs tend to unfold over months rather than weeks.",
        ],
      },
      {
        title: "Growth vs. inflation is turning into a more difficult Fed problem",
        paragraphs: [
          "At first glance, the U.S. economy still looks relatively stable. Activity indicators suggest growth around 2.5%, and the latest jobs report showed stronger-than-expected hiring. This means the economy entered the current shock from a position of relative strength.",
          "However, the details tell a more cautious story. Employment components in business surveys are weakening, and input prices are rising sharply. That combination, slowing job momentum alongside rising costs, is exactly what makes the Federal Reserve's job harder.",
          "Economists and policymakers are increasingly pointing to the risk of a stagflation-like environment, where inflation rises while growth slows. In that setting, the Fed has limited tools. It cannot directly solve a supply shock such as oil, but it may still need to keep policy tight in order to control inflation expectations.",
        ],
      },
      {
        title: "Markets are adjusting, and not all war trades are working",
        paragraphs: [
          "One of the clearest signals from recent weeks is that traditional war trades are no longer behaving as expected. Defense stocks, for example, declined even as the conflict continued. That suggests much of the conflict premium had already been priced in earlier, and investors are now unwinding positions rather than adding new ones.",
          "At the same time, other parts of the market are reacting more directly to macro pressure. Rising oil prices are pushing up inflation expectations and bond yields, while higher borrowing costs are beginning to weigh on sectors like housing and consumer spending.",
          "Even areas that are typically seen as defensive are behaving differently. Price moves are being driven not only by risk sentiment, but also by positioning, liquidity needs, and interest-rate expectations.",
        ],
      },
    ],
    conclusion: [
      "The key takeaway from this period is that the shock is no longer contained within markets. It is spreading into the broader economy through inflation, supply chains, and business activity, increasing the risk of a wider slowdown.",
      "At the same time, the policy backdrop is becoming more complex. A combination of resilient growth, rising inflation pressure, and geopolitical uncertainty leaves the Fed in a difficult position, with no easy path forward.",
      "For investors, this marks a shift in regime. It is no longer just about reacting to market moves, but understanding how those moves translate into real economic outcomes.",
    ],
    closingNote: "The story is moving from market volatility to economic impact, and that is where the real risk begins.",
  },
  {
    slug: "post-brexit-financial-services-framework",
    issue: "Issue 23",
    title: "The Post-Brexit Financial Services Framework",
    summary:
      "A board-level look at how firms are adapting to diverging compliance standards between London and Brussels as supervisory expectations tighten.",
    publication: "March 14, 2026",
    readTime: "6 min read",
    category: "Regulatory",
    accent: "Compliance divergence",
    heroImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Glass office towers in a financial district",
    keyPoints: [
      "Firms are redesigning reporting flows to satisfy two supervisory environments.",
      "Cross-border servicing models are being re-evaluated for cost and timing risk.",
      "Operational resilience is becoming central to compliance strategy.",
    ],
    sections: [
      {
        title: "Two rulebooks, one operating reality",
        paragraphs: [
          "Financial institutions are now managing a more fragmented environment, where product governance, approvals, and disclosure expectations no longer align as neatly as they once did.",
          "The strategic challenge is not merely legal interpretation. It is deciding which operating model remains scalable when duplication, delay, and supervisory scrutiny all increase at the same time.",
        ],
      },
    ],
    conclusion: [
      "Brexit is no longer a transition story. It is an operating model story, and firms that treat it that way are adapting faster.",
    ],
    closingNote: "Compliance architecture is becoming a competitive advantage, not just a cost center.",
  },
  {
    slug: "defensive-positioning-in-high-interest-cycles",
    issue: "Issue 22",
    title: "Defensive Positioning in High-Interest Cycles",
    summary:
      "Why structured equity, mezzanine debt, and liquidity discipline are becoming more important for mid-market operators navigating expensive capital.",
    publication: "March 8, 2026",
    readTime: "5 min read",
    category: "M&A Strategy",
    accent: "Cost of capital",
    heroImage:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
    heroAlt: "Financial charts and calculator on a desk",
    keyPoints: [
      "Higher rates are changing the shape of viable deal structures.",
      "Liquidity buffers matter more when refinancing windows are uncertain.",
      "Managers are prioritizing durability over aggressive expansion.",
    ],
    sections: [
      {
        title: "Capital strategy is becoming operational strategy",
        paragraphs: [
          "In a higher-rate environment, financing terms influence not only valuation but also hiring, integration speed, and downside resilience.",
          "That is why mid-market acquirers are spending more time on capital stack design before they commit to the transaction itself.",
        ],
      },
    ],
    conclusion: [
      "Defensive positioning is not a retreat. It is a way of preserving optionality while the cost of money remains elevated.",
    ],
    closingNote: "The next winners may be the firms that stay patient longest.",
  },
];

export const featuredNewsletter = newsletters[0];

export const newsletterLookup = Object.fromEntries(newsletters.map((article) => [article.slug, article]));
