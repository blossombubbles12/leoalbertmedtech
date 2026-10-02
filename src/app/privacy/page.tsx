import { Metadata } from "next";
import { Container, Section, Heading, Text, Breadcrumb } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description: `Privacy policy and data governance practices of ${siteConfig.name}.`,
  canonicalUrlRelative: "/privacy",
});

export default function PrivacyPage() {
  return (
    <Section spacing="lg">
      <Container size="md">
        <Breadcrumb items={[{ name: "Privacy Policy", url: "/privacy" }]} />
        <div className="mt-8 space-y-6">
          <Heading level="h1">Privacy Policy</Heading>
          <Text variant="lead">
            {siteConfig.legalName} is committed to protecting the privacy, confidentiality, and security of our clients, clinical partners, and website visitors.
          </Text>
          <div className="prose prose-slate max-w-none space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
              1. Information Collection & Purpose
            </h2>
            <p>
              We collect information provided directly by institutional partners and website inquiries for the sole purpose of technical consultation, customer service, and commercial communication.
            </p>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
              2. Data Protection & Jurisdictional Compliance
            </h2>
            <p>
              Operating from Richmond, British Columbia, Canada, our data governance policies adhere to applicable Canadian and international data protection regulations.
            </p>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
              3. Contact Information
            </h2>
            <p>
              For inquiries regarding our privacy standards, contact: {siteConfig.contact.email}.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
