import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { getAllResources, getResourceBySlug } from "@/data/resources";
import { siteConfig } from "@/config/site";
import {
  FileText,
  Download,
  Phone,
  Mail,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Layers,
  BookOpen
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allResources = await getAllResources();
  return allResources.map((res) => ({
    slug: res.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getResourceBySlug(slug);

  if (!item) {
    return constructMetadata({
      title: "Technical Documentation",
      canonicalUrlRelative: `/resources/${slug}`,
    });
  }

  return constructMetadata({
    title: `${item.title} | Technical Documentation`,
    description: item.summary,
    canonicalUrlRelative: `/resources/${slug}`,
  });
}

export default async function ResourceDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = await getResourceBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb
            items={[
              { name: "Resources", url: "/resources" },
              { name: item.title, url: `/resources/${item.slug}` },
            ]}
          />
          <div className="mt-6 max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="secondary" size="sm">
                {item.type}
              </Badge>
              <Badge variant="outline" size="sm">
                {item.category}
              </Badge>
              <span className="text-[12px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                {item.version} &bull; {item.fileSize}
              </span>
            </div>
            <Heading level="h1" className="text-[#003B73] text-2xl sm:text-3xl lg:text-4xl leading-snug">
              {item.title}
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-3xl">
              {item.summary}
            </Text>
          </div>
        </Container>
      </Section>

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
                  Official Technical Publication
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
                <Download className="w-4 h-4 mr-1.5" />
                <span>Request Document PDF</span>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Document Scope & Metadata (Full-Width) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Document Scope
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Overview & Engineering Applicability
              </Heading>
              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                {item.documentScope}
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-[#003B73]">
                  Included Chapters & Technical Schematics
                </h3>
                <div className="space-y-2.5">
                  {item.includedSections.map((section, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-3 text-[14.5px] text-slate-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                      <span>{section}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Metadata Dossier Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC] block">
                  Document Metadata
                </span>
                <div className="space-y-3 font-mono text-[14px]">
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Document Version:</span>
                    <span className="font-bold text-slate-900">{item.version}</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">File Size:</span>
                    <span className="font-bold text-slate-900">{item.fileSize}</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Language:</span>
                    <span className="font-bold text-slate-900">{item.language}</span>
                  </div>
                  <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex justify-between">
                    <span className="text-slate-500">Release Date:</span>
                    <span className="font-bold text-slate-900">{item.publishedDate}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                    Target Audience
                  </span>
                  <p className="text-[13.5px] text-slate-700 leading-relaxed font-sans">
                    {item.targetAudience}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Full-Width Consultation Banner */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Technical Documentation Distribution
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Request Complete Engineering Package
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Connect with our technical support team in Richmond, BC to receive encrypted PDF copies, CAD step models, or API integration documentation.
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
                  <span>Request Full PDF Package</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Browse All Technical Resources</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
