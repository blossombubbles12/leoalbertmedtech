import React from "react";
import { siteConfig } from "@/config/site";
import { BreadcrumbItem } from "@/types";

export function OrganizationJsonLd() {
  const addresses = [
    siteConfig.contact.address,
    ...(siteConfig.contact.additionalAddresses ?? []),
  ];

  const postalAddress = (address: (typeof addresses)[number]) => ({
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.city,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  });

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
    address: postalAddress(siteConfig.contact.address),
    location: addresses.map((address) => ({
      "@type": "Place",
      name: address.label,
      address: postalAddress(address),
    })),
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
