import Link from "next/link";
import { Logo } from "@/components/atoms/Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-charcoal px-6 py-16 text-slate-400 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-12 md:grid-cols-4">
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
            <li><Link className="hover:text-primary" href="#">Immigration Plans</Link></li>
            <li><Link className="hover:text-primary" href="#">SBA Lending</Link></li>
            <li><Link className="hover:text-primary" href="#">M&amp;A Strategy</Link></li>
            <li><Link className="hover:text-primary" href="#">Corporate Advisory</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-6 font-bold text-white">Company</h6>
          <ul className="space-y-3 text-sm">
            <li><Link className="hover:text-primary" href="#">About Us</Link></li>
            <li><Link className="hover:text-primary" href="#">Our Process</Link></li>
            <li><Link className="hover:text-primary" href="#">Insights</Link></li>
            <li><Link className="hover:text-primary" href="#">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="mb-6 font-bold text-white">Contact</h6>
          <p className="mb-2 text-sm">hello@stratena.consulting</p>
          <p className="text-sm">+1 (555) 987-6543</p>
          <div className="mt-6 flex gap-4">
            <span className="material-symbols-outlined cursor-pointer hover:text-white">language</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">share</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col justify-between gap-4 border-t border-slate-800 pt-8 text-xs md:flex-row">
        <p>© 2024 Stratena Strategic Consulting. All rights reserved.</p>
        <div className="flex gap-6">
          <Link className="hover:text-white" href="#">Privacy Policy</Link>
          <Link className="hover:text-white" href="#">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
