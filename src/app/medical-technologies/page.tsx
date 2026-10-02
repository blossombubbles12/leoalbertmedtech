import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { technologiesData } from "@/data/technologies";
import { siteConfig } from "@/config/site";
import {
  Activity,
  Eye,
  Cpu,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Microscope,
  Phone,
  MapPin,
  FileText,
  Sliders
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Medical Technologies | Proprietary Healthcare Platforms",
  description:
    "Explore proprietary medical technology platforms engineered by Leonardo Adalbert Medical Technology, spanning biometric telemetry, surgical optics, haptic robotics, and cold plasma sterilization.",
  canonicalUrlRelative: "/medical-technologies",
});

export default function MedicalTechnologiesPage() {
  const platformPillars = [
    {
      title: "Biometric Telemetry",
      description: "Sub-millivolt continuous cardiac and hemodynamic signal acquisition.",
      icon: Activity,
    },
    {
      title: "Surgical Optical Arrays",
      description: "4K stereoscopic imaging combined with real-time NIR tissue fluoroscopy.",
      icon: Eye,
    },
    {
      title: "Haptic Micro-Robotics",
      description: "Sub-50-micron kinematics with bilateral force feedback and tremor attenuation.",
      icon: Cpu,
    },
    {
      title: "Gas Plasma Decontamination",
      description: "Low-temperature 28-minute cold plasma cycle with zero toxic effluent.",
      icon: Sparkles,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb items={[{ name: "Medical Technologies", url: "/medical-technologies" }]} />
          <div className="mt-6 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary">
                Engineering Architecture
              </Badge>
              <span className="text-[12px] font-mono font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                Richmond R&D Hub
              </span>
            </div>
            <Heading level="h1" className="text-[#003B73] text-3xl sm:text-4xl lg:text-5xl">
              Proprietary Medical Technologies & Hardware Platforms
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-3xl">
              Engineered with submillimeter tolerances, low-latency firmware, and robust galvanic isolation to meet the exacting demands of modern operating suites, intensive care units, and clinical research facilities.
            </Text>
          </div>
        </Container>
      </Section>

      {/* 2. Platform Pillars Overview Strip */}
      <Section spacing="md" background="default" className="border-b border-slate-100">
        <Container size="xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformPillars.map((pillar) => {
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

      {/* 3. Deep Platform Showcase Cards */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="space-y-20">
            {technologiesData.map((tech, idx) => (
              <div
                key={tech.id}
                id={tech.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Imagery Showcase */}
                  <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900 flex flex-col justify-between p-6">
                    <Image
                      src={tech.images.hero}
                      alt={tech.images.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
                    
                    {/* Top Tag */}
                    <div className="relative z-10">
                      <span className="px-3.5 py-1.5 rounded-lg bg-[#003B73]/95 backdrop-blur-md text-white text-[12.5px] font-bold uppercase tracking-wider shadow-md">
                        {tech.category}
                      </span>
                    </div>

                    {/* Bottom Specs Pill */}
                    <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-sky-300 block">
                        Architecture Focus
                      </span>
                      <p className="text-[13.5px] text-slate-100 font-semibold mt-0.5">
                        {tech.headline}
                      </p>
                    </div>
                  </div>

                  {/* Right Detailed Platform Content */}
                  <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6">
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC] block">
                          Platform Dossier
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B73] mt-1">
                          {tech.title}
                        </h2>
                      </div>
                      {tech.featured && (
                        <Badge variant="teal" size="sm" className="self-start sm:self-auto">
                          Core Hardware
                        </Badge>
                      )}
                    </div>

                    <p className="text-[17px] text-slate-700 leading-relaxed">
                      {tech.architectureOverview}
                    </p>

                    {/* Engineering Highlights Grid */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[13px] font-bold uppercase tracking-wider text-slate-700 block">
                        Key Subsystem Capabilities
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {tech.engineeringHighlights.slice(0, 4).map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                          >
                            <div className="flex items-center gap-2 text-[14.5px] font-bold text-[#003B73]">
                              <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                              <span>{highlight.title}</span>
                            </div>
                            <p className="text-[13px] text-slate-600 leading-relaxed">
                              {highlight.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Clinical Deployments & Action Buttons */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex flex-wrap items-center gap-1.5 text-[13px] text-slate-600">
                        <span className="font-semibold text-slate-800">Target Environments:</span>
                        {tech.clinicalApplications?.slice(0, 3).map((app) => (
                          <span
                            key={app}
                            className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-[12px] font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3">
                        <Button
                          href={`/medical-technologies/${tech.slug}`}
                          variant="primary"
                          size="md"
                          className="bg-[#0066CC] hover:bg-[#0052A3]"
                        >
                          <span>Full Specifications</span>
                          <ArrowRight className="w-4 h-4 ml-1.5" />
                        </Button>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Cross-Platform Specifications Matrix */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <Badge variant="secondary">
              Comparative Analysis
            </Badge>
            <Heading level="h2" className="text-[#003B73]">
              Platform Engineering Specifications Matrix
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Overview of core parameters, signal integrity thresholds, and clinical deployment vectors.
            </Text>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#00274D] text-white text-[13.5px] font-bold">
                  <th className="p-4 sm:p-5">Technology Platform</th>
                  <th className="p-4 sm:p-5">Primary Resolution / Metric</th>
                  <th className="p-4 sm:p-5">Latency / Turnaround</th>
                  <th className="p-4 sm:p-5">Key Integration Protocol</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[14.5px] text-slate-700">
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#003B73]">
                    Precision Biometric Telemetry
                  </td>
                  <td className="p-4 sm:p-5">24-bit / 4kHz analog-to-digital</td>
                  <td className="p-4 sm:p-5">&lt; 12 ms end-to-end</td>
                  <td className="p-4 sm:p-5">HL7 FHIR / DICOM / IEEE 11073</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#003B73]">
                    Quantum-Spectrum Surgical Imaging
                  </td>
                  <td className="p-4 sm:p-5">Dual 4K UHD + 700-900nm NIR</td>
                  <td className="p-4 sm:p-5">60 fps progressive (&lt; 16 ms)</td>
                  <td className="p-4 sm:p-5">3D Polarized / Genlock Sync</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#003B73]">
                    Haptic Submillimeter Actuation
                  </td>
                  <td className="p-4 sm:p-5">± 25 µm positional repeatability</td>
                  <td className="p-4 sm:p-5">1,000 Hz real-time haptic loop</td>
                  <td className="p-4 sm:p-5">Magnetic Sterile Drape Pass-Through</td>
                </tr>
                <tr className="hover:bg-slate-50 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-[#003B73]">
                    Low-Temperature Plasma Sterilization
                  </td>
                  <td className="p-4 sm:p-5">SAL 10^-6 Spore Inactivation</td>
                  <td className="p-4 sm:p-5">28-minute rapid cycle</td>
                  <td className="p-4 sm:p-5">Zero aeration requirement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* 5. Direct Engineering Consultation Banner */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                OEM & Clinical Inquiries
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Evaluate Our Medical Technologies in Your Facility
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed">
                Connect directly with our biomedical engineering specialists in Richmond, BC to discuss OEM sensor integration, custom firmware development, or hospital evaluation trials.
              </Text>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-wrap items-center justify-around gap-4 text-[15px] font-medium">
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
                  <span>Submit Technical Request</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Download Architecture Datasheets</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
