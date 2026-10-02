import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { getAllProducts, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/config/site";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  FileText,
  Phone,
  Mail,
  Sliders,
  Award,
  MapPin,
  Clock,
  Wrench
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const allProducts = await getAllProducts();
  const slugs: { slug: string }[] = [];

  allProducts.forEach((p) => {
    slugs.push({ slug: p.slug });
  });

  // Include navigation alias slugs
  slugs.push({ slug: "la-telemetry-x1-monitor" });
  slugs.push({ slug: "la-visio-4k-endoscopic-tower" });
  slugs.push({ slug: "la-plazmax-70-sterilizer" });

  return slugs;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return constructMetadata({
      title: "Medical Product",
      canonicalUrlRelative: `/products/${slug}`,
    });
  }

  return constructMetadata({
    title: `${product.name} | Medical Hardware Dossier`,
    description: product.summary,
    canonicalUrlRelative: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero with Gradient & Image */}
      <PageHeader
        title={product.name}
        description={product.summary}
        breadcrumbItems={[
          { name: "Products", url: "/products" },
          { name: product.name, url: `/products/${product.slug}` },
        ]}
        badge={product.category}
        badgeTag={`Model: ${product.modelNumber} • ${product.status}`}
        imageSrc={product.images.hero}
        imageAlt={product.images.alt}
      />

      {/* 2. Full-Width Visual Hero Image Banner */}
      <Section spacing="md" background="default" className="pt-8 pb-0">
        <Container size="xl">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[21/9] sm:aspect-[21/8] bg-slate-900">
            <Image
              src={product.images.hero}
              alt={product.images.alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
            <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
              <div>
                <span className="text-[12px] font-bold uppercase tracking-widest text-sky-300 block">
                  Model: {product.modelNumber} &bull; Device Dossier
                </span>
                <p className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {product.name}
                </p>
              </div>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="bg-[#0066CC] hover:bg-[#0052A3] text-white self-start sm:self-auto shrink-0 shadow-lg"
              >
                <span>Request Quotation & Trial Unit</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* 3. Clinical & Engineering Overview (Split Layout) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Device Overview
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Engineered for High-Acuity Clinical Reliability
              </Heading>
              <p className="text-[17px] sm:text-[18px] text-slate-700 leading-relaxed">
                {product.overview}
              </p>
              <p className="text-[16px] text-slate-600 leading-relaxed">
                {product.summary}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {product.keyAdvantages.map((adv, aIdx) => (
                  <div
                    key={aIdx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1"
                  >
                    <div className="flex items-center gap-2 text-[15px] font-bold text-[#003B73]">
                      <CheckCircle2 className="w-4 h-4 text-[#0066CC] shrink-0" />
                      <span>{adv.title}</span>
                    </div>
                    <p className="text-[13.5px] text-slate-600 leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src={product.images.detail}
                  alt={`${product.name} operating context`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#0066CC] block">
                    Model: {product.modelNumber}
                  </span>
                  <p className="text-[14px] font-bold text-slate-900 mt-0.5">
                    Certified for hospital bedside and surgical suite deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* 4. Features Grid (Full-Width) */}
      <Section spacing="xl" background="slate" className="border-y border-slate-200">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Features & Subsystems
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Key Hardware & Software Features
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Innovative design highlights engineered to simplify clinical operation and enhance diagnostic accuracy.
            </Text>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-[16px] font-bold text-slate-900 leading-snug">
                    Feature {idx + 1}
                  </h4>
                  <p className="text-[14px] text-slate-600 leading-relaxed">
                    {feat}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[12px] font-semibold text-[#0066CC]">
                  Standard Feature
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 5. Detailed Technical Specifications (Full-Width Tables) */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Technical Specifications
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Comprehensive Engineering Specifications
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Exact electrical, mechanical, optical, and network communication parameters.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {product.specifications.map((specGroup, sIdx) => (
              <div
                key={sIdx}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm p-7 space-y-4"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <h3 className="text-[17px] font-bold text-[#003B73]">
                    {specGroup.category}
                  </h3>
                  <Badge variant="outline" size="sm">
                    Calibrated Metric
                  </Badge>
                </div>
                <div className="space-y-3">
                  {specGroup.items.map((item, iIdx) => (
                    <div
                      key={iIdx}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between gap-4"
                    >
                      <span className="text-[14px] text-slate-600 font-medium">
                        {item.label}
                      </span>
                      <span className="text-[14.5px] font-bold text-slate-900 text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* 6. Service & Maintenance / Clinical Applications */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Service & Support */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Lifecycle & Support
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Maintenance, Calibration & Canadian Support
              </Heading>
              <Text className="text-slate-600 text-[16px]">
                Direct factory calibration, spare parts availability, and 24/7 technical hotline support from our Richmond, BC campus.
              </Text>

              <div className="space-y-4 pt-2">
                {product.maintenanceAndService.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[16px] font-bold text-slate-900">{item.title}</h4>
                      <p className="text-[14.5px] text-slate-600 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Clinical Applications */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC] block">
                  Target Deployments
                </span>
                <h3 className="text-xl font-bold text-[#003B73]">
                  Clinical Applications
                </h3>
                <div className="space-y-2.5">
                  {product.clinicalApplications.map((app) => (
                    <div
                      key={app}
                      className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-[14.5px] font-semibold text-slate-800"
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-[#0066CC] shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

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
                Procurement & Inquiries
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Order or Evaluate the {product.modelNumber}
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed max-w-2xl mx-auto">
                Connect with our clinical equipment advisors in Richmond, BC to discuss institutional discounts, hospital evaluation trials, or custom hardware modifications.
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
                  <span>Submit Evaluation Request</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>Download User Manual & Specs</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
