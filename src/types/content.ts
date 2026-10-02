export interface TechnologyPlatform {
  id: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  category: string;
  featured?: boolean;
  capabilities: {
    title: string;
    description: string;
    specs?: Record<string, string>;
  }[];
  clinicalApplications?: string[];
  whitepaperRef?: string;
  meta?: {
    title?: string;
    description?: string;
  };
}

export interface Solution {
  id: string;
  slug: string;
  title: string;
  headline: string;
  summary: string;
  targetEnvironment: string;
  benefits: {
    title: string;
    description: string;
  }[];
  integratedTechnologies?: string[]; // IDs or slugs of technologies
  caseStudies?: {
    title: string;
    institution: string;
    summary: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
  };
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  modelNumber?: string;
  category: string;
  status: "Available" | "Clinical Evaluation" | "In Development";
  summary: string;
  overview: string;
  specifications: {
    category: string;
    items: {
      label: string;
      value: string;
    }[];
  }[];
  features: string[];
  technologiesUsed?: string[];
  documentation?: {
    title: string;
    fileUrl: string;
    fileType: string;
    fileSize?: string;
  }[];
  meta?: {
    title?: string;
    description?: string;
  };
}

export interface ResearchPublication {
  id: string;
  slug: string;
  title: string;
  authors: string[];
  journalOrConference?: string;
  publicationDate: string;
  category: "Clinical Study" | "Engineering Whitepaper" | "Peer Reviewed" | "Preprint";
  abstract: string;
  doi?: string;
  pdfUrl?: string;
  relatedTechnologies?: string[];
  meta?: {
    title?: string;
    description?: string;
  };
}

export interface ResourceItem {
  id: string;
  slug: string;
  title: string;
  type: "Brochure" | "Technical Sheet" | "Clinical Guide" | "User Manual" | "Regulatory Notice";
  summary: string;
  publishedDate: string;
  version?: string;
  fileSize?: string;
  downloadUrl?: string;
  language: string;
  category: string;
  meta?: {
    title?: string;
    description?: string;
  };
}
