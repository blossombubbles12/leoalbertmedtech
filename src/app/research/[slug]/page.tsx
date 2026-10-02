import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { getAllResearch, getResearchBySlug } from "@/data/research";
import { siteConfig } from "@/config/site";
import {
  BookOpen,
  FileText,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Microscope,
  Award,
  MapPin,
  ExternalLink
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allResearch = await getAllResearch();
  const slugs: { slug: string }[] = [];

  allResearch.forEach((r) => {
    slugs.push({ slug: r.slug });
  });

  // Alias
  slugs.push({ slug: "biometric-telemetry-validation" });

  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getResearchBySlug(slug);

  if (!item) {
    return constructMetadata({
      title: "Research Publication",
      canonicalUrlRelative: `/research/${slug}`,
    });
  }

  return constructMetadata({
    title: `${item.title} | Clinical Engineering Research`,
    description: item.abstract,
    canonicalUrlRelative: `/research/${slug}`,
  });
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getResearchBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero with Gradient & Image */}
      <PageHeader
        title={item.title}
        description={`Authors: ${item.authors.join(", ")} • ${item.journalOrConference}`}
        breadcrumbItems={[
          { name: "Research", url: "/research" },
          { name: item.title, url: `/research/${item.slug}` },
        ]}
        badge={item.category}
        badgeTag={`Published: ${item.publicationDate}`}
        imageSrc="/vitaly-gariev-7Z2Xf8Bb7iM-doctors looking at results.jpg"
        imageAlt={item.title}
      />

      {/* 2. Full-Width Visual Hero Image Banner */}
      <Section spacing="md" background="default" className="pt-8 pb-0">
        <Container size="xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[21/9] sm:aspect-[21/8] bg-slate-900">
            <Image
              src={item.image}
              alt={item.imageAlt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-sky-300 block">
                  Peer-Reviewed Engineering Dossier
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {item.title}
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white self-start sm:self-auto shrink-0 shadow-lg"
              >
                <span>Request Full PDF & Data</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Scientific Abstract & Methodology (Split Layout) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Scientific Abstract
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Executive Summary & Scope
              </Heading>
              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed font-serif italic bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                &ldquo;{item.abstract}&rdquo;
              </p>

              <div className="space-y-4 pt-2">
                <h3 className="text-xl font-bold text-[#003B73]">
                  Methodology & Experimental Protocol
                </h3>
                <p className="text-[16px] text-slate-600 leading-relaxed">
                  {item.methodology}
                </p>
              </div>

              {item.doi && (
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between text-[13.5px] font-mono text-slate-600">
                  <span>Digital Object Identifier: <strong>{item.doi}</strong></span>
                  <Badge variant="outline" size="sm">
                    Verified Publication
                  </Badge>
                </div>
              )}
            </div>

            {/* Right: Key Findings Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#00274D] text-white p-7 sm:p-8 rounded-3xl shadow-xl space-y-5">
                <div className="flex items-center gap-2 text-sky-400">
                  <Microscope className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Quantitative Findings
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Validated Study Outcomes
                </h3>
                <div className="space-y-3 pt-2">
                  {item.keyFindings.map((finding, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-[14.5px] text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{finding}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 space-y-2">
                <span className="text-[12px] font-bold uppercase tracking-wider text-[#0066CC] block">
                  Clinical Significance
                </span>
                <p className="text-[14.5px] text-slate-700 leading-relaxed">
                  {item.clinicalSignificance}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Full-Width Research Access & Consultation Banner */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Academic & Clinical Research Collaboration
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Collaborate With Our Biomedical Research Team
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Connect with our clinical researchers in Richmond, BC to request raw study data, collaborative clinical trial protocols, or citation permissions.
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
                  <span>Request Full Preprint & Dataset</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/research" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Browse All Research Papers</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
