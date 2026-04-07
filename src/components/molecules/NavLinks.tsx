import Link from "next/link";
import { navItems } from "@/lib/navigation";

export function NavLinks() {
  return (
    <nav className="hidden items-center gap-6 md:flex">
      {navItems.map((item) => {
        const hasChildren = Boolean(item.children?.length);

        return (
          <div key={item.label} className="group relative">
            <Link
              href={item.href}
              className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors hover:text-primary"
            >
              {item.label}
              {hasChildren ? <span className="material-symbols-outlined text-base">expand_more</span> : null}
            </Link>

            {hasChildren ? (
              <div className="invisible absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-lg transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <ul className="space-y-1">
                  {item.children?.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        );
      })}
    </nav>
  );
}
