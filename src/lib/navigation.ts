export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  // { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Business Plan",
    href: "/business-plan",
    children: [
      { label: "E-1 Business Plan", href: "/business-plan/e-1-business-plan" },
      { label: "E-2 Business Plan", href: "/business-plan/e-2-business-plan" },
      { label: "EB-1C Business Plan", href: "/business-plan/eb-1c-business-plan" },
      { label: "EB-2 NIW Business Plan", href: "/business-plan/eb-2-niw-business-plan" },
      { label: "EB-5 Business Plan", href: "/business-plan/eb-5-business-plan" },
      { label: "H1-B Business Plan", href: "/business-plan/h1-b-business-plan" },
      { label: "L-1 Business Plan", href: "/business-plan/l-1-business-plan" },
      { label: "SBA Loan Business Plans", href: "/business-plan/sba-loan-business-plans" },
    ],
  },
  {
    label: "Consulting",
    href: "/consulting",
    children: [
      { label: "Strategy Consulting", href: "/consulting/strategy-consulting" },
      { label: "Operations Consulting", href: "/consulting/operations-consulting" },
      { label: "Financial Consulting", href: "/consulting/financial-consulting" },
      { label: "Company Check Up", href: "/consulting/company-check-up" },
      { label: "Partnership Protocols", href: "/consulting/partnership-protocols" },
    ],
  },
  { label: "SBA Loan Readiness", href: "/sba-loan-readiness-packages" },
  {
    label: "Attorney Hub",
    href: "/attorney-hub",
    children: [
      { label: "Business Valuation", href: "/attorney-hub/business-valuation" },
      { label: "Market Research", href: "/attorney-hub/market-research" },
      {
        label: "Request for Evidence (RFE) Response",
        href: "/attorney-hub/request-for-evidence-rfe-response",
      },
    ],
  },
  { label: "Stratena Scope", href: "/stratena-scope" },
  { label: "Contact", href: "/contact" },
];

type PageEntry = {
  title: string;
  parent?: string;
};

export const pageLookup = navItems.reduce<Record<string, PageEntry>>((acc, item) => {
  acc[item.href] = { title: item.label };

  item.children?.forEach((child) => {
    acc[child.href] = { title: child.label, parent: item.label };
  });

  return acc;
}, {});
