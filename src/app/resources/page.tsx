import { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { resourcesData } from "@/data/resources";
import { siteConfig } from "@/config/site";
import { FileText, Download, ShieldCheck, ArrowRight, BookOpen, Layers, CheckCircle2, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Clinical Resources & Documentation | Technical Datasheets & Guides",
  description:
    "Technical documentation, user guides, whitepapers, and regulatory notices from Adalbert Medical Technology in Richmond, BC.",
  canonicalUrlRelative: "/resources",
});

export default function ResourcesPage() {
  const resourceHighlights = [
    {
      title: "Regulatory & Compliance",
      desc: "ISO 13485:2016 quality certifications, Health Canada MDL documentation, and FDA 510(k) summary statements.",
      icon: ShieldCheck,
    },
    {
      title: "Architectural Datasheets",
      desc: "Detailed mechanical, electrical, and clinical networking specifications for Adalbert Medical Technology devices.",
      icon: Layers,
    },
    {
      title: "Clinical Integration Manuals",
      desc: "Step-by-step guides for biomedical engineers and hospital IT departments deploying our telemetry and optical platforms.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero with Gradient & Image */}
      <PageHeader
        title="Technical Documentation & Datasheets"
        description="Access engineering specifications, clinical integration guides, regulatory compliance notices, and system architecture indices maintained by Adalbert Medical Technology."
        breadcrumbItems={[{ name: "Resources", url: "/resources" }]}
        badge="Technical Library"
        badgeTag="Official Engineering Documentation"
        imageSrc="/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg"
        imageAlt="Technical Documentation and Engineering Datasheets"
      />

      {/* 2. Editorial Highlight Strip */}
      <Section spacing="md" background="default" className="border-b border-slate-100">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resourceHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-xs text-[#0066CC] flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#003B73]">{item.title}</h3>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 3. Deep Dive Overview with Image */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Institutional Transparency
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Comprehensive Technical & Regulatory Documentation
              </Heading>
              <Text className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                Adalbert Medical Technology provides verified, audited documentation for hospital biomedical engineers, procurement committees, and clinical department heads.
              </Text>
              <Text className="text-[15.5px] text-slate-600 leading-relaxed">
                Every document in our technical repository is version-controlled and maintained directly by our Canadian engineering headquarters in Richmond, BC, ensuring complete alignment with global medical device standards.
              </Text>

              <div className="space-y-3 pt-2">
                {[
                  "Complete mechanical blueprints and electrical isolation schemas",
                  "Bidirectional HL7 FHIR and DICOM conformance statements",
                  "Sterilization validation protocols and material biocompatibility dossiers",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-[15px] font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <Image
                  src="/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg"
                  alt="Adalbert Medical Technology engineering team reviewing technical documentation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>

          {/* 4. Full Resources Document Grid */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <Heading level="h3" className="text-[#003B73]">
                  Available Technical Downloads
                </Heading>
                <p className="text-[14.5px] text-slate-600 mt-1">
                  Select a document to view full technical metadata or request the official PDF package.
                </p>
              </div>
              <Badge variant="secondary" className="self-start sm:self-auto">
                {resourcesData.length} Indexed Documents
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourcesData.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 flex flex-col justify-between hover:shadow-md transition-all duration-300 space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-12 h-12 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                      </span>
                      <Badge variant="secondary" size="sm">
                        {item.type}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-[19px] font-bold text-[#003B73] leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-[15px] text-slate-600 leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <div className="flex items-center justify-between text-[13px] font-mono text-slate-500">
                      <span>{item.version} &bull; {item.fileSize}</span>
                      <span>{item.language}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <Button href={`/resources/${item.slug}`} variant="outline" size="sm" className="justify-center">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                      <Button href="/contact" variant="primary" size="sm" className="justify-center bg-[#0066CC] hover:bg-[#0052A3]">
                        <Download className="w-3.5 h-3.5 mr-1" />
                        <span>PDF</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
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
                Hospital Engineering Support
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Need Customized Integration Schemas or DICOM Conformance?
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Our biomedical engineering department can supply specialized interface documentation, custom network topology mappings, and Health Canada regulatory validation packets.
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
                  <span>Contact Engineering Group</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/products" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>View Product Catalog</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

