import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { ScopeCategoryFilter } from "@/components/organisms/stratena-scope/ScopeCategoryFilter";
import { ScopeFeaturedArticle } from "@/components/organisms/stratena-scope/ScopeFeaturedArticle";
import { ScopeHero } from "@/components/organisms/stratena-scope/ScopeHero";
import { ScopeInsightsGrid } from "@/components/organisms/stratena-scope/ScopeInsightsGrid";
import { ScopeNewsletterCta } from "@/components/organisms/stratena-scope/ScopeNewsletterCta";

export function StratenaScopeTemplate() {
  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <ScopeHero />
      <ScopeFeaturedArticle />
      <ScopeCategoryFilter />
      <ScopeInsightsGrid />
      <ScopeNewsletterCta />
      <SiteFooter />
    </main>
  );
}
