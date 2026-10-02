import { Solution } from "@/types";

export interface ExtendedSolution extends Solution {
  images: {
    hero: string;
    detail: string;
    alt: string;
  };
  overview: string;
  subsystems: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  workflowStages: {
    step: string;
    title: string;
    description: string;
  }[];
  architecturalPillars: {
    title: string;
    description: string;
  }[];
}

export const solutionsData: ExtendedSolution[] = [
  {
    id: "sol-integrated-or",
    slug: "surgical-suites",
    title: "Operating Theatres & Surgical Suites",
    headline: "Unified Digital Architecture for High-Acuity Surgical Suites",
    summary:
      "Complete infrastructure harmonization linking robotic positioning, 4K multispectral visualization, telemetry overlay, and ergonomic sterile management into an interconnected surgical ecosystem.",
    targetEnvironment: "Surgical Suites & Theatres",
    images: {
      hero: "/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg",
      detail: "/rodrigo-porto-vfy71fExF7g-advanced operation.jpg",
      alt: "State-of-the-art integrated surgical operating theater with advanced lighting and monitors",
    },
    overview:
      "Our Integrated Surgical Suite architecture integrates high-resolution optical video distribution, ceiling-mounted articulated boom telemetry, sterile drape interfaces, and ambient theatre controls into a unified digital operating environment. By standardizing cable-free sterile corridors and low-latency digital video switching, surgical teams achieve maximum focus and operational efficiency.",
    subsystems: [
      {
        title: "Sub-Second Video & Telemetry Routing",
        description:
          "Zero-latency uncompressed 4K video switching between laparoscopic cameras, robotic consoles, fluoroscopy, and ceiling display booms.",
      },
      {
        title: "Discipline-Specific Surgical Presets",
        description:
          "One-touch console reconfiguration tailoring surgical illumination, optical zoom profiles, and vital telemetry thresholds per surgical specialty.",
      },
      {
        title: "Medical-Grade Isolated Power Topology",
        description:
          "Redundant galvanic isolation transformers and uninterrupted battery backup systems engineered for critical surgical continuity.",
      },
      {
        title: "Intraoperative Diagnostic Overlay",
        description:
          "Real-time synchronized display of patient hemodynamic parameters directly on primary surgical visualization monitors.",
      },
    ],
    benefits: [
      {
        title: "Sub-Second Device Interoperability",
        description:
          "Zero-latency video and data routing between imaging arms, endoscopic systems, and central displays.",
      },
      {
        title: "Ergonomic Surgeon Integration",
        description:
          "Customized presets for lighting, instrument responsiveness, and sensor readouts per surgical discipline.",
      },
      {
        title: "Redundant Failsafe Power & Data Bus",
        description:
          "Isolated electrical topology with medical-grade isolation transformers meeting international clinical safety standards.",
      },
      {
        title: "Sterile Corridor Optimization",
        description:
          "Ceiling-routed umbilical lines eliminating floor cable hazards and accelerating between-case room turnover.",
      },
    ],
    workflowStages: [
      {
        step: "01",
        title: "Pre-Operative System Configuration",
        description:
          "Automated self-diagnostic check and rapid specialty preset loading in under 2 minutes.",
      },
      {
        step: "02",
        title: "Intraoperative Synchronized Guidance",
        description:
          "Simultaneous multi-display 4K stereoscopic video, vital monitoring, and robotic force feedback.",
      },
      {
        step: "03",
        title: "Post-Operative Archiving & Turnover",
        description:
          "Automatic procedural video recording to hospital PACS and rapid sterile drape turnaround.",
      },
    ],
    architecturalPillars: [
      {
        title: "Clinical Room Ergonomics",
        description: "Multi-axis articulated booms with 360-degree rotation and counterbalanced positioning.",
      },
      {
        title: "High-Bandwidth Digital Routing",
        description: "10GbE fiber-optic backbone capable of uncompressed multi-stream 4K HDR switching.",
      },
    ],
    integratedTechnologies: ["tech-surgical-optics", "tech-robotics-actuation"],
  },
  {
    id: "sol-critical-care-telemetry",
    slug: "intensive-care-telemetry",
    title: "Intensive Care & Telemetry Wards",
    headline: "Centralized ICU & CCU Patient Surveillance Architecture",
    summary:
      "Continuous multi-bed monitoring infrastructure linking bedside physiological telemetry, central clinical stations, and secure enterprise hospital information systems.",
    targetEnvironment: "Intensive Care Units (ICU / CCU)",
    images: {
      hero: "/slider1.jpg",
      detail: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
      alt: "Intensive care bedside telemetry monitoring consoles and patient vital displays",
    },
    overview:
      "Engineered for intensive care, step-down telemetry units, and post-anesthesia recovery, this solution links up to 64 continuous patient beds to centralized nurse surveillance stations. Utilizing multi-vector physiological telemetry and intelligent alarm thresholding, it provides early detection of clinical deterioration while dramatically mitigating non-actionable alarm fatigue.",
    subsystems: [
      {
        title: "Multivariate Smart Alarm Engine",
        description:
          "Analyzes physiological trends across multiple parameters before escalating audible alarms, reducing nuisance alerts by up to 65%.",
      },
      {
        title: "Continuous Seamless Transport",
        description:
          "Bedside monitors detach seamlessly into lightweight transport units, maintaining continuous telemetry charting during internal patient transfers.",
      },
      {
        title: "Central Clinical Dashboard",
        description:
          "High-contrast multi-bed surveillance displays with automated rhythm strip analysis and customized early-warning scores.",
      },
      {
        title: "Bidirectional EMR Interoperability",
        description:
          "Native HL7 FHIR interfaces continuously stream verified vitals and waveform snapshots into hospital electronic health records.",
      },
    ],
    benefits: [
      {
        title: "False-Alarm Mitigation Engine",
        description:
          "Multivariate alarm verification algorithms reducing clinical alarm fatigue while retaining 100% sensitivity for true acute events.",
      },
      {
        title: "Seamless Ward Transition",
        description:
          "Continuous patient tracking during inter-department transport without requiring lead disconnection or recalibration.",
      },
      {
        title: "Hospital Network Interoperability",
        description:
          "Native bidirectional HL7 FHIR interfaces for automatic vital chart synchronization with electronic health records.",
      },
      {
        title: "Intuitive High-Contrast User Interface",
        description:
          "Anti-glare displays visible from wide viewing angles across brightly lit intensive care wards.",
      },
    ],
    workflowStages: [
      {
        step: "01",
        title: "Continuous Bedside Acquisition",
        description:
          "High-frequency 24-bit physiological acquisition across ECG, SpO2, invasive BP, and core temperature.",
      },
      {
        step: "02",
        title: "Central Ward Surveillance",
        description:
          "Real-time synchronized waveform streaming to nurse station consoles and secure clinical mobile pagers.",
      },
      {
        step: "03",
        title: "Automated EMR Charting",
        description:
          "Time-stamped biometric parameters logged directly into patient medical records without manual nurse entry.",
      },
    ],
    architecturalPillars: [
      {
        title: "Galvanic Patient Protection",
        description: "Defibrillator-proof Type CF isolated front-ends protecting patient and instrumentation.",
      },
      {
        title: "Redundant Network Failover",
        description: "Dual Gigabit Ethernet with automatic seamless Wi-Fi 6 wireless handover.",
      },
    ],
    integratedTechnologies: ["tech-optiwave"],
  },
  {
    id: "sol-sterile-processing-turnaround",
    slug: "diagnostic-laboratories",
    title: "Diagnostic & Research Laboratories",
    headline: "Automated Laboratory Diagnostic & Cold Plasma Decontamination Systems",
    summary:
      "Advanced low-temperature sterilization workstations combined with automated fluidic handling, digital traceability, and clinical validation logging for high-volume healthcare departments.",
    targetEnvironment: "Diagnostic Laboratories & CSSD",
    images: {
      hero: "/national-cancer-institute-mBrfAiw_CZA-tech.jpg",
      detail: "/national-cancer-institute-GcrSgHDrniY-tech.jpg",
      alt: "Automated diagnostic laboratory equipment and plasma sterilization chamber",
    },
    overview:
      "Designed for central sterile supply departments (CSSD) and biomedical testing laboratories, this integrated system delivers rapid, low-temperature decontamination for delicate optical endoscopes, robotic instruments, and diagnostic fluidic assemblies. Operating without high heat or toxic chemical aeration, it protects capital equipment while ensuring stringent SAL 10^-6 sterility assurance.",
    subsystems: [
      {
        title: "Rapid 28-Minute Cold Plasma Cycle",
        description:
          "Vaporized hydrogen peroxide followed by radio-frequency gas plasma eliminates spores at 45°C–55°C.",
      },
      {
        title: "Digital Cycle Validation & Traceability",
        description:
          "Integrated barcode tracking logs every instrument set, operator ID, and physical cycle parameter for compliance audits.",
      },
      {
        title: "Non-Toxic Catalytic Conversion",
        description:
          "Residual sterilant is broken down into water vapor and atmospheric oxygen, requiring zero external ventilation ducts.",
      },
      {
        title: "Dual-Chamber High Throughput",
        description:
          "Ergonomic sliding racks maximize chamber capacity to handle high daily surgical turnover volumes.",
      },
    ],
    benefits: [
      {
        title: "Material Preservation",
        description:
          "Protects delicate micro-optical coatings and electronic robotic joints from heat degradation and moisture corrosion.",
      },
      {
        title: "End-to-End Cycle Auditing",
        description:
          "Automated digital cycle verification certificates with cryptographic timestamps for regulatory records.",
      },
      {
        title: "Zero Aeration Waiting Period",
        description:
          "Instruments are immediately dry, cool, and ready for immediate clinical redeployment upon cycle completion.",
      },
      {
        title: "Eco-Friendly Operating Footprint",
        description:
          "Low power consumption and non-toxic byproducts eliminate hazardous waste disposal protocols.",
      },
    ],
    workflowStages: [
      {
        step: "01",
        title: "Instrument Loading & Barcode Scan",
        description:
          "Instruments placed in cassettes; barcode scan links set ID with surgical theater schedule.",
      },
      {
        step: "02",
        title: "Automated Low-Temp Plasma Cycle",
        description:
          "Deep vacuum diffusion of VH2O2 followed by RF plasma glow discharge achieving SAL 10^-6.",
      },
      {
        step: "03",
        title: "Instant Sterile Dispatch",
        description:
          "Validated sterile release with printed batch certificate, ready for immediate operating room delivery.",
      },
    ],
    architecturalPillars: [
      {
        title: "Chamber Integrity Control",
        description: "Continuous micro-pressure sensors verifying vacuum seal integrity throughout the cycle.",
      },
      {
        title: "Regulatory Compliance Logging",
        description: "Encrypted on-board flash storage storing up to 10,000 historical cycle records.",
      },
    ],
    integratedTechnologies: ["tech-sterilization-plasma"],
  },
];

export async function getAllSolutions(): Promise<ExtendedSolution[]> {
  return solutionsData;
}

export async function getSolutionBySlug(slug: string): Promise<ExtendedSolution | undefined> {
  return solutionsData.find(
    (s) =>
      s.slug === slug ||
      (slug === "integrated-operating-theatres" && s.slug === "surgical-suites") ||
      (slug === "critical-care-monitoring-systems" && s.slug === "intensive-care-telemetry") ||
      (slug === "sterile-processing-infection-control" && s.slug === "diagnostic-laboratories")
  );
}
