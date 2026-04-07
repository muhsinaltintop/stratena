import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentTemplate } from "@/components/templates/ContentTemplate";
import { PAGE_PATHS, SITE_PAGES } from "@/lib/site-content";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

const pathFromSlug = (slug: string[]) => `/${slug.join("/")}`;

export async function generateStaticParams() {
  return PAGE_PATHS.map((path) => ({
    slug: path.replace(/^\//, "").split("/"),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = SITE_PAGES[pathFromSlug(slug)];

  if (!page) {
    return {};
  }

  return {
    title: page.seoTitle,
    description: page.metaDescription,
  };
}

export default async function ContentPage({ params }: PageProps) {
  const { slug } = await params;
  const page = SITE_PAGES[pathFromSlug(slug)];

  if (!page) {
    notFound();
  }

  return <ContentTemplate page={page} />;
}
