export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  isMegaMenu?: boolean;
  featured?: {
    title: string;
    description: string;
    href: string;
    image: string;
    tag?: string;
  };
  groups?: {
    title: string;
    items: {
      title: string;
      href: string;
      description?: string;
      badge?: string;
    }[];
  }[];
  children?: {
    title: string;
    href: string;
    description?: string;
    badge?: string;
  }[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  legalName: string;
  domain: string;
  url: string;
  description: string;
  keywords: string[];
  contact: {
    phone: string;
    phoneFormatted: string;
    email: string;
    supportEmail: string;
    address: {
      street?: string;
      city: string;
      region: string;
      country: string;
      postalCode?: string;
      display: string;
    };
  };
  social: {
    linkedin?: string;
    twitter?: string;
    youtube?: string;
  };
  mainNav: NavItem[];
  footerNav: {
    title: string;
    items: {
      title: string;
      href: string;
    }[];
  }[];
}

export const siteConfig: SiteConfig = {
  name: "Adalbert Medical Technology",
  shortName: "Adalbert MedTech",
  legalName: "Adalbert Medical Technology Inc.",
  domain: "leoalbermedtech.com",
  url: "https://leoalbermedtech.com",
  description:
    "Adalbert Medical Technology operates high-precision biomedical engineering and manufacturing facilities in Richmond, Vancouver, Canada, developing advanced clinical hardware, surgical optics, and telemetry systems.",
  keywords: [
    "Adalbert Medical Technology",
    "Adalbert MedTech",
    "Medical Technology Facility",
    "Biomedical Engineering Facility",
    "Healthcare Innovation Facility",
    "Surgical Equipment",
    "Diagnostic Systems",
    "Richmond Vancouver Medical Tech",
  ],
  contact: {
    phone: "+16042438397",
    phoneFormatted: "+1 604 243 8397",
    email: "info@leoalbermedtech.com",
    supportEmail: "support@leoalbermedtech.com",
    address: {
      city: "Richmond",
      region: "Vancouver, British Columbia",
      country: "Canada",
      display: "Richmond, Vancouver, BC, Canada",
    },
  },
  social: {
    linkedin: "https://linkedin.com/company/leoalbermedtech",
    twitter: "https://x.com/leoalbermedtech",
  },
  mainNav: [
    {
      title: "Medical Technologies",
      href: "/medical-technologies",
      description: "Proprietary engineering platforms for high-acuity healthcare.",
      isMegaMenu: true,
      featured: {
        title: "LAT-X100 Biometric Platform",
        description: "Synchronized telemetry with sub-millisecond signal acquisition.",
        href: "/medical-technologies/precision-telemetry",
        image: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
        tag: "Core Telemetry",
      },
      groups: [
        {
          title: "Hardware Platforms",
          items: [
            {
              title: "Precision Biometric Telemetry",
              href: "/medical-technologies/precision-telemetry",
              description: "Continuous vital monitoring for high-acuity intensive care units.",
              badge: "LAT-X100",
            },
            {
              title: "Surgical Optical Arrays",
              href: "/medical-technologies/surgical-optics",
              description: "4K multispectral visualization and near-infrared optical systems.",
              badge: "OptiSurg",
            },
          ],
        },
        {
          title: "Robotics & Sterilization",
          items: [
            {
              title: "Bio-Robotic Actuation",
              href: "/medical-technologies/robotic-actuation",
              description: "Submillimeter motion control and surgical haptic tremor filtering.",
            },
            {
              title: "Clinical Decontamination",
              href: "/medical-technologies/clinical-decontamination",
              description: "Low-temperature vaporized hydrogen peroxide and gas plasma systems.",
            },
          ],
        },
      ],
    },
    {
      title: "Solutions",
      href: "/solutions",
      description: "Integrated clinical systems designed for healthcare environments.",
      isMegaMenu: true,
      featured: {
        title: "High-Acuity Surgical Suites",
        description: "Synchronized illumination, 4K endoscopy, and sterile workflow architecture.",
        href: "/solutions/surgical-suites",
        image: "/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg",
        tag: "OR Architecture",
      },
      groups: [
        {
          title: "Clinical Environments",
          items: [
            {
              title: "Operating Theatres & Surgical Suites",
              href: "/solutions/surgical-suites",
              description: "Ergonomic consoles, optical arrays, and integrated sterilization.",
            },
            {
              title: "Intensive Care & Telemetry Wards",
              href: "/solutions/intensive-care-telemetry",
              description: "Continuous vital telemetry arrays with central ward dashboards.",
            },
          ],
        },
        {
          title: "Laboratory & Diagnostics",
          items: [
            {
              title: "Diagnostic Research Laboratories",
              href: "/solutions/diagnostic-laboratories",
              description: "High-throughput fluidic analyzers and automated biological handling.",
            },
            {
              title: "Hospital Systems Integration",
              href: "/solutions",
              description: "HL7/FHIR compliant bridges for electronic medical record networks.",
            },
          ],
        },
      ],
    },
    {
      title: "Products",
      href: "/products",
      description: "Precision medical instruments, hardware consoles, and devices.",
      isMegaMenu: true,
      featured: {
        title: "OptiSurg 4K Console",
        description: "Multispectral optical sensor with ultra-low latency intraoperative video.",
        href: "/products/optisurg-4k-imaging-console",
        image: "/nappy-chyNMuYCJH8-xray.jpg",
        tag: "Flagship Optics",
      },
      groups: [
        {
          title: "Medical Devices",
          items: [
            {
              title: "LAT-X100 Telemetry Monitor",
              href: "/products/lat-x100-telemetry-monitor",
              description: "Multi-parameter physiological monitor with fail-safe architecture.",
              badge: "LAT-X100",
            },
            {
              title: "OptiSurg 4K Imaging Console",
              href: "/products/optisurg-4k-imaging-console",
              description: "Next-generation surgical optical array with high dynamic range.",
              badge: "4K HDR",
            },
          ],
        },
        {
          title: "Sterilization & Systems",
          items: [
            {
              title: "PlasmaPulse S2000 Sterilizer",
              href: "/products/plasmapulse-s2000-sterilizer",
              description: "Rapid cycle low-temperature plasma sterilization unit.",
              badge: "S2000",
            },
            {
              title: "Complete Product Catalog",
              href: "/products",
              description: "Browse all certified clinical instrumentation and accessories.",
            },
          ],
        },
      ],
    },
    {
      title: "Innovation & Research",
      href: "/innovation",
      description: "Biomedical R&D, peer-reviewed studies, and digital health initiatives.",
      isMegaMenu: true,
      featured: {
        title: "Biomedical R&D Facility",
        description: "Richmond laboratory advancing multi-channel sensors and algorithms.",
        href: "/innovation",
        image: "/cdc-p33DqVXhWvs-u.jpg",
        tag: "Applied R&D",
      },
      groups: [
        {
          title: "R&D Focus",
          items: [
            {
              title: "Innovation Hub",
              href: "/innovation",
              description: "Edge telemetry, low-latency firmware, and micro-actuators.",
            },
            {
              title: "Research & Scientific Publications",
              href: "/research",
              description: "Biomedical engineering whitepapers and clinical study reports.",
            },
          ],
        },
        {
          title: "Clinical Studies",
          items: [
            {
              title: "Biometric Telemetry Validation",
              href: "/research/biometric-telemetry-validation",
              description: "Clinical evaluation of multi-vector ECG filtering algorithms.",
            },
            {
              title: "Technical Documentation & Whitepapers",
              href: "/resources",
              description: "Datasheets, hardware guides, and clinical integration briefs.",
            },
          ],
        },
      ],
    },
    {
      title: "About",
      href: "/about",
      description: "Corporate heritage, Canadian leadership, and engineering principles.",
      children: [
        {
          title: "Corporate Profile",
          href: "/about",
          description: "Our mission, leadership, and Richmond operations facility.",
        },
        {
          title: "Engineering Principles",
          href: "/about",
          description: "Quality management directives and clinical safety protocols.",
        },
        {
          title: "Technical Resources",
          href: "/resources",
          description: "Datasheets, specifications, and architecture whitepapers.",
        },
        {
          title: "Contact & Head Office",
          href: "/contact",
          description: "Connect with our biomedical engineering team in Richmond, BC.",
        },
      ],
    },
    {
      title: "Contact",
      href: "/contact",
      description: "Connect with our engineering and clinical solutions team.",
    },
  ],
  footerNav: [
    {
      title: "Technologies & Solutions",
      items: [
        { title: "Medical Technologies", href: "/medical-technologies" },
        { title: "Clinical Solutions", href: "/solutions" },
        { title: "Innovation Hub", href: "/innovation" },
        { title: "Product Catalog", href: "/products" },
        { title: "Research & Development", href: "/research" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About Us", href: "/about" },
        { title: "Technical Resources", href: "/resources" },
        { title: "Contact & Inquiries", href: "/contact" },
      ],
    },
    {
      title: "Legal & Compliance",
      items: [
        { title: "Privacy Policy", href: "/privacy" },
        { title: "Terms of Service", href: "/terms" },
      ],
    },
  ],
};
