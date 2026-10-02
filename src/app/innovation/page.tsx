import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { Cpu, Zap, Microscope, ShieldCheck, ArrowRight, CheckCircle2, Activity, Layers, Sparkles, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Innovation & Digital Health | Biomedical R&D Headquarters Richmond, BC",
  description:
    "Explore how Adalbert Medical Technology advances healthcare through digital telemetry, surgical robotics, and biomedical research in Richmond, Vancouver, Canada.",
  canonicalUrlRelative: "/innovation",
});

export default function InnovationPage() {
  const innovationPillars = [
    {
      title: "Real-Time Edge Telemetry",
      description: "Custom low-latency firmware pipelines capable of multi-channel biometric signal acquisition with microsecond timestamp fidelity across acute care beds.",
      icon: Activity,
    },
    {
      title: "Bio-Robotic Actuation",
      description: "Submillimeter motion control systems designed to assist surgical teams with physiological tremor suppression and precise instrument guidance.",
      icon: Cpu,
    },
    {
      title: "Multispectral Surgical Optics",
      description: "Specialized optical arrays combining visible spectrum 4K imaging with near-infrared fluorescence for deep anatomical margin differentiation.",
      icon: Microscope,
    },
    {
      title: "Connected Clinical Interoperability",
      description: "Secure, ISO 27001-compliant hardware bridges enabling instant telemetry synchronization across enterprise electronic medical record systems.",
      icon: Zap,
    },
  ];

  const engineeringPhases = [
    {
      step: "01",
      title: "Clinical Need Identification",
      desc: "Our Richmond biomedical team works directly alongside operating room surgeons and ICU intensivists to identify acute workflow bottlenecks.",
    },
    {
      step: "02",
      title: "Rapid Prototyping & Stress Testing",
      desc: "In-house CNC machining, optical sensor calibration, and thermal stress-testing ensure submillimeter mechanical precision.",
    },
    {
      step: "03",
      title: "Regulatory Validation & Deployment",
      desc: "Comprehensive testing under ISO 13485:2016, IEC 60601-1 electrical safety standards, and Health Canada medical device licensing guidelines.",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero with Gradient & Image */}
      <PageHeader
        title="Innovation in Medical Technology & Biomedical Engineering"
        description="Pioneering connected medical devices, intelligent physiological telemetry, and advanced robotic-assisted surgical instrumentation engineered in Richmond, Vancouver, Canada."
        breadcrumbItems={[{ name: "Innovation", url: "/innovation" }]}
        badge="Research & Digital Health"
        badgeTag="Richmond R&D Hub"
        imageSrc="/national-cancer-institute-GcrSgHDrniY-tech.jpg"
        imageAlt="Innovation in Medical Technology & Biomedical Engineering"
      />

      {/* 2. Hero Showcase Section */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Applied Clinical Engineering
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Transforming High-Acuity Care Through Deep Tech
              </Heading>
              <Text className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                At Adalbert Medical Technology, innovation is guided by practical clinical requirements. We engineer hardware and embedded software that improve diagnostic accuracy and streamline operating room workflows.
              </Text>
              <Text className="text-[16px] text-slate-600 leading-relaxed">
                Our Richmond R&D center conducts rapid prototyping, electromechanical stress-testing, and algorithmic signal validation to ensure every system achieves clinical-grade dependability before hospital deployment.
              </Text>

              <div className="space-y-3 pt-2">
                {[
                  "Microsecond latency telemetry for acute continuous monitoring",
                  "Optical spectral filtering for real-time tissue perfusion clarity",
                  "Bidirectional FHIR / HL7 clinical informatics synchronization",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-[15px] font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="/contact" variant="primary" size="md">
                  <span>Collaborate With R&D</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/research" variant="outline" size="md">
                  <span>View Scientific Studies</span>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <Image
                  src="/cdc-p33DqVXhWvs-u.jpg"
                  alt="Adalbert Medical Technology clinical research laboratory and sensor testing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. 4 Pillars Grid (Dark Navy) */}
      <Section spacing="xl" background="navy" className="bg-[#00274D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <Badge variant="primary" className="bg-sky-500/20 text-sky-300 border border-sky-400/30">
              R&D Focus Areas
            </Badge>
            <Heading level="h2" className="text-white text-3xl sm:text-4xl">
              Core Engineering Vectors
            </Heading>
            <Text className="text-slate-200 text-[17px]">
              Discover our primary research vectors powering next-generation clinical hardware and surgical infrastructure.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {innovationPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/15 space-y-4 hover:bg-white/15 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-[15.5px] text-slate-200 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 4. Engineering Lifecycle (Split with Secondary Image) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <Image
                  src="/owen-beard-DK8jXx1B-1c-.jpg"
                  alt="Adalbert Medical Technology biomedical engineering prototyping and calibration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Engineering Methodology
              </span>
              <Heading level="h2" className="text-[#003B73]">
                From Bench to Bedside: Precision Lifecycle
              </Heading>
              <Text className="text-[17px] text-slate-700 leading-relaxed">
                Our multidisciplinary team of electrical engineers, optical physicists, and software architects follows a rigorous development lifecycle designed for critical patient safety.
              </Text>

              <div className="space-y-4 pt-2">
                {engineeringPhases.map((phase) => (
                  <div
                    key={phase.step}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono font-bold text-white bg-[#0066CC] px-2.5 py-0.5 rounded-full">
                        {phase.step}
                      </span>
                      <h4 className="text-[16px] font-bold text-[#003B73]">{phase.title}</h4>
                    </div>
                    <p className="text-[14.5px] text-slate-600 leading-relaxed pl-8">
                      {phase.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 5. Full-Width Consultation Banner */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Academic & Clinical Partnerships
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Partner With Adalbert Medical Technology R&D
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                We collaborate with university medical centers, research hospitals, and clinical trial groups across Canada and internationally to validate innovative biomedical technologies.
              </Text>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-wrap items-center justify-around gap-4 text-[15px] font-medium max-w-2xl mx-auto">
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

              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg" className="bg-[#0066CC] hover:bg-[#0052A3] text-white shadow-lg">
                  <span>Initiate Research Partnership</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/research" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Explore Publications</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

