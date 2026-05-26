import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-charcoal px-4 py-12 text-slate-400 sm:px-6 sm:py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
        <div>
          <div className="mb-6">
            <Logo light />
          </div>
          <p className="text-sm leading-relaxed">
            Strategic boutique consultancy providing premier business planning and advisory for high-stakes reviews.
          </p>
        </div>
        <div>
          <h6 className="mb-6 font-bold text-white">Services</h6>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-primary" href="/business-plan">Business Plan</Link></li>
            <li><Link className="hover:text-primary" href="/sba-loan-readiness-packages">SBA Lending</Link></li>
            <li><Link className="hover:text-primary" href="/consulting">M&amp;A Strategy</Link></li>
            <li><Link className="hover:text-primary" href="/attorney-hub">Business Immigration Plan</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-6 font-bold text-white">Company</h6>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-primary" href="/about">About Us</Link></li>
            <li><Link className="hover:text-primary" href="#">Our Process</Link></li>
            <li><Link className="hover:text-primary" href="/stratena-scope">Insights</Link></li>
            <li><Link className="hover:text-primary" href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-6 font-bold text-white">Contact</h6>
          <p className="mb-2 text-sm">info@stratena.com</p>
          <p className="text-sm">+1 (832) 270-5239</p>
          <div className="mt-6 flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-white">language</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">share</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-800 pt-8 text-xs md:mt-16 md:flex-row">
        <p>© 2026 Stratena. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          <Link className="hover:text-white" href="#">Privacy Policy</Link>
          <Link className="hover:text-white" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
