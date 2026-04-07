import { Metadata } from "next";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { SITE_PAGES } from "@/lib/site-content";

const homePage = SITE_PAGES["/"];

export const metadata: Metadata = {
  title: homePage.seoTitle,
  description: homePage.metaDescription,
};

export default function Home() {
  return <ContentTemplate page={homePage} />;
}
