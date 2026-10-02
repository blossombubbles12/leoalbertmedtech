import { Product } from "@/types";

export interface ExtendedProduct extends Product {
  images: {
    hero: string;
    detail: string;
    alt: string;
  };
  clinicalApplications: string[];
  keyAdvantages: {
    title: string;
    description: string;
  }[];
  maintenanceAndService: {
    title: string;
    description: string;
  }[];
}

export const productsData: ExtendedProduct[] = [
  {
    id: "prod-la-telemetry-x1",
    slug: "lat-x100-telemetry-monitor",
    name: "Leonardo Adalbert Telemetry X1 Monitor",
    modelNumber: "LAT-X100",
    category: "Monitoring Systems",
    status: "Available",
    summary:
      "Clinical-grade 12-lead portable vital telemetry monitor with optical sensor synchronization and enterprise wireless connectivity.",
    overview:
      "The LAT-X100 is engineered for high-acuity patient transport and bedside surveillance. Built with aerospace-grade active noise rejection and dual-frequency wireless transmission, it captures diagnostic-quality 12-lead ECG, SpO2, non-invasive and invasive blood pressure, and continuous core thermometry with zero dropouts.",
    images: {
      hero: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
      detail: "/slider1.jpg",
      alt: "LAT-X100 Precision Biometric Telemetry System monitor and sensor leads",
    },
    specifications: [
      {
        category: "Electrical & Signal Processing",
        items: [
          { label: "ECG Frequency Response", value: "0.05 Hz to 150 Hz (-3dB)" },
          { label: "Sampling Resolution", value: "24-bit Delta-Sigma ADC (4,000 Hz/lead)" },
          { label: "Pacemaker Detection", value: "Dual-threshold dedicated hardware circuit" },
          { label: "Defibrillation Protection", value: "5 kV Type CF Defibrillator-Proof" },
        ],
      },
      {
        category: "Display & Enclosure",
        items: [
          { label: "Display Size & Type", value: "10.4-inch Anti-Glare IPS Multi-Touch (1920x1200)" },
          { label: "Ingress Protection", value: "IPX4 Fluid & Chemical Disinfection Resistant" },
          { label: "Battery Life", value: "Up to 8.5 hours continuous telemetry on hot-swap Li-Ion" },
          { label: "Weight", value: "1.85 kg with battery and integrated transport handle" },
        ],
      },
      {
        category: "Hospital Connectivity",
        items: [
          { label: "Wireless Protocol", value: "Dual-band Wi-Fi 6 (802.11ax) + Medical Bluetooth 5.2" },
          { label: "Network Security", value: "WPA3-Enterprise with TLS 1.3 cryptographic charting" },
          { label: "EMR Interoperability", value: "Direct HL7 FHIR and DICOM export" },
        ],
      },
    ],
    features: [
      "Sub-millivolt ST segment and multi-vector arrhythmia classification",
      "Seamless roaming across enterprise hospital WLAN without packet loss",
      "Anti-microbial, chemical-resistant housing tolerant to medical-grade disinfectants",
      "One-touch nurse call and emergency alert trigger",
    ],
    keyAdvantages: [
      {
        title: "Intra-Hospital Transport Mobility",
        description: "Enables continuous real-time monitoring from emergency triage to ICU and cath labs.",
      },
      {
        title: "Smart Alarm Filtration",
        description: "Multi-parameter trend analysis reduces non-critical alarm fatigue by over 60%.",
      },
    ],
    maintenanceAndService: [
      {
        title: "Annual Calibration & Testing",
        description: "Automated digital self-calibration routines with downloadable verification reports.",
      },
      {
        title: "Canadian Engineering Support",
        description: "Direct technical support, spare parts, and loaner units dispatched from Richmond, BC.",
      },
    ],
    clinicalApplications: [
      "Intensive Care Units (ICU)",
      "Cardiac Catheterization Laboratories",
      "Emergency & Trauma Departments",
      "Post-Anesthesia Care Units (PACU)",
    ],
  },
  {
    id: "prod-la-visio-4k",
    slug: "optisurg-4k-imaging-console",
    name: "OptiSurg 4K Multispectral Surgical Visualization System",
    modelNumber: "LAV-4000",
    category: "Surgical Imaging",
    status: "Available",
    summary:
      "Multispectral 4K stereoscopic surgical visualization console featuring real-time NIR fluorescence overlay.",
    overview:
      "Designed for laparoscopic, endoscopic, and robotic-assisted surgeries, the OptiSurg LAV-4000 console provides crystal-clear anatomical boundary discrimination. By combining visible light 4K UHD resolution with indocyanine green (ICG) fluorescence at 60 frames per second, surgeons can evaluate tissue perfusion and lymph node drainage with zero perceptible latency.",
    images: {
      hero: "/nappy-chyNMuYCJH8-xray.jpg",
      detail: "/rodrigo-porto-vfy71fExF7g-advanced operation.jpg",
      alt: "OptiSurg 4K Multispectral Surgical Visualization System and endoscopic camera",
    },
    specifications: [
      {
        category: "Optics & Video Sensor",
        items: [
          { label: "Native Resolution", value: "3840 x 2160 pixels @ 60fps uncompressed" },
          { label: "Fluorescence Detection", value: "785 nm NIR Laser excitation with 830 nm optical bandpass" },
          { label: "Light Engine", value: "Solid-State Quad-Wavelength LED/Laser hybrid illumination" },
          { label: "Video Latency", value: "< 16 ms end-to-end glass-to-glass delay" },
        ],
      },
      {
        category: "Console & Video Outputs",
        items: [
          { label: "Display Outputs", value: "4x 12G-SDI, 2x HDMI 2.1, 10GbE IP Video Stream" },
          { label: "Camera Head Weight", value: "280 grams ergonomic balanced grip" },
          { label: "Sterilization", value: "Fully sealed steam autoclavable (134°C) & gas plasma" },
        ],
      },
    ],
    features: [
      "Simultaneous white-light and fluorescence picture-in-picture video output",
      "One-touch sterile field white balance, zoom, and illumination presets",
      "Multi-layer anti-fog hydrophobic sapphire front lens element",
      "Integrated 4K surgical video recording directly to hospital PACS archive",
    ],
    keyAdvantages: [
      {
        title: "Intraoperative Perfusion Assurance",
        description: "Immediate fluorescent verification of vascular anastomosis prior to procedural completion.",
      },
      {
        title: "Reduced Ocular Fatigue",
        description: "High dynamic range tone-mapping suppresses glare from wet tissue and operating lights.",
      },
    ],
    maintenanceAndService: [
      {
        title: "Light Engine Longevity",
        description: "Solid-state illumination rated for > 30,000 continuous operating hours without lamp swaps.",
      },
      {
        title: "Firmware Upgrades",
        description: "USB & network firmware update capabilities for evolving fluorescence imaging algorithms.",
      },
    ],
    clinicalApplications: [
      "Minimally Invasive Laparoscopy",
      "Hepatobiliary & Colorectal Surgery",
      "Reconstructive Microvascular Surgery",
      "Oncological Sentinel Node Dissection",
    ],
  },
  {
    id: "prod-la-plasma-sterilizer-70",
    slug: "plasmapulse-s2000-sterilizer",
    name: "PlasmaPulse S2000 Low-Temperature Decontamination Platform",
    modelNumber: "LPX-070",
    category: "Infection Control",
    status: "Available",
    summary:
      "Compact low-temperature hydrogen peroxide gas plasma sterilizer designed for delicate micro-surgical instrumentation.",
    overview:
      "The PlasmaPulse S2000 delivers rapid 28-minute sterilization turnaround for complex lumens, rigid and flexible endoscopes, and heat-sensitive robotic micro-instruments. Operating at 45°C–55°C without toxic residual chemicals, it eliminates lengthy aeration waiting periods and ensures complete SAL 10^-6 sterility assurance.",
    images: {
      hero: "/national-cancer-institute-GcrSgHDrniY-tech.jpg",
      detail: "/owen-beard-DK8jXx1B-1c-.jpg",
      alt: "PlasmaPulse S2000 Low-Temperature Gas Plasma Sterilizer chamber and control panel",
    },
    specifications: [
      {
        category: "Sterilization Cycle & Chamber",
        items: [
          { label: "Chamber Usable Volume", value: "72 Liters (Dual rectangular sliding shelves)" },
          { label: "Standard Cycle Time", value: "28 minutes (Standard) / 42 minutes (Deep Lumen)" },
          { label: "Operating Temperature", value: "48°C ± 3°C (118°F)" },
          { label: "Sterility Assurance Level", value: "SAL 10^-6 validated via Geobacillus stearothermophilus" },
        ],
      },
      {
        category: "Utilities & Dimensions",
        items: [
          { label: "Power Requirements", value: "208–240 VAC, 50/60 Hz, Single Phase 16A" },
          { label: "Exhaust / Ventilation", value: "Zero external ductwork required (Internal catalytic converter)" },
          { label: "Unit Dimensions", value: "85 cm (W) x 78 cm (D) x 165 cm (H)" },
        ],
      },
    ],
    features: [
      "Zero water hookups or external ventilation ductwork required",
      "Automatic RFID cassette recognition and precise sterilant dose verification",
      "Integrated biological indicator incubator port with automated readout",
      "Encrypted digital batch recording with printed cryptographic verification tickets",
    ],
    keyAdvantages: [
      {
        title: "Immediate Instrument Availability",
        description: "Zero aeration waiting time; instruments are dry and cool for immediate surgical redeployment.",
      },
      {
        title: "Delicate Instrument Protection",
        description: "Preserves delicate optical bonding agents and micro-electronic sensors from steam degradation.",
      },
    ],
    maintenanceAndService: [
      {
        title: "Catalytic Exhaust Filter",
        description: "Long-life catalytic converter with automated efficiency self-checks.",
      },
      {
        title: "On-Site Preventive Maintenance",
        description: "Annual vacuum pump seal inspections and sensor recalibration by certified technicians.",
      },
    ],
    clinicalApplications: [
      "Central Sterile Supply Departments (CSSD)",
      "Operating Room Rapid Turnover Stations",
      "Ambulatory Surgical Centers",
      "Endoscopy & Ophthalmic Specialty Suites",
    ],
  },
];

export async function getAllProducts(): Promise<ExtendedProduct[]> {
  return productsData;
}

export async function getProductBySlug(slug: string): Promise<ExtendedProduct | undefined> {
  return productsData.find(
    (p) =>
      p.slug === slug ||
      (slug === "la-telemetry-x1-monitor" && p.slug === "lat-x100-telemetry-monitor") ||
      (slug === "la-visio-4k-endoscopic-tower" && p.slug === "optisurg-4k-imaging-console") ||
      (slug === "la-plazmax-70-sterilizer" && p.slug === "plasmapulse-s2000-sterilizer")
  );
}
