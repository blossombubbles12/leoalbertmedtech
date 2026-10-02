import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { productsData } from "@/data/products";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Eye,
  Sparkles,
  Phone,
  MapPin,
  Sliders,
  Award
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Products & Medical Systems | Precision Hardware Catalog",
  description:
    "Explore the medical technology devices, instruments, and precision clinical systems engineered by Adalbert Medical Technology.",
  canonicalUrlRelative: "/products",
});

export default function ProductsPage() {
  const productPillars = [
    {
      title: "Biometric Monitors",
      description: "12-lead continuous cardiac telemetry with smart alarm filtering.",
      icon: Cpu,
    },
    {
      title: "4K Surgical Optics",
      description: "Multispectral endoscopy with real-time NIR fluorescence overlay.",
      icon: Eye,
    },
    {
      title: "Cold Plasma Sterilizers",
      description: "28-minute low-temperature cycle for delicate micro-instruments.",
      icon: Sparkles,
    },
    {
      title: "Enterprise Connectivity",
      description: "Direct HL7 FHIR and DICOM integration into hospital networks.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero with Gradient & Image */}
      <PageHeader
        title="Medical Devices & Clinical Hardware Systems"
        description="Explore our line of clinical telemetry monitors, multispectral surgical visualization systems, and low-temperature decontamination units."
        breadcrumbItems={[{ name: "Products", url: "/products" }]}
        badge="Medical Hardware Catalog"
        badgeTag="Precision Hardware"
        imageSrc="/cesar-badilla-miranda-0Fv4M2hSZJU-tech.jpg"
        imageAlt="Adalbert Medical Devices and Clinical Hardware"
      />

      {/* 2. Pillars Overview Strip */}
      <Section spacing="md" background="default" className="border-b border-slate-100">
        <Container size="xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productPillars.map((pillar) => {
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

      {/* 3. Products Catalog Showcase (Full-Width Rich Cards) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="space-y-20">
            {productsData.map((prod) => (
              <div
                key={prod.id}
                id={prod.slug}
                className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Product Image Banner */}
                  <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full bg-slate-900 flex flex-col justify-between p-6">
                    <Image
                      src={prod.images.hero}
                      alt={prod.images.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
                    
                    <div className="relative z-10 flex items-center gap-2">
                      <span className="font-mono text-[13px] font-bold text-[#003B73] bg-white/95 px-3 py-1 rounded-md shadow-md">
                        {prod.modelNumber}
                      </span>
                      <span className="px-3 py-1 rounded-md bg-[#0066CC] text-white text-[12px] font-bold uppercase tracking-wider shadow-md">
                        {prod.category}
                      </span>
                    </div>

                    <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white mt-auto">
                      <span className="text-[11px] font-bold uppercase tracking-widest text-emerald-300 block">
                        Hardware Status: {prod.status}
                      </span>
                      <p className="text-[14px] font-bold text-white mt-0.5">
                        {prod.name}
                      </p>
                    </div>
                  </div>

                  {/* Right Product Details */}
                  <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
                      <div>
                        <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC] block">
                          Certified Device
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#003B73] mt-1">
                          {prod.name}
                        </h2>
                      </div>
                      <Badge variant="success" size="sm" className="self-start sm:self-auto">
                        Clinical Ready
                      </Badge>
                    </div>

                    <p className="text-[17px] text-slate-700 leading-relaxed">
                      {prod.overview}
                    </p>

                    {/* Features & Technical Highlights */}
                    <div className="space-y-3 pt-2">
                      <span className="text-[13px] font-bold uppercase tracking-wider text-slate-700 block">
                        Key Engineering Features
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        {prod.features.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-[14px] text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technical Parameters Preview */}
                    <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-2">
                      <span className="text-[12.5px] font-bold uppercase tracking-wider text-[#003B73] block">
                        Key Parameters: {prod.specifications[0]?.category}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prod.specifications[0]?.items.slice(0, 4).map((item, iIdx) => (
                          <div
                            key={iIdx}
                            className="bg-white p-2.5 rounded-lg border border-slate-200/60 flex justify-between text-[13.5px]"
                          >
                            <span className="text-slate-500">{item.label}</span>
                            <span className="font-semibold text-slate-800">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                      <span className="text-[13.5px] text-slate-600 font-medium">
                        Model: {prod.modelNumber} &bull; Full Regulatory Dossier
                      </span>
                      <Button
                        href={`/products/${prod.slug}`}
                        variant="primary"
                        size="md"
                        className="bg-[#0066CC] hover:bg-[#0052A3]"
                      >
                        <span>View Device Dossier</span>
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

      {/* 4. Full-Width Consultation Banner */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Hospital Procurement & Quotes
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Request Product Specifications & Trial Evaluations
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Connect with our product specialists in Richmond, BC to receive detailed product datasheets, user manuals, and institutional pricing.
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
                  <span>Submit Product Inquiry</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Download Product Manuals</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
