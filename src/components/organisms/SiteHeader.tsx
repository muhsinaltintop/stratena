import { Logo } from "@/components/atoms/Logo";
import { NavLinks } from "@/components/molecules/NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4 lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Logo />
        <NavLinks />
        {/* <Button size="sm">Request Consultation</Button>S */}
      </div>
    </header>
  );
}
