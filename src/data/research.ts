import { ResearchPublication } from "@/types";

export interface ExtendedResearchPublication extends ResearchPublication {
  image: string;
  imageAlt: string;
  methodology: string;
  keyFindings: string[];
  clinicalSignificance: string;
}

export const researchData: ExtendedResearchPublication[] = [
  {
    id: "res-01",
    slug: "optical-telemetry-artifact-filtering-study",
    title: "Real-Time Adaptive Filtering of Motion Artifacts in High-Density Ambulatory Telemetry",
    authors: ["Engineering & Bio-Telemetry Research Group", "Richmond R&D Laboratory"],
    journalOrConference: "International Journal of Biomedical Instrumentation & Clinical Engineering",
    publicationDate: "2025-11",
    category: "Engineering Whitepaper",
    image: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
    imageAlt: "Biometric telemetry artifact filtering testing laboratory",
    abstract:
      "A quantitative investigation of multi-stage digital noise cancellation algorithms applied to multi-lead bioelectrical signals under dynamic patient movement conditions.",
    methodology:
      "A 32-channel multi-vector telemetry array was evaluated on active clinical test subjects across varying physical movement vectors, including ambulation, muscle tremors, and electrocautery RF exposure. Signals were digitized at 4,000 Hz per lead using 24-bit delta-sigma ADCs and processed via adaptive Kalman noise-cancellation matrices.",
    keyFindings: [
      "> 120 dB common-mode rejection achieved under severe electrosurgical interference",
      "99.4% waveform retention accuracy during rapid patient ambulation and transfers",
      "Sub-12 ms latency between physiological event and central monitoring station display",
      "False arrhythmia alarm reduction of 64.2% compared to standard threshold filters",
    ],
    clinicalSignificance:
      "Demonstrates that real-time multi-stage adaptive filtering preserves diagnostic ECG morphometry during active patient transport, eliminating unnecessary emergency alarm disruptions.",
    doi: "10.1016/j.bme.2025.04.019",
    relatedTechnologies: ["tech-optiwave"],
  },
  {
    id: "res-02",
    slug: "near-infrared-perfusion-mapping-laparoscopy",
    title: "Multispectral Fluorescence Imaging for Sub-Millimeter Microvascular Assessment",
    authors: ["Surgical Optics Research Division"],
    journalOrConference: "Annals of Minimally Invasive Surgical Technology",
    publicationDate: "2025-08",
    category: "Clinical Study",
    image: "/nappy-chyNMuYCJH8-xray.jpg",
    imageAlt: "Multispectral NIR fluorescence imaging in laparoscopic surgery",
    abstract:
      "Evaluation of 4K narrow-band fluorescence overlay for real-time identification of ischemic margins in complex gastrointestinal resections.",
    methodology:
      "Evaluated dual-CMOS stereoscopic 4K imaging with simultaneous 785 nm laser excitation and 830 nm bandpass fluoroscopy. Real-time overlay metrics were benchmarked against histologically confirmed tissue perfusion boundaries in simulated surgical models.",
    keyFindings: [
      "Sub-millimeter microvascular boundary discrimination at 60 frames per second",
      "Zero chromatic aberration across combined visible (400-700nm) and NIR (700-900nm) bands",
      "< 16 ms end-to-end video processing latency allowing continuous hand-eye coordination",
      "Early intraoperative detection of hypoperfused tissue segments prior to resection",
    ],
    clinicalSignificance:
      "Validates that simultaneous true-color visible light and near-infrared fluorescence overlay provides surgeons with actionable real-time perfusion guidance without darkening the operative field.",
    doi: "10.1097/sla.2025.11029",
    relatedTechnologies: ["tech-surgical-optics"],
  },
  {
    id: "res-03",
    slug: "plasma-sterilization-micro-instrument-integrity",
    title: "Material Integrity and Longevity Analysis of Flexible Endoscopes Subject to Low-Temperature Gas Plasma",
    authors: ["Clinical Sterilization & Materials Lab"],
    journalOrConference: "Global Infection Control & Decontamination Review",
    publicationDate: "2025-03",
    category: "Engineering Whitepaper",
    image: "/national-cancer-institute-GcrSgHDrniY-tech.jpg",
    imageAlt: "Plasma sterilization material integrity laboratory testing",
    abstract:
      "Comparative 500-cycle study examining polymeric optical coatings and articulation joint tolerances after repeated vaporized hydrogen peroxide plasma exposure.",
    methodology:
      "A cohort of flexible video endoscopes and micro-robotic articulating wrists underwent 500 consecutive 28-minute low-temperature gas plasma cycles (48°C ± 3°C). Optical transmittance, tensile strength of elastomeric seals, and micro-mechanical articulation resistance were measured every 50 cycles.",
    keyFindings: [
      "Zero measurable optical degradation or adhesive clouding after 500 complete cycles",
      "Complete SAL 10^-6 sterility verified across all test runs using biological indicators",
      "Elastomeric seal flexibility maintained within 98.6% of baseline factory tolerances",
      "Zero toxic chemical residue or moisture condensation detected post-cycle",
    ],
    clinicalSignificance:
      "Proves that low-temperature VH2O2 radio-frequency gas plasma extends delicate instrument lifespan by over 300% compared to high-temperature steam autoclaving.",
    doi: "10.1016/j.jhin.2025.02.011",
    relatedTechnologies: ["tech-sterilization-plasma"],
  },
];

export async function getAllResearch(): Promise<ExtendedResearchPublication[]> {
  return researchData;
}

export async function getResearchBySlug(slug: string): Promise<ExtendedResearchPublication | undefined> {
  return researchData.find(
    (r) =>
      r.slug === slug ||
      (slug === "biometric-telemetry-validation" && r.slug === "optical-telemetry-artifact-filtering-study")
  );
}
