import { SiteFooter } from "@/components/organisms/SiteFooter";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { AttorneyHubCollaboration, AttorneyHubFinalCta } from "@/components/organisms/attorney-hub/AttorneyHubCollaboration";
import { AttorneyHubHero } from "@/components/organisms/attorney-hub/AttorneyHubHero";
import { AttorneyHubNarrative } from "@/components/organisms/attorney-hub/AttorneyHubNarrative";
import { AttorneyHubServices } from "@/components/organisms/attorney-hub/AttorneyHubServices";

type AttorneyHubTemplateProps = {
  title: string;
  paragraphs: string[];
};

export function AttorneyHubTemplate({ title, paragraphs }: AttorneyHubTemplateProps) {
  const heroDescription =
    paragraphs[0] ??
    "Empowering law firms with institutional-grade business planning and evidentiary documentation for complex immigration and corporate filings.";

  return (
    <main className="bg-background-light text-slate-900">
      <SiteHeader />
      <AttorneyHubHero title={title === "Attorney Hub" ? "Collaborative Strategic Support" : title} description={heroDescription} />
      <AttorneyHubServices />
      <AttorneyHubNarrative paragraphs={paragraphs} />
      <AttorneyHubCollaboration />
      <AttorneyHubFinalCta />
      <SiteFooter />
    </main>
  );
}
