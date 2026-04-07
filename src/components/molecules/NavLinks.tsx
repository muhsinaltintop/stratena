import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Business Plan", href: "/business-plan" },
  { label: "Consulting", href: "/consulting" },
  { label: "Attorney Hub", href: "/attorney-hub" },
  { label: "Stratena Scope", href: "/stratena-scope" },
  { label: "Contact", href: "/contact" },
];

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
