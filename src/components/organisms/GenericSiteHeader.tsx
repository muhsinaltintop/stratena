import Link from "next/link";
import { NAV_ITEMS } from "@/lib/site-content";

export function GenericSiteHeader() {
  return (
    <header className="border-b border-[#d6dce8] bg-[#eef2f9] px-6 py-4 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-[#2f3f61] transition hover:bg-[#dbe4f4]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
