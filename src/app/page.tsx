import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Activity,
  Eye,
  Cpu,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  ArrowRight,
  ChevronRight,
  Building2,
  Microscope,
  Zap,
  Target,
  Award,
  Layers,
  HeartPulse,
  Crosshair,
  Settings
} from "lucide-react";
import { Container, Section, Heading, Text, Badge, Card, CardHeader, CardTitle, CardContent, Button } from "@/components/ui";
import { siteConfig } from "@/config/site";
import { HeroSlider } from "@/components/home/HeroSlider";
import { technologiesData } from "@/data/technologies";
import { solutionsData } from "@/data/solutions";

export default function HomePage() {
  // Mapping specific high-resolution assets to medical technology domains
  const techImages: Record<string, { src: string; alt: string }> = {
    "precision-telemetry": {
      src: "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg",
      alt: "Physiological telemetry monitors and precision medical biometric hardware",
    },
    "surgical-optics": {
      src: "/nappy-chyNMuYCJH8-xray.jpg",
      alt: "High-acuity surgical visualization and optical imaging arrays",
    },
    "robotic-actuation": {
      src: "/testalize-me-9xHsWmh3m_tech.jpg",
      alt: "Submillimeter robotic actuation and surgical haptic hardware",
    },
    "clinical-decontamination": {
      src: "/national-cancer-institute-GcrSgHDrniY-tech.jpg",
      alt: "Clinical laboratory diagnostic equipment and automated fluidic analyzers",
    },
  };

  const whyPillars = [
    {
      id: "precision",
      title: "Precision Engineering",
      icon: Crosshair,
      description:
        "Submillimeter manufacturing tolerances, calibrated sensory arrays, and uncompromising hardware accuracy across all clinical tiers.",
    },
    {
      id: "innovation",
      title: "Digital Innovation",
      icon: Zap,
      description:
        "Pioneering connected medical architecture, low-latency data synchronicity, and cloud-ready clinical diagnostic pipelines.",
    },
    {
      id: "reliability",
      title: "Clinical Reliability",
      icon: ShieldCheck,
      description:
        "Engineered with redundant power paths, real-time diagnostic fail-safes, and 24/7 continuous operational resilience.",
    },
    {
      id: "technology",
      title: "Advanced Technology",
      icon: Cpu,
      description:
        "Leveraging high-throughput microcontrollers, state-of-the-art optical sensors, and modular medical-grade sub-assemblies.",
    },
    {
      id: "excellence",
      title: "Healthcare Excellence",
      icon: Award,
      description:
        "Dedicated to advancing patient wellness and empowering healthcare professionals through ergonomic and reliable tools.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. HERO SLIDER */}
      <HeroSlider />

      {/* 2. INTRODUCTION SECTION */}
      <Section spacing="xl" background="default" className="relative overflow-hidden">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Imagery Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <Image
                  src="/vitaly-gariev-_zbqco3m7dA-.jpg"
                  alt="Adalbert Medical Technology clinical research and biomedical director"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg text-slate-900">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#0066CC] block">
                    Clinical Research & Engineering
                  </span>
                  <p className="text-[14.5px] font-semibold text-slate-900 mt-0.5">
                    Bridging scientific rigor with clinical instrumentation.
                  </p>
                </div>
              </div>

              {/* Offset Secondary Image (Facility / Headquarters) */}
              <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 h-44 z-20 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="/contact us building.jpg"
                  alt="Adalbert Medical Technology headquarters and laboratory facility"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>

              {/* Decorative background blur */}
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-sky-100 rounded-full blur-3xl -z-10" />
            </div>

            {/* Right Text & Corporate Overview */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="secondary">
                  Organization Overview
                </Badge>
              </div>

              <Heading level="h2" className="text-[#003B73] leading-tight">
                Pioneering Medical Technology for Modern Healthcare Systems
              </Heading>

              <Text variant="lead" className="text-slate-700">
                Adalbert Medical Technology operates state-of-the-art medical engineering and manufacturing facilities in Richmond, Vancouver, Canada. We specialize in designing, fabricating, and deploying high-precision medical hardware, telemetry systems, and surgical platforms.
              </Text>

              <Text variant="body" className="text-slate-600">
                Our mission is to elevate patient care standards and clinical productivity by delivering intuitive, dependable, and technologically advanced instrumentation. Through deep collaboration with healthcare professionals, clinical researchers, and biomedical engineers, our Canadian facility builds solutions that stand up to the most demanding hospital environments.
              </Text>

              {/* Key Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <HeartPulse className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Patient-Centric Design</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5 leading-relaxed">
                      Optimized for diagnostic fidelity and patient comfort.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Precision Manufacturing</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5 leading-relaxed">
                      Calibrated tolerances and modular hardware architectures.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button href="/about" variant="primary" size="md">
                  <span>Learn About Our Company</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  <span>Contact Our Team</span>
                </Button>
              </div>

            </div>

          </div>
        </Container>
      </Section>

      {/* 3. MEDICAL TECHNOLOGIES SECTION */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200/80">
        <Container size="xl">
          <div className="max-w-3xl mb-12">
            <Badge variant="secondary" className="mb-3">
              Core Platforms
            </Badge>
            <Heading level="h2" className="text-[#003B73]">
              Advanced Medical Technologies
            </Heading>
            <Text variant="lead" className="mt-3 text-slate-600">
              Discover our engineering platforms, spanning biometric telemetry, high-definition optical imaging, haptic robotics, and laboratory systems.
            </Text>
          </div>

          {/* 4 Rich Technology Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {technologiesData.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Thumbnail Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={tech.images.hero}
                      alt={tech.images.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-[#003B73]/90 backdrop-blur-xs text-white text-[12px] font-bold uppercase tracking-wider">
                        {tech.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-[19px] font-bold text-slate-900 group-hover:text-[#0066CC] transition-colors leading-snug">
                      {tech.title}
                    </h3>
                    <p className="text-[15px] text-slate-600 leading-relaxed">
                      {tech.summary}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <span className="text-[13px] font-bold text-slate-700 block uppercase tracking-wide">
                        Key Capabilities
                      </span>
                      <ul className="space-y-1 text-[14px] text-slate-600">
                        {tech.capabilities.slice(0, 2).map((cap) => (
                          <li key={cap.title} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#0066CC] shrink-0" />
                            <span className="truncate">{cap.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/medical-technologies/${tech.slug}`}
                    className="inline-flex items-center gap-1.5 text-[14.5px] font-bold text-[#0066CC] hover:text-[#003B73] group/link transition-colors"
                  >
                    <span>Explore Technology</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/medical-technologies" variant="primary" size="lg">
              <span>View All Medical Technologies</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Container>
      </Section>

      {/* 4. HEALTHCARE SOLUTIONS SECTION */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-3">
                Healthcare Solutions
              </Badge>
              <Heading level="h2" className="text-[#003B73]">
                Integrated Systems for High-Acuity Environments
              </Heading>
              <Text variant="lead" className="mt-2 text-slate-600">
                End-to-end medical technology packages designed to streamline hospital operations and improve clinical workflows.
              </Text>
            </div>
            <Button href="/solutions" variant="outline" size="md">
              <span>View Solutions Architecture</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* 3 Rich Solution Feature Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {solutionsData.map((sol, index) => {
              const solImages = [
                "/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg",
                "/slider1.jpg",
                "/national-cancer-institute-mBrfAiw_CZA-tech.jpg",
              ];
              const imageSrc = solImages[index % solImages.length];

              return (
                <div
                  key={sol.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                >
                  <div>
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={sol.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/80 via-[#001D3A]/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <span className="inline-block px-3 py-1 rounded-md bg-[#0066CC] text-white text-[12.5px] font-bold uppercase tracking-wider">
                          {sol.targetEnvironment}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 sm:p-7 space-y-4">
                      <h3 className="text-xl font-bold text-slate-900 leading-snug">
                        {sol.title}
                      </h3>
                      <p className="text-[16px] text-slate-600 leading-relaxed">
                        {sol.summary}
                      </p>

                      <div className="space-y-2 pt-3 border-t border-slate-100">
                        <span className="text-[13px] font-bold text-slate-700 block uppercase tracking-wider">
                          Key Clinical Benefits
                        </span>
                        <ul className="space-y-2">
                          {sol.benefits.map((b) => (
                            <li key={b.title} className="flex items-start gap-2 text-[14.5px] text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                              <div>
                                <span className="font-semibold text-slate-900">{b.title}: </span>
                                <span className="text-slate-600">{b.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 pt-0">
                    <Button href={`/solutions/${sol.slug}`} variant="secondary" size="md" className="w-full justify-between">
                      <span>Explore {sol.targetEnvironment}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 5. INNOVATION & RESEARCH SECTION (Split Editorial Layout) */}
      <Section spacing="xl" background="navy" className="bg-[#00274D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <Badge variant="primary" className="bg-sky-500/20 text-sky-300 border border-sky-400/30">
                Technology & Research
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-bold tracking-tight leading-tight">
                Pioneering Next-Generation Medical Systems & Digital Health
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed">
                At Adalbert Medical Technology, research and engineering converge to address critical challenges in clinical environments. We focus on low-latency data transmission, medical sensor miniaturization, and intelligent workflow automation.
              </Text>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-[15px]">
                    <Zap className="w-4 h-4" />
                    <span>Real-Time Biometric Processing</span>
                  </div>
                  <p className="text-[14px] text-slate-200 leading-relaxed">
                    Ultra-low latency edge processing architectures that deliver instantaneous telemetry to surgical and ICU teams.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 space-y-1">
                  <div className="flex items-center gap-2 text-sky-300 font-bold text-[15px]">
                    <Microscope className="w-4 h-4" />
                    <span>Optical & Spectroscopic Innovation</span>
                  </div>
                  <p className="text-[14px] text-slate-200 leading-relaxed">
                    Custom-engineered multi-wavelength illumination systems designed to enhance intraoperative tissue visualization.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/innovation" variant="primary" size="lg" className="bg-[#0066CC] hover:bg-[#0052A3] text-white">
                  <span>Explore Innovation Hub</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <span>Technical Papers</span>
                </Button>
              </div>
            </div>

            {/* Right Feature Image */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl aspect-[4/3]">
                <Image
                  src="/cdc-p33DqVXhWvs-u.jpg"
                  alt="Adalbert Medical Technology clinical research laboratory and biomedical engineering testing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-transparent to-transparent" />
                
                {/* Floating Highlight Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-xl">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[12px] font-bold uppercase tracking-wider text-[#0066CC]">
                      R&D Focus
                    </span>
                    <span className="text-[12px] font-semibold text-slate-500">
                      Richmond Innovation Campus
                    </span>
                  </div>
                  <h4 className="text-[16px] font-bold text-slate-900">
                    Medical Sensor & Telemetry Validation
                  </h4>
                  <p className="text-[13.5px] text-slate-600 mt-1">
                    Continuous stress-testing protocols ensuring flawless operation under extreme clinical demands.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 6. WHY ADALBERT MEDICAL TECHNOLOGY (5 PILLARS) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="max-w-3xl mx-auto text-center mb-14 space-y-3">
            <Badge variant="secondary">
              Our Core Strengths
            </Badge>
            <Heading level="h2" className="text-[#003B73]">
              Why Healthcare Leaders Choose Adalbert Medical Technology
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-2xl mx-auto">
              Our engineering philosophy is built around precision, innovation, uncompromising reliability, advanced technology, and healthcare excellence.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyPillars.map((pillar) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={pillar.id}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#0066CC] group-hover:bg-[#0066CC] group-hover:text-white transition-colors flex items-center justify-center">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-[19px] font-bold text-slate-900 group-hover:text-[#0066CC] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-[15.5px] text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-100 flex items-center text-[13.5px] font-semibold text-[#0066CC]">
                    <span>Institutional Standard</span>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Corporate Verification & Canadian Presence */}
            <div className="bg-gradient-to-br from-[#003B73] to-[#00274D] text-white p-7 rounded-2xl shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 text-sky-300 flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-[19px] font-bold text-white">
                  Richmond, Vancouver Facility
                </h3>
                <p className="text-[15.5px] text-slate-200 leading-relaxed">
                  Headquartered in Richmond, BC, supporting healthcare organizations across Canada and international clinical partners worldwide.
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/20">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[14px] font-bold text-sky-300 hover:text-white transition-colors"
                >
                  <span>Connect With Our Headquarters</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 6.5 CLINICAL DEPLOYMENT & INTEGRATION SHOWCASE (Rich Editorial Showcase) */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Visual Composition */}
            <div className="lg:col-span-6 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                  <Image
                    src="/vitaly-gariev-7Z2Xf8Bb7iM-doctors looking at results.jpg"
                    alt="Clinical diagnostic evaluation and multi-modality data analysis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold">
                    Diagnostic Analysis
                  </span>
                </div>

                <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[4/3]">
                  <Image
                    src="/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg"
                    alt="Integrated surgical suite and perioperative telemetry monitoring"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-white text-[12px] font-bold">
                    Perioperative OR
                  </span>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[12.5px] font-bold uppercase tracking-wider text-[#0066CC]">
                    Clinical Integration Guarantee
                  </span>
                  <Badge variant="teal" size="sm">
                    HL7 FHIR &amp; DICOM
                  </Badge>
                </div>
                <h4 className="text-[17px] font-bold text-[#003B73]">
                  Turnkey Hospital Network Interoperability
                </h4>
                <p className="text-[14.5px] text-slate-600 leading-relaxed">
                  Every Adalbert Medical Technology monitoring console and surgical visualization platform synchronizes directly with enterprise EMR workflows, reducing bedside administrative load.
                </p>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Institutional Reach
              </span>
              <Heading level="h2" className="text-3xl sm:text-4xl text-[#003B73] font-bold">
                Bridging Laboratory Engineering with High-Acuity Patient Care
              </Heading>
              
              <Text className="text-[17px] text-slate-700 leading-relaxed">
                From our Canadian headquarters in Richmond, BC, our engineering teams collaborate closely with hospital clinical directors, biomedical departments, and operating theatre teams across North America and international healthcare networks.
              </Text>
              
              <Text className="text-[15.5px] text-slate-600 leading-relaxed">
                We provide end-to-end technical validation, customized interface mapping for hospital IT infrastructures, and comprehensive clinical staff training to ensure frictionless adoption.
              </Text>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/solutions" variant="primary" size="md">
                  <span>Explore Hospital Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="outline" size="md">
                  <span>View System Architecture</span>
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 6.75 CANADIAN R&D FACILITY & OPERATIONS CENTER */}
      <Section spacing="xl" background="default" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-14 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Facility Operations Card */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-900">
                  <Image
                    src="/contact us building.jpg"
                    alt="Adalbert Medical Technology corporate headquarters and R&D operations facility in Richmond, BC"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/85 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0066CC] block">
                      Operations Campus
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#003B73]">
                      Richmond Operations Facility
                    </h3>
                    <p className="text-[13px] font-medium text-slate-600 mt-0.5">
                      Adalbert Medical Technology &bull; Greater Vancouver, BC
                    </p>
                  </div>
                </div>
              </div>

              {/* Facility Overview & Engineering Standards */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2">
                  <Badge variant="secondary">
                    Canadian Facility
                  </Badge>
                  <span className="text-[12px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                    Richmond R&amp;D Campus
                  </span>
                </div>

                <Heading level="h2" className="text-2xl sm:text-3xl lg:text-4xl text-[#003B73] font-bold leading-snug">
                  Advanced Biomedical Engineering &amp; Testing Infrastructure
                </Heading>

                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3 relative overflow-hidden">
                  <div className="w-1.5 h-full bg-[#0066CC] absolute left-0 top-0 bottom-0" />
                  <p className="text-[16px] sm:text-[17px] font-medium text-[#003B73] leading-relaxed pl-2">
                    Our Richmond campus houses specialized cleanroom prototyping suites, optical spectroscopic alignment benches, and multi-vector electromagnetic compatibility testing chambers operated under strict ISO 13485:2016 quality standards.
                  </p>
                  <div className="pl-2 pt-1 text-[13px] font-bold text-slate-600">
                    Operations Directorate &bull; <span className="text-slate-900">Adalbert Medical Technology Facility</span>
                  </div>
                </div>

                <Text className="text-slate-700 text-[16.5px] leading-relaxed">
                  Every medical device engineered at our facility undergoes comprehensive environmental stress testing, high-voltage electrical safety validation, and automated software burn-in before hospital delivery.
                </Text>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Button href="/about" variant="primary" size="md">
                    <span>Tour Our Facility &amp; Infrastructure</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                  <Button href="/contact" variant="outline" size="md">
                    <span>Contact Operations Center</span>
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </Section>

      {/* 7. CORPORATE CONSULTATION CTA BANNER */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="relative bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl overflow-hidden text-white shadow-2xl p-8 sm:p-12 lg:p-16">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Direct Engineering Inquiries
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
                Empower Your Clinical Teams With Advanced MedTech
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] max-w-2xl mx-auto leading-relaxed">
                Connect with the Adalbert Medical Technology engineering and clinical solutions team to discuss medical equipment integration, technical specifications, and custom deployments.
              </Text>

              {/* Direct Contact Bar */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 max-w-2xl mx-auto flex flex-wrap items-center justify-around gap-4 text-[15px] font-medium">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>{siteConfig.contact.address.display}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-sky-300 underline font-semibold">
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="bg-[#0066CC] hover:bg-[#0052A3] text-white shadow-lg"
                >
                  <span>Submit Technical Consultation Request</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button
                  href="/resources"
                  variant="white"
                  size="lg"
                  className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold"
                >
                  <span>Access Technical Documentation</span>
                </Button>
              </div>

            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
