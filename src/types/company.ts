export interface CompanyLocation {
  city: string;
  region: string;
  country: string;
  addressLine?: string;
  postalCode?: string;
  display: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

export interface CompanyContact {
  phone: string;
  phoneFormatted: string;
  email: string;
  supportEmail?: string;
  salesEmail?: string;
  mediaEmail?: string;
}

export interface CompanyLeadership {
  name: string;
  role: string;
  bio?: string;
  image?: string;
  linkedin?: string;
}

export interface CompanyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  foundedYear?: string;
  headquarters: CompanyLocation;
  contact: CompanyContact;
  mission: string;
  vision: string;
  leadership?: CompanyLeadership[];
  milestones?: CompanyMilestone[];
}
