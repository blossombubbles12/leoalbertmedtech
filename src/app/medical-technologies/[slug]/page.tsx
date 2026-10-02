import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { getAllTechnologies, getTechnologyBySlug } from "@/data/technologies";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Activity,
  Phone,
  Mail,
  Cpu,
  Layers,
  Sparkles,
  Sliders,
  Award,
  MapPin,
  FileText
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allTech = await getAllTechnologies();
  const slugs: { slug: string }[] = [];

  allTech.forEach((t) => {
    slugs.push({ slug: t.slug });
  });

  // Include navigation alias slugs
  slugs.push({ slug: "precision-telemetry" });
  slugs.push({ slug: "surgical-optics" });
  slugs.push({ slug: "robotic-actuation" });
  slugs.push({ slug: "clinical-decontamination" });

  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tech = await getTechnologyBySlug(slug);

  if (!tech) {
    return constructMetadata({
      title: "Technology Platform",
      canonicalUrlRelative: `/medical-technologies/${slug}`,
    });
  }

  return constructMetadata({
    title: `${tech.title} | Medical Technology Architecture`,
    description: tech.summary,
    canonicalUrlRelative: `/medical-technologies/${slug}`,
  });
}

export default async function TechnologyDetailPage({ params }: Props) {
  const { slug } = await params;
  const tech = await getTechnologyBySlug(slug);

  if (!tech) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb
            items={[
              { name: "Medical Technologies", url: "/medical-technologies" },
              { name: tech.title, url: `/medical-technologies/${tech.slug}` },
            ]}
          />
          <div className="mt-6 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="primary" size="sm">
                {tech.category}
              </Badge>
              {tech.featured && (
                <Badge variant="teal" size="sm">
                  Core Engineering Platform
                </Badge>
              )}
              <span className="text-[12px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                Richmond R&D Laboratory
              </span>
            </div>
            <Heading level="h1" className="text-[#003B73] text-3xl sm:text-4xl lg:text-5xl">
              {tech.title}
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-3xl">
              {tech.headline}
            </Text>
          </div>
        </Container>
      </Section>

      {/* 2. Full-Width Visual Hero Image Banner */}
      <Section spacing="md" background="default" className="pt-8 pb-0">
        <Container size="xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[21/9] sm:aspect-[21/8] bg-slate-900">
            <Image
              src={tech.images.hero}
              alt={tech.images.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-sky-300 block">
                  Hardware Specification Dossier
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {tech.title} &bull; Clinical Engineering Assembly
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white self-start sm:self-auto shrink-0 shadow-lg"
              >
                <span>Request OEM Integration Specs</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Architecture & Physics Overview (Split Layout) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                System Architecture
              </span>
              <Heading level="h2" className="text-[#003B73]">
                High-Fidelity Engineering for Critical Medical Care
              </Heading>
              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                {tech.architectureOverview}
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                {tech.summary}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Galvanic Isolation</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5">
                      Full electrical barrier protecting delicate sensory nodes.
                    </p>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/90 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Zero-Loss Multiplexing</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5">
                      High-throughput continuous multi-vector telemetry transmission.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src={tech.images.clinical}
                  alt={`${tech.title} clinical deployment`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0066CC] block">
                    Active Clinical Deployment
                  </span>
                  <p className="text-[14px] font-bold text-slate-900 mt-0.5">
                    Tested and optimized for operating theatres and acute intensive wards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Subsystem Innovations & Capabilities (Full 4-Card Grid) */}
      <Section spacing="xl" background="slate" className="border-y border-slate-200">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Core Capabilities
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Subsystem Innovations & Technical Capabilities
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Explore the individual hardware blocks and algorithmic pipelines powering this technology.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tech.engineeringHighlights.map((highlight, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
                    {highlight.title}
                  </h3>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0066CC]">
                  <span>Verified Subsystem</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Detailed Engineering Parameters & Specifications Table */}
      {tech.specificationsTable && (
        <Section spacing="xl" background="default">
          <Container size="xl">
            <div className="max-w-3xl mb-12 space-y-3">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Technical Parameters
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Comprehensive Engineering Parameters
              </Heading>
              <Text variant="lead" className="text-slate-600">
                Detailed metrics covering resolution, frequency response, electrical isolation, and communication interfaces.
              </Text>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tech.specificationsTable.map((specGroup, sIdx) => (
                <div
                  key={sIdx}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 space-y-4"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h3 className="text-[17px] font-bold text-[#003B73]">
                      {specGroup.category}
                    </h3>
                    <Badge variant="outline" size="sm">
                      Calibrated Standard
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    {specGroup.parameters.map((param, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4"
                      >
                        <span className="text-[14px] text-slate-600 font-medium">
                          {param.label}
                        </span>
                        <span className="text-[14.5px] font-bold text-slate-900 text-right">
                          {param.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* 6. Clinical Workflow Benefits & Target Deployments */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Workflow Benefits */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Clinical Impact
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Workflow Advantages for Medical Practitioners
              </Heading>
              <Text className="text-slate-600 text-[16px]">
                Engineered to accelerate diagnosis and reduce fatigue in demanding clinical environments.
              </Text>

              <div className="space-y-4 pt-2">
                {tech.clinicalWorkflowBenefits?.map((benefit, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-slate-900">{benefit.title}</h4>
                      <p className="text-[14.5px] text-slate-600 mt-1 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Hospital Target Deployments & Standards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC] block">
                  Target Deployments
                </span>
                <h3 className="text-xl font-bold text-[#003B73]">
                  Recommended Hospital Environments
                </h3>
                <div className="space-y-2.5">
                  {tech.clinicalApplications?.map((app) => (
                    <div
                      key={app}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-[14.5px] font-semibold text-slate-800"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0066CC] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <span className="text-[12.5px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Verified Protocols
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {tech.complianceStandards?.map((std) => (
                      <span
                        key={std}
                        className="px-3 py-1 rounded-md bg-sky-50 text-[#0066CC] text-[12px] font-semibold border border-sky-100"
                      >
                        {std}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 7. Full-Width Corporate Consultation Banner */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                OEM & Clinical Consultation
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Integrate {tech.title} Into Your Clinical Infrastructure
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Consult with our biomedical engineering team in Richmond, BC for technical validation dossiers, integration protocols, and evaluation units.
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
                  <span>Connect With Engineering</span>
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
