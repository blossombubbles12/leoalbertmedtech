import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { researchData } from "@/data/research";
import { siteConfig } from "@/config/site";
import { BookOpen, FileText, ArrowRight, ExternalLink, Microscope, CheckCircle2, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Research & Publications | Clinical Engineering Studies Richmond, BC",
  description:
    "Scientific research, clinical studies, and biomedical engineering papers from Leonardo Adalbert Medical Technology in Richmond, Greater Vancouver, Canada.",
  canonicalUrlRelative: "/research",
});

export default function ResearchPage() {
  return (
    <div className="flex flex-col">
      {/* 1. Header */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb items={[{ name: "Research", url: "/research" }]} />
          <div className="mt-6 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary">
                Scientific & Clinical Studies
              </Badge>
              <span className="text-[12px] font-mono font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                Peer-Reviewed Publications
              </span>
            </div>
            <Heading level="h1" className="text-[#003B73] text-3xl sm:text-4xl lg:text-5xl">
              Research & Engineering Publications
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-3xl">
              Biomedical research, clinical methodology papers, and hardware architecture whitepapers authored and peer-reviewed by Leonardo Adalbert engineering scientists.
            </Text>
          </div>
        </Container>
      </Section>

      {/* 2. R&D Overview Feature */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
                <Image
                  src="/cdc-p33DqVXhWvs-u.jpg"
                  alt="Biomedical engineering laboratory and clinical research at Leonardo Adalbert"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Applied Clinical Science
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Investigational R&D in High-Acuity Instrumentation
              </Heading>
              <Text className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                Our research initiatives span microsecond-latency telemetry synchronization, surgical optical filtering, and biocompatible material science for acute healthcare environments.
              </Text>
              <Text className="text-[15.5px] text-slate-600 leading-relaxed">
                By publishing foundational studies, Leonardo Adalbert collaborates with university faculties, clinical researchers, and biomedical engineering societies across North America and Europe.
              </Text>

              <div className="space-y-3 pt-2">
                {[
                  "Dual-band telemetry latency validation under clinical interference",
                  "Optical tissue differentiation under LED fluorescence excitation",
                  "Low-temperature plasma sterilant penetration in submillimeter lumens",
                ].map((pt, i) => (
                  <div key={i} className="flex items-center gap-3 text-[15px] font-medium text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Publications List */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <Heading level="h3" className="text-[#003B73]">
                  Published Papers & Whitepapers
                </Heading>
                <p className="text-[14.5px] text-slate-600 mt-1">
                  Peer-reviewed technical evaluations, clinical trials, and architectural whitepapers.
                </p>
              </div>
              <Badge variant="secondary" className="self-start sm:self-auto">
                {researchData.length} Research Dossiers
              </Badge>
            </div>

            {researchData.map((pub, idx) => {
              const pubImage = idx % 2 === 0 ? "/owen-beard-DK8jXx1B-1c-.jpg" : "/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg";

              return (
                <div
                  key={pub.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-5 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <Badge variant="primary" size="sm">
                        {pub.category}
                      </Badge>
                      <span className="text-[13px] text-slate-500 font-mono font-medium">{pub.publicationDate}</span>
                    </div>
                    {pub.doi && (
                      <span className="text-[13px] font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                        DOI: {pub.doi}
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    <div className="lg:col-span-9 space-y-3">
                      <h2 className="text-xl sm:text-2xl font-bold text-[#003B73] leading-snug">
                        <Link href={`/research/${pub.slug}`} className="hover:text-[#0066CC] transition-colors">
                          {pub.title}
                        </Link>
                      </h2>
                      <p className="text-[14px] text-slate-500 font-medium">
                        Authors: {pub.authors.join(", ")} &bull; <span className="text-slate-700 font-semibold">{pub.journalOrConference}</span>
                      </p>
                      <p className="text-[16px] text-slate-600 leading-relaxed pt-1">
                        {pub.abstract}
                      </p>
                    </div>

                    <div className="hidden lg:block lg:col-span-3 relative h-36 w-full rounded-xl overflow-hidden border border-slate-200">
                      <Image
                        src={pubImage}
                        alt={pub.title}
                        fill
                        className="object-cover"
                        sizes="250px"
                      />
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Button href={`/research/${pub.slug}`} variant="primary" size="sm" className="bg-[#0066CC] hover:bg-[#0052A3]">
                        <span>Read Study Dossier</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                      <Button href="/contact" variant="outline" size="sm">
                        <span>Request Full PDF</span>
                      </Button>
                    </div>
                    <span className="text-[13px] text-slate-500 font-medium">Richmond R&D Laboratory Publication</span>
                  </div>
                </div>
              );
            })}
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
                Academic & Clinical Collaborations
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Collaborative Clinical Research & Scientific Inquiries
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Leonardo Adalbert regularly welcomes joint investigational protocols and validation studies with accredited medical faculties and university teaching hospitals.
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
                  <span>Contact Research Directorate</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/innovation" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>View R&D Innovations</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}

