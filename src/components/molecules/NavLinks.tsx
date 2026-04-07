import Link from "next/link";

const links = [
  "Home",
  "About",
  "Business Plan",
  "E-1 Business Plan",
  "E-2 Business Plan",
  "EB-1C Business Plan",
  "EB-2 NIW Business Plan",
  "EB-5 Business Plan",
  "H1-B Business Plan",
  "L-1 Business Plan",
  "SBA Loan Business Plans",
  "Consulting",
  "Strategy Consulting",
  "Operations Consulting",
  "Financial Consulting",
  "Company Check Up",
  "Partnership Protocols",
  "SBA Loan Readiness Packages",
  "Attorney Hub",
  "Business Valuation",
  "Market Research",
  "Request for Evidence (RFE) Response",
  "Stratena Scope",
  "Contact",
];

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-6 overflow-x-auto md:flex">
      {links.map((label) => (
        <Link key={label} href="#" className="whitespace-nowrap text-sm font-semibold text-slate-600 transition-colors hover:text-primary">
          {label}
        </Link>
      ))}
    </nav>
  );
}
