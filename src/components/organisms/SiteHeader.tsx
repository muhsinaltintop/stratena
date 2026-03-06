import { Button } from "@/components/atoms/Button";
import { Logo } from "@/components/atoms/Logo";
import { NavLinks } from "@/components/molecules/NavLinks";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur-md lg:px-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Logo />
        <NavLinks />
        <Button size="sm">Request Consultation</Button>
      </div>
    </header>
  );
}
