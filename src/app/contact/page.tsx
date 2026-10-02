import { Metadata } from "next";
import Image from "next/image";
import { Container, Section, Heading, Text, Breadcrumb, Badge } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Contact & Inquiries | Canadian Operations Campus Richmond, BC",
  description:
    "Contact Adalbert Medical Technology in Richmond, Vancouver, Canada for engineering inquiries, clinical support, and partnerships.",
  canonicalUrlRelative: "/contact",
});

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb items={[{ name: "Contact", url: "/contact" }]} />
          <div className="mt-6 max-w-3xl space-y-3">
            <Badge variant="secondary">
              Engineering & Facility Inquiries
            </Badge>
            <Heading level="h1" className="text-[#003B73]">
              Contact Adalbert Medical Technology
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Connect directly with our biomedical engineering specialists, clinical integration consultants, and operations campus in Richmond, Greater Vancouver, Canada.
            </Text>
          </div>
        </Container>
      </Section>

      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Facility Image & Contact Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 aspect-[16/10]">
                <Image
                  src="/contact us building.jpg"
                  alt="Adalbert Medical Technology headquarters and operations facility in Richmond, BC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="space-y-2">
                <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                  Direct Channels
                </span>
                <Heading level="h2" className="text-2xl font-bold text-[#003B73]">
                  Canadian Headquarters
                </Heading>
                <p className="text-[15px] text-slate-600 leading-relaxed">
                  Our Richmond headquarters oversees technical inquiries, clinical evaluations, and international partner consultations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0066CC] shadow-xs flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[13px] font-bold text-slate-900 block">Facility Location</span>
                      <span className="text-[14.5px] text-slate-700">{siteConfig.contact.address.display}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0066CC] shadow-xs flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[13px] font-bold text-slate-900 block">Telephone Inquiry</span>
                      <a href={`tel:${siteConfig.contact.phone}`} className="text-[15px] font-semibold text-[#0066CC] hover:underline">
                        {siteConfig.contact.phoneFormatted}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0066CC] shadow-xs flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[13px] font-bold text-slate-900 block">Email Inquiries</span>
                      <a href={`mailto:${siteConfig.contact.email}`} className="text-[14.5px] text-slate-700 hover:text-[#0066CC]">
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50 space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white text-[#0066CC] shadow-xs flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[13px] font-bold text-slate-900 block">Operating Hours</span>
                      <span className="text-[14px] text-slate-700">Monday &ndash; Friday: 08:30 &ndash; 17:30 (PST)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-10 space-y-6">
                <div>
                  <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                    Direct Response
                  </span>
                  <Heading level="h3" className="text-2xl font-bold text-[#003B73] mt-1">
                    Technical & Corporate Inquiry Form
                  </Heading>
                  <p className="text-[15px] text-slate-600 mt-2">
                    Submit your organization details below. Our biomedical engineering and clinical leads will respond promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
