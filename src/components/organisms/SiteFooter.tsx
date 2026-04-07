import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";
import { NAV_ITEMS } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-charcoal px-6 py-16 text-slate-400 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <Logo light />
          <p className="mt-4 max-w-2xl text-sm leading-relaxed">
            Immigration-grade business plans, consulting, and SBA readiness support for founders, attorneys, investors,
            and growth-stage businesses.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm transition hover:text-primary">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 text-xs">
          <p>© {new Date().getFullYear()} Stratena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
