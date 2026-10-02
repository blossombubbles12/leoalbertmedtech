import React from "react";
import { siteConfig } from "@/config/site";
import { BreadcrumbItem } from "@/types";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    description: siteConfig.description,
    telephone: siteConfig.contact.phoneFormatted,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.region,
      addressCountry: siteConfig.contact.address.country,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
