import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { PageSeoProps } from "@/types";

/**
 * Constructs a fully qualified Next.js Metadata object adhering to OpenGraph and Twitter standards.
 */
export function constructMetadata({
  title,
  description = siteConfig.description,
  keywords = siteConfig.keywords,
  canonicalUrlRelative = "",
  ogImage = "/og-image.jpg",
  noIndex = false,
}: Partial<PageSeoProps> = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.shortName}`
    : `${siteConfig.name} | Advanced Medical Engineering`;

  const canonicalUrl = canonicalUrlRelative
    ? `${siteConfig.url}${canonicalUrlRelative.startsWith("/") ? "" : "/"}${canonicalUrlRelative}`
    : siteConfig.url;

  return {
    title: fullTitle,
    description,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - Richmond, Vancouver, Canada`,
        },
      ],
    },
    icons: {
      icon: [{ url: "/logoicon.png", type: "image/png" }],
      shortcut: "/logoicon.png",
      apple: "/logoicon.png",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
      creator: "@leoalbermedtech",
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
