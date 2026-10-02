import { TechnologyPlatform } from "@/types";

export interface ExtendedTechnologyPlatform extends TechnologyPlatform {
  images: {
    hero: string;
    diagram?: string;
    clinical: string;
    alt: string;
  };
  architectureOverview: string;
  engineeringHighlights: {
    title: string;
    description: string;
    iconName?: string;
  }[];
  specificationsTable: {
    category: string;
    parameters: { label: string; value: string }[];
  }[];
  clinicalWorkflowBenefits: {
    title: string;
    description: string;
  }[];
  complianceStandards: string[];
}

export const technologiesData: ExtendedTechnologyPlatform[] = [
  {
    id: "tech-optiwave",
    slug: "precision-biometric-telemetry",
    title: "Precision Biometric Telemetry",
    headline: "Real-Time Multiparameter Clinical Monitoring Architecture",
    summary:
      "High-frequency physiological signal acquisition delivering continuous, artifact-filtered cardiac and hemodynamic telemetry with microsecond synchronization.",
    category: "Monitoring & Diagnostics",
    featured: true,
    images: {
      hero: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
      clinical: "/slider1.jpg",
      alt: "LAT-X100 physiological telemetry monitors and patient biometric arrays",
    },
    architectureOverview:
      "The Precision Biometric Telemetry platform is engineered for intensive care units, cardiac cath labs, and perioperative suites where physiological signal stability is non-negotiable. Using 24-bit analog-to-digital converters combined with proprietary active common-mode rejection circuitry, the platform captures high-fidelity biopotential and hemodynamic waves even in the presence of intense electrocautery RF interference.",
    engineeringHighlights: [
      {
        title: "Adaptive Common-Mode Rejection (>120 dB)",
        description:
          "Advanced active isolation transformers and digital noise-cancellation filters suppress electrosurgical and 60Hz ambient power grid interference.",
      },
      {
        title: "Unified Optical Bus Architecture",
        description:
          "Fiber-optic galvanic isolation ensures patient safety while enabling high-bandwidth multiplexing of up to 32 concurrent physiological channels.",
      },
      {
        title: "Sub-Millisecond Edge Timestamping",
        description:
          "Hardware-synchronized clock generators stamp every cardiac sample with microsecond precision for multi-lead wave correlation.",
      },
      {
        title: "Predictive Hemodynamic Trend Engine",
        description:
          "Embedded firmware algorithms track pulse transit times and heart rate variability to highlight early clinical deterioration markers.",
      },
    ],
    capabilities: [
      {
        title: "Sub-Millivolt Signal Resolution",
        description:
          "Adaptive digital filtering algorithms that eliminate ambient RF and motion artifacts in high-density clinical environments.",
        specs: { "Sampling Rate": "24-bit / 4kHz", CMRR: "> 120 dB", Latency: "< 12 ms" },
      },
      {
        title: "Multiparametric Sensor Fusion",
        description:
          "Simultaneous acquisition of 12-lead ECG, SpO2, invasive blood pressure, and continuous core thermometry through unified optical bus.",
        specs: { Channels: "Up to 32 concurrent channels", Interoperability: "HL7 / FHIR / DICOM" },
      },
      {
        title: "Predictive Hemodynamic Trend Analysis",
        description:
          "Embedded edge computing engine analyzing early physiological decompensation markers before overt clinical threshold breaches.",
      },
    ],
    specificationsTable: [
      {
        category: "Signal Processing & Acquisition",
        parameters: [
          { label: "A/D Resolution", value: "24-bit Delta-Sigma Conversion" },
          { label: "Internal Sampling Rate", value: "4,000 samples/sec per lead" },
          { label: "Common Mode Rejection", value: "> 120 dB at 50/60 Hz" },
          { label: "Input Dynamic Range", value: "± 500 mV differential" },
        ],
      },
      {
        category: "Connectivity & Standards",
        parameters: [
          { label: "Hospital Network Interface", value: "Dual Isolated Gigabit Ethernet + Wi-Fi 6" },
          { label: "Protocol Compliance", value: "HL7 FHIR / DICOM / IEEE 11073" },
          { label: "Patient Isolation", value: "5 kVrms Galvanic Isolation (Type CF Defibrillation-Proof)" },
        ],
      },
    ],
    clinicalWorkflowBenefits: [
      {
        title: "Continuous Patient Telemetry During Transport",
        description:
          "Seamless transition between bedside consoles and wireless mobile telemetry without data dropouts or lead reconfigurations.",
      },
      {
        title: "Reduced Alarm Fatigue",
        description:
          "Multi-parameter smart alarm logic requires multi-vector confirmation before triggering audible high-priority nurse station alerts.",
      },
      {
        title: "Direct EMR Synchronicity",
        description:
          "Automated vitals charting directly into hospital information systems, reducing administrative charting overhead.",
      },
    ],
    complianceStandards: [
      "Type CF Defibrillation-Proof Isolation",
      "Electromagnetic Immunity in High-Acuity OR",
      "HL7 FHIR Medical Data Interoperability",
    ],
    clinicalApplications: [
      "Intensive Care Units (ICU / CCU)",
      "Cardiovascular Surgical Suites",
      "Emergency Trauma Centers",
      "Post-Anesthesia Care Units (PACU)",
    ],
  },
  {
    id: "tech-surgical-optics",
    slug: "quantum-spectrum-surgical-imaging",
    title: "Quantum-Spectrum Surgical Imaging",
    headline: "Ultra-High Definition Multispectral Endoscopic Visualization",
    summary:
      "Proprietary optical sensor architecture integrating narrow-band fluoroscopy and 4K stereoscopic 3D rendering for microvascular discrimination.",
    category: "Surgical Systems",
    featured: true,
    images: {
      hero: "/pusen-medical-82GMjgM7qjA-.jpg",
      clinical: "/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg",
      alt: "Quantum-Spectrum Surgical Optics and 4K endoscopy visualization consoles",
    },
    architectureOverview:
      "Designed for complex laparoscopic and open surgical interventions, the Quantum-Spectrum optical array combines custom ultra-low-dispersion prism splitters with dual CMOS sensors. By imaging both the visible spectrum (400–700nm) and the near-infrared band (700–900nm) simultaneously, surgeons receive true-color tissue visualization alongside real-time fluorescent perfusion overlays at a latency undetectable to the human eye.",
    engineeringHighlights: [
      {
        title: "Simultaneous Visible & NIR Beam Splitting",
        description:
          "Dichroic multi-layer coatings separate optical wavelengths with zero chromatic aberration or optical parallax.",
      },
      {
        title: "4K Stereoscopic 3D Depth Engine",
        description:
          "Dual-axis matched optics produce realistic anatomical depth perception essential for delicate micro-dissection.",
      },
      {
        title: "Hydrophobic Sapphire Distal Lenses",
        description:
          "Autoclavable sapphire front elements featuring anti-fog heating elements and anti-reflective fluoropolymer coatings.",
      },
      {
        title: "Dynamic Plume & Glare Reduction",
        description:
          "Real-time HDR spatial tone mapping automatically suppresses specular reflections from wet tissue and surgical lighting.",
      },
    ],
    capabilities: [
      {
        title: "Indocyanine Green (ICG) Near-Infrared Mapping",
        description:
          "Real-time overlay of tissue perfusion and lymphatic pathways directly onto the operative field at 60 fps.",
        specs: { "Wavelength Band": "700nm - 900nm NIR", "Dynamic Range": "16-bit per channel" },
      },
      {
        title: "Sub-Millimeter Depth Perception",
        description:
          "Dual-sensor stereoscopic optical assembly with automated focus tracking and intraoperative depth calibration.",
      },
      {
        title: "Glare Suppression & Autoclavable Optics",
        description:
          "Multi-layer nano-coated sapphire lenses resistant to steam sterilization and surgical plume obstruction.",
      },
    ],
    specificationsTable: [
      {
        category: "Optical & Imaging Parameters",
        parameters: [
          { label: "Sensor Configuration", value: "Dual 4K UHD CMOS (3840 x 2160 native per eye)" },
          { label: "Frame Rate", value: "60 fps uncompressed progressive scan" },
          { label: "Fluorescence Detection", value: "785 nm excitation / 830 nm peak emission" },
          { label: "Video Latency", value: "< 16 ms end-to-end processing" },
        ],
      },
      {
        category: "Physical & Mechanical",
        parameters: [
          { label: "Sterilization Compatibility", value: "Autoclavable (134°C steam) & Low-temp plasma" },
          { label: "Outer Diameter", value: "5.5 mm / 10 mm modular rigid endoscopes" },
          { label: "Housing Material", value: "Biocompatible Titanium alloy & Sapphire" },
        ],
      },
    ],
    clinicalWorkflowBenefits: [
      {
        title: "Immediate Vascular Perfusion Assessment",
        description:
          "Enables surgeons to evaluate anastomotic perfusion and tissue viability in real time prior to wound closure.",
      },
      {
        title: "Enhanced Sentinel Lymph Node Identification",
        description:
          "Precise lymphatic drainage mapping reduces dissection margins and protects adjacent critical structures.",
      },
      {
        title: "Ergonomic Surgeon Workstation",
        description:
          "High-contrast polarized 3D monitors reduce ocular strain during extended multi-hour procedures.",
      },
    ],
    complianceStandards: [
      "Surgical Endoscopy Optical Standards",
      "Biocompatible Invasive Classification",
      "Low Latency Video Processing Protocol",
    ],
    clinicalApplications: [
      "Minimally Invasive Laparoscopy",
      "Oncological Margin Resection",
      "Microvascular & Plastic Reconstruction",
      "Neurosurgical Guidance",
    ],
  },
  {
    id: "tech-robotics-actuation",
    slug: "haptic-submillimeter-actuation",
    title: "Haptic Submillimeter Actuation",
    headline: "High-Dexterity Robotic Manipulation & Force-Feedback Framework",
    summary:
      "Precision electromechanical robotic kinematics delivering sub-50-micron positional repeatability and tactile resistance transmission for complex interventions.",
    category: "Robotics & Hardware",
    featured: true,
    images: {
      hero: "/testalize-me-9xHsWmh3m_tech.jpg",
      clinical: "/national-cancer-institute-mBrfAiw_CZA-tech.jpg",
      alt: "Haptic Submillimeter Actuation kinematic joints and robotic arm manipulator",
    },
    architectureOverview:
      "The Haptic Submillimeter Actuation system delivers fine motor control for microsurgical navigation and delicate tissue manipulation. Engineered with coreless brushless servomotors, zero-backlash harmonic drive reducers, and multi-axis strain gauge arrays, the platform translates surgeon hand movements into micro-movements while reflecting tissue elasticity back to the control console.",
    engineeringHighlights: [
      {
        title: "Sub-50 Micron Repeatability",
        description:
          "Ultra-high-resolution optical rotary encoders provide 22-bit positional feedback per articulating degree of freedom.",
      },
      {
        title: "Micro-Force Haptic Reflection",
        description:
          "Multi-axis force/torque sensors at the instrument tip measure tactile resistances down to 0.05 Newtons.",
      },
      {
        title: "Active Tremor Attenuation (>95%)",
        description:
          "Predictive Kalman filtering isolates and cancels involuntary physiological hand tremor (6–12 Hz band).",
      },
      {
        title: "Magnetic Sterile Barrier Coupling",
        description:
          "Contactless magnetic torque transmission across a sterile drape enables rapid tool swaps without compromising sterile integrity.",
      },
    ],
    capabilities: [
      {
        title: "Active Tremor Compensation",
        description:
          "Microsecond sensor-loop cancellation of physiological hand tremors without perceptible control latency.",
        specs: { "Positional Accuracy": "± 25 µm", "Degrees of Freedom": "7-DOF per arm" },
      },
      {
        title: "Dynamic Force Reflection",
        description:
          "Bilateral haptic sensors transferring micro-elastic tissue resistance back to the surgeon console.",
      },
      {
        title: "Modular Instrument Coupling",
        description:
          "Magnetic sterile drape pass-through allowing sub-15-second sterile tool interchanges in theatre.",
      },
    ],
    specificationsTable: [
      {
        category: "Kinematics & Motion Control",
        parameters: [
          { label: "Positional Repeatability", value: "± 25 microns (0.025 mm)" },
          { label: "Degrees of Freedom", value: "7-DOF articulation + instrument tip rotation" },
          { label: "Kinematic Control Loop", value: "1,000 Hz real-time motion controller" },
          { label: "Tremor Cancellation", value: "> 95% attenuation in 6–12 Hz frequency band" },
        ],
      },
      {
        category: "Haptic Sensing & Safety",
        parameters: [
          { label: "Force Sensitivity", value: "0.05 N to 15 N dynamic range" },
          { label: "Sterile Interface", value: "Non-contact magnetic pass-through coupling" },
          { label: "Failsafe Emergency Hold", value: "< 2 ms mechanical brake engagement" },
        ],
      },
    ],
    clinicalWorkflowBenefits: [
      {
        title: "Enhanced Surgical Precision in Deep Cavities",
        description:
          "Enables delicate dissection and vascular suturing in anatomical areas with restricted line-of-sight.",
      },
      {
        title: "Surgeon Fatigue Mitigation",
        description:
          "Ergonomically neutral operating console reduces physical fatigue during complex multi-hour procedures.",
      },
      {
        title: "Rapid Sterile Setup",
        description:
          "Intuitive magnetic drape adapters reduce operating room setup time to under 8 minutes.",
      },
    ],
    complianceStandards: [
      "Robotic Medical Device Safety Systems",
      "Real-Time Hardware Fault Containment",
      "Sterile Surgical Boundary Architecture",
    ],
    clinicalApplications: [
      "Microsurgery & Neurovascular Coiling",
      "Orthopedic Joint Resurfacing",
      "Endovascular Catheter Navigation",
    ],
  },
  {
    id: "tech-sterilization-plasma",
    slug: "low-temperature-plasma-sterilization",
    title: "Low-Temperature Plasma Sterilization",
    headline: "Rapid Cold-Plasma Decontamination for Temperature-Sensitive Devices",
    summary:
      "Vaporized hydrogen peroxide combined with reactive oxygen species gas plasma to achieve complete 10^-6 SAL sterility without thermal degradation.",
    category: "Sterilization & Infection Control",
    featured: false,
    images: {
      hero: "/national-cancer-institute-GcrSgHDrniY-tech.jpg",
      clinical: "/vitaly-gariev-7Z2Xf8Bb7iM-doctors looking at results.jpg",
      alt: "Low-Temperature Gas Plasma Sterilization laboratory chamber and fluidic modules",
    },
    architectureOverview:
      "Modern surgical instruments incorporate delicate optical lenses, microelectronics, and elastomeric seals that cannot tolerate high-temperature steam autoclaves. The Low-Temperature Plasma platform utilizes low-pressure vaporized hydrogen peroxide (VH2O2) followed by radio-frequency gas plasma excitation. This process neutralizes all bacterial spores, viruses, and fungi at 45°C–55°C, leaving only harmless water vapor and oxygen.",
    engineeringHighlights: [
      {
        title: "Radio-Frequency Glow Discharge Plasma",
        description:
          "Generates reactive free radicals that break down microorganism DNA/RNA and cell membranes at low thermal thresholds.",
      },
      {
        title: "Rapid 28-Minute Terminal Cycle",
        description:
          "High-vacuum extraction and active catalytic converters eliminate the lengthy multi-hour aeration cycles required by ethylene oxide (EtO).",
      },
      {
        title: "Non-Corrosive Deep Lumen Penetration",
        description:
          "Proprietary deep-vacuum diffusion pulses achieve SAL 10^-6 inside narrow flexible endoscopes up to 2,000 mm in length.",
      },
      {
        title: "Eco-Friendly Catalytic Discharge",
        description:
          "Zero hazardous effluent; all residual sterilant converts into non-toxic water and breathable atmospheric oxygen.",
      },
    ],
    capabilities: [
      {
        title: "Short-Cycle Turnaround",
        description:
          "Comprehensive sterilization of flexible lumens and electronic micro-instruments in under 28 minutes.",
        specs: { "Operating Temp": "45°C - 55°C", "Sterility Assurance Level": "SAL 10^-6" },
      },
      {
        title: "Non-Toxic Byproducts",
        description:
          "Zero aeration requirement, converting reactive plasma into water vapor and atmospheric oxygen.",
      },
    ],
    specificationsTable: [
      {
        category: "Sterilization Cycle Parameters",
        parameters: [
          { label: "Process Temperature", value: "45°C to 55°C (113°F to 131°F)" },
          { label: "Cycle Duration", value: "28 minutes (standard) / 42 minutes (deep lumen)" },
          { label: "Sterility Assurance Level", value: "SAL 10^-6 (Biological indicator validation)" },
          { label: "Sterilant Agent", value: "High-purity Vaporized H2O2 + RF Gas Plasma" },
        ],
      },
      {
        category: "Chamber & Utilities",
        parameters: [
          { label: "Chamber Capacity", value: "120 Liters usable volume (Dual sliding shelves)" },
          { label: "Aeration Requirement", value: "0 minutes (Immediate instrument availability)" },
          { label: "Ventilation Requirements", value: "No dedicated external exhaust ducting needed" },
        ],
      },
    ],
    clinicalWorkflowBenefits: [
      {
        title: "Rapid Operating Room Instrument Turnover",
        description:
          "Enables multiple procedures per day with a single high-value endoscopic surgical set.",
      },
      {
        title: "Extended Instrument Longevity",
        description:
          "Eliminates thermal degradation and moisture oxidation on delicate optical adhesives and micro-circuitry.",
      },
      {
        title: "Safe for CSSD Operating Personnel",
        description:
          "Completely enclosed cassette sterilant delivery with zero toxic emissions or exposure risks.",
      },
    ],
    complianceStandards: [
      "Low-Temperature Vaporized Sterilization Protocols",
      "Biological Indicator Verification Framework",
      "Infection Prevention Architecture",
    ],
    clinicalApplications: [
      "Central Sterile Services (CSSD)",
      "Operating Theatre Turnaround",
      "Ambulatory Surgical Clinics",
      "Ophthalmic & Micro-Endoscopy Units",
    ],
  },
];

export async function getAllTechnologies(): Promise<ExtendedTechnologyPlatform[]> {
  return technologiesData;
}

export async function getTechnologyBySlug(slug: string): Promise<ExtendedTechnologyPlatform | undefined> {
  return technologiesData.find(
    (t) =>
      t.slug === slug ||
      (slug === "precision-telemetry" && t.slug === "precision-biometric-telemetry") ||
      (slug === "surgical-optics" && t.slug === "quantum-spectrum-surgical-imaging") ||
      (slug === "robotic-actuation" && t.slug === "haptic-submillimeter-actuation") ||
      (slug === "clinical-decontamination" && t.slug === "low-temperature-plasma-sterilization")
  );
}
