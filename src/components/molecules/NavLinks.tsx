import Link from "next/link";

const links = ["Home", "About", "Consulting", "Blog", "Contact"];

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 md:flex">
      {links.map((label) => (
        <Link key={label} href="#" className="text-sm font-semibold text-slate-600 transition-colors hover:text-primary">
          {label}
        </Link>
      ))}
    </nav>
  );
}
