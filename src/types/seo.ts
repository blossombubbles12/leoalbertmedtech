import type { Metadata } from "next";

export interface PageSeoProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrlRelative?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface SchemaOrgOrganizationProps {
  name: string;
  legalName?: string;
  url: string;
  logo?: string;
  description?: string;
  telephone?: string;
  address?: {
    city: string;
    region: string;
    country: string;
    streetAddress?: string;
  };
  sameAs?: string[];
}
