import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { getAllSolutions, getSolutionBySlug } from "@/data/solutions";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Building2,
  Phone,
  Mail,
  Layers,
  Activity,
  Award,
  Sparkles,
  MapPin,
  Clock
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allSolutions = await getAllSolutions();
  const slugs: { slug: string }[] = [];

  allSolutions.forEach((s) => {
    slugs.push({ slug: s.slug });
  });

  // Include navigation alias slugs
  slugs.push({ slug: "integrated-operating-theatres" });
  slugs.push({ slug: "critical-care-monitoring-systems" });
  slugs.push({ slug: "sterile-processing-infection-control" });

  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    return constructMetadata({
      title: "Clinical Solution",
      canonicalUrlRelative: `/solutions/${slug}`,
    });
  }

  return constructMetadata({
    title: `${solution.title} | Integrated Clinical Architecture`,
    description: solution.summary,
    canonicalUrlRelative: `/solutions/${slug}`,
  });
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero with Gradient & Image */}
      <PageHeader
        title={solution.title}
        description={solution.headline}
        breadcrumbItems={[
          { name: "Solutions", url: "/solutions" },
          { name: solution.title, url: `/solutions/${solution.slug}` },
        ]}
        badge={solution.targetEnvironment}
        badgeTag="Turnkey Hospital Deployment"
        imageSrc={solution.images.hero}
        imageAlt={solution.images.alt}
      />

      {/* 2. Full-Width Visual Hero Image Banner */}
      <Section spacing="md" background="default" className="pt-8 pb-0">
        <Container size="xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[21/9] sm:aspect-[21/8] bg-slate-900">
            <Image
              src={solution.images.hero}
              alt={solution.images.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-sky-300 block">
                  Clinical Environment Architecture
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {solution.title}
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white self-start sm:self-auto shrink-0 shadow-lg"
              >
                <span>Request Architecture Review</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Architecture & Clinical Overview (Split Layout) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                System Architecture
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Harmonizing Hardware, Data & Workflow Ergonomics
              </Heading>
              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                {solution.overview}
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                {solution.summary}
              </p>

              {/* Subsystems preview */}
              <div className="space-y-3 pt-2">
                {solution.subsystems.slice(0, 2).map((sub, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-[15.5px] font-bold text-slate-900">{sub.title}</h4>
                      <p className="text-[14px] text-slate-600 mt-0.5 leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src={solution.images.detail}
                  alt={`${solution.title} detailed equipment configuration`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0066CC] block">
                    Turnkey Integration
                  </span>
                  <p className="text-[14px] font-bold text-slate-900 mt-0.5">
                    Coordinated hardware, optical routing, and nurse station displays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Subsystems & Technical Features (Full 4-Card Grid) */}
      <Section spacing="xl" background="slate" className="border-y border-slate-200">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Subsystem Modules
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Integrated Subsystem Modules & Features
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Modular components engineered to function harmoniously within high-acuity clinical environments.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.subsystems.map((sub, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-[18px] font-bold text-slate-900 leading-snug">
                    {sub.title}
                  </h3>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed">
                    {sub.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[12.5px] font-semibold text-[#0066CC]">
                  Integrated Module
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Clinical Workflow Stages (Full 3-Step Process) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Clinical Workflow
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Optimized 3-Stage Procedural Workflow
            </Heading>
            <Text variant="lead" className="text-slate-600">
              How our integrated architecture accelerates preparation, execution, and patient handoff.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.workflowStages.map((stage) => (
              <div
                key={stage.step}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 relative overflow-hidden"
              >
                <div className="text-4xl font-extrabold text-sky-200 font-mono">
                  {stage.step}
                </div>
                <h3 className="text-xl font-bold text-[#003B73]">
                  {stage.title}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Clinical & Operational Benefits */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Institutional Value
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Clinical & Operational Advantages
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Measurable benefits for surgical teams, intensive care nurses, and hospital administration.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.benefits.map((b, bIdx) => (
              <div
                key={bIdx}
                className="bg-white p-7 rounded-2xl border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-[17px] font-bold text-slate-900">{b.title}</h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {b.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[12.5px] font-semibold text-[#0066CC]">
                  Hospital Standard
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 7. Full-Width Consultation Banner */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Hospital Procurement & Integration
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Design Your {solution.title} Architecture
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Connect with our solutions engineering team in Richmond, BC to arrange a facility review, room planning consultation, and system deployment timeline.
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
                  <span>Schedule Architectural Consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Download Integration Specifications</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
