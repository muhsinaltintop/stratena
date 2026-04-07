"use client";

import { useState } from "react";
import Link from "next/link";
import { navItems } from "@/lib/navigation";

export function NavLinks() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  };

  return (
    <>
      <nav className="hidden items-center gap-6 md:flex">
        {navItems.map((item) => {
          const hasChildren = Boolean(item.children?.length);

          return (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-[clamp(0.75rem,1.1vw,0.875rem)] font-semibold text-slate-600 transition-colors hover:text-primary"
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

      <div className="relative md:hidden">
        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:border-primary hover:text-primary"
          onClick={() => {
            setIsMenuOpen((isOpen) => !isOpen);
            setOpenSubmenu(null);
          }}
        >
          <span className="material-symbols-outlined">{isMenuOpen ? "close" : "menu"}</span>
        </button>

        {isMenuOpen ? (
          <nav
            id="mobile-navigation"
            className="absolute right-0 top-full z-50 mt-3 max-h-[calc(100vh-6rem)] w-[calc(100vw-3rem)] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl"
          >
            <ul className="space-y-2">
              {navItems.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const isSubmenuOpen = openSubmenu === item.label;

                return (
                  <li key={item.label} className="rounded-xl bg-slate-50/70">
                    <div className="flex items-center">
                      <Link
                        href={item.href}
                        className="flex-1 rounded-l-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:text-primary"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>

                      {hasChildren ? (
                        <button
                          type="button"
                          aria-controls={`mobile-submenu-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                          aria-expanded={isSubmenuOpen}
                          aria-label={`${isSubmenuOpen ? "Close" : "Open"} ${item.label} submenu`}
                          className="flex h-11 w-12 items-center justify-center rounded-r-xl border-l border-slate-200 text-slate-600 transition-colors hover:bg-white hover:text-primary"
                          onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.label)}
                        >
                          <span className="material-symbols-outlined text-base">
                            {isSubmenuOpen ? "expand_less" : "expand_more"}
                          </span>
                        </button>
                      ) : null}
                    </div>

                    {hasChildren && isSubmenuOpen ? (
                      <ul
                        id={`mobile-submenu-${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                        className="border-t border-slate-200 px-2 pb-2"
                      >
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-white hover:text-primary"
                              onClick={closeMenu}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
}
