import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { solutionsData } from "@/data/solutions";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Building2,
  Activity,
  Layers,
  Phone,
  MapPin,
  Sparkles,
  Award
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Clinical Solutions | Integrated Healthcare Environments",
  description:
    "Explore integrated clinical and surgical solutions engineered for hospital operating theatres, intensive care wards, and diagnostic laboratories by Leonardo Adalbert Medical Technology.",
  canonicalUrlRelative: "/solutions",
});

export default function SolutionsPage() {
  const integrationPillars = [
    {
      title: "Operating Theatres",
      description: "Cable-free sterile corridors with uncompressed 4K video switching.",
      icon: Activity,
    },
    {
      title: "Intensive Care Telemetry",
      description: "Continuous 64-bed surveillance with false-alarm mitigation algorithms.",
      icon: Layers,
    },
    {
      title: "Diagnostic Labs & CSSD",
      description: "Low-temperature 28-min plasma sterilization with automated traceability.",
      icon: Sparkles,
    },
    {
      title: "Hospital EMR Interoperability",
      description: "Direct bidirectional HL7 FHIR bridges for automated vitals charting.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb items={[{ name: "Solutions", url: "/solutions" }]} />
          <div className="mt-6 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary">
                Clinical Architecture
              </Badge>
              <span className="text-[12px] font-mono font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                Hospital Systems Integration
              </span>
            </div>
            <Heading level="h1" className="text-[#003B73] text-3xl sm:text-4xl lg:text-5xl">
              Integrated Systems for High-Acuity Healthcare
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-3xl">
              End-to-end medical systems engineering optimized for high-demand surgical suites, intensive care surveillance, and automated sterile processing environments.
            </Text>
          </div>
        </Container>
      </Section>

      {/* 2. Solutions Pillar Strip */}
      <Section spacing="md" background="default" className="border-b border-slate-100">
        <Container size="xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-xs text-[#0066CC] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-[16px] font-bold text-slate-900">{pillar.title}</h3>
                  </div>
                  <p className="text-[13.5px] text-slate-600 leading-relaxed pt-1">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Deep Solutions Showcase (Full-Width Rich Cards) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="space-y-20">
            {solutionsData.map((sol, index) => (
              <div
                key={sol.id}
                id={sol.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Imagery Showcase */}
                  <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900 flex flex-col justify-between p-6">
                    <Image
                      src={sol.images.hero}
                      alt={sol.images.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
                    
                    <div className="relative z-10">
                      <span className="px-3.5 py-1.5 rounded-lg bg-[#0066CC] text-white text-[12.5px] font-bold uppercase tracking-wider shadow-md">
                        {sol.targetEnvironment}
                      </span>
                    </div>

                    <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300 block">
                        Clinical Environment
                      </span>
                      <p className="text-[14px] font-bold text-white mt-0.5">
                        {sol.headline}
                      </p>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC] block">
                          Architectural Solution
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B73] mt-1">
                          {sol.title}
                        </h2>
                      </div>
                      <Badge variant="teal" size="sm" className="self-start sm:self-auto">
                        Turnkey Architecture
                      </Badge>
                    </div>

                    <p className="text-[17px] text-slate-700 leading-relaxed">
                      {sol.overview}
                    </p>

                    {/* Subsystems & Advantages Grid */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[13px] font-bold uppercase tracking-wider text-slate-700 block">
                        Subsystems & Architectural Advantages
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {sol.subsystems.slice(0, 4).map((sub, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                          >
                            <div className="flex items-center gap-2 text-[14.5px] font-bold text-[#003B73]">
                              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                              <span>{sub.title}</span>
                            </div>
                            <p className="text-[13px] text-slate-600 leading-relaxed">
                              {sub.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action & Detail Link */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-[13.5px] text-slate-600 font-medium">
                        Modular Hospital Integration
                      </span>
                      <Button
                        href={`/solutions/${sol.slug}`}
                        variant="primary"
                        size="md"
                        className="bg-[#0066CC] hover:bg-[#0052A3]"
                      >
                        <span>Explore {sol.title}</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Full-Width Corporate Consultation Banner */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Hospital Procurement & Integration
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Plan a Clinical Systems Deployment for Your Hospital
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Our solutions engineering group in Richmond, BC assists hospital directors, clinical engineers, and surgical teams with turnkey equipment planning and workflow optimization.
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
                  <span>Request Solution Architecture Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Download Integration Guides</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
