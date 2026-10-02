import { ResourceItem } from "@/types";

export interface ExtendedResourceItem extends ResourceItem {
  image: string;
  imageAlt: string;
  documentScope: string;
  includedSections: string[];
  targetAudience: string;
}

export const resourcesData: ExtendedResourceItem[] = [
  {
    id: "res-doc-01",
    slug: "lat-x100-technical-spec-sheet",
    title: "LAT-X100 Precision Biometric Telemetry Technical Datasheet",
    type: "Technical Sheet",
    summary:
      "Complete electrical specifications, sampling rates, network security protocols, and sensor pinout schematics.",
    image: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
    imageAlt: "LAT-X100 Telemetry technical documentation",
    publishedDate: "2025-10-15",
    version: "Rev 2.4",
    fileSize: "2.8 MB",
    language: "English / French",
    category: "Monitoring Systems",
    documentScope:
      "This technical datasheet provides exhaustive electrical, mechanical, and network communication parameters for the Adalbert Medical Technology LAT-X100 Telemetry System. Intended for clinical engineering and hospital IT departments.",
    includedSections: [
      "Analog-to-Digital Converter (ADC) Signal Pathways",
      "Defibrillator-Proof Galvanic Isolation Circuitry",
      "Wi-Fi 6 & Medical Bluetooth Radio Specifications",
      "HL7 FHIR & DICOM Message Syntax Standards",
      "Pinout Schematics & Sensor Lead Configurations",
    ],
    targetAudience: "Biomedical Engineers, Hospital IT Specialists, Intensive Care Directors",
  },
  {
    id: "res-doc-02",
    slug: "lav-4000-surgical-suite-integration-guide",
    title: "LAV-4000 Surgical Imaging Architecture & Integration Manual",
    type: "Clinical Guide",
    summary:
      "Operating room video routing, optical fiber installation tolerances, and DICOM PACS interface configuration.",
    image: "/nappy-chyNMuYCJH8-xray.jpg",
    imageAlt: "LAV-4000 Surgical Imaging integration manual",
    publishedDate: "2025-09-20",
    version: "Rev 1.8",
    fileSize: "4.1 MB",
    language: "English",
    category: "Surgical Systems",
    documentScope:
      "A comprehensive planning and installation manual for integrating the OptiSurg LAV-4000 4K multispectral endoscopic console into operating theatre display booms and hospital PACS archival networks.",
    includedSections: [
      "12G-SDI & 10GbE IP Video Stream Topology",
      "Near-Infrared (785nm/830nm) Laser Safety Protocols",
      "Ceiling Boom Articulation Weight & Cable Radii Guidelines",
      "Sterile Drape Attachment & Lens Autoclave Parameters",
      "Hospital PACS Video Archiving Configuration",
    ],
    targetAudience: "Surgical Theatre Planners, Clinical Engineers, Operating Room Managers",
  },
  {
    id: "res-doc-03",
    slug: "plazmax-70-material-compatibility-matrix",
    title: "PlazmaX-70 Low-Temperature Decontamination Compatibility Index",
    type: "Regulatory Notice",
    summary:
      "Comprehensive polymer, optic, and metallurgical validation matrix for hospital sterile processing departments.",
    image: "/national-cancer-institute-GcrSgHDrniY-tech.jpg",
    imageAlt: "PlazmaX-70 Sterilization compatibility matrix",
    publishedDate: "2025-07-11",
    version: "Rev 3.1",
    fileSize: "1.9 MB",
    language: "English / French",
    category: "Infection Control",
    documentScope:
      "Validated material compatibility index listing tested polymers, optical cements, electronic sensors, and surgical alloys compatible with the PlasmaPulse low-temperature VH2O2 gas plasma cycle.",
    includedSections: [
      "Validated Flexible & Rigid Endoscope Models",
      "Polymer & Elastomer Chemical Tolerance Tables",
      "Biological Indicator SAL 10^-6 Validation Testing",
      "Cassette Handling & RFID Verification Guidelines",
      "Regulatory Compliance & Batch Traceability Protocols",
    ],
    targetAudience: "Central Sterile Supply Departments (CSSD), Infection Control Officers",
  },
];

export async function getAllResources(): Promise<ExtendedResourceItem[]> {
  return resourcesData;
}

export async function getResourceBySlug(slug: string): Promise<ExtendedResourceItem | undefined> {
  return resourcesData.find((res) => res.slug === slug);
}
