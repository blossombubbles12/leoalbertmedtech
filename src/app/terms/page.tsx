import { Metadata } from "next";
import { Container, Section, Heading, Text, Breadcrumb, PageHeader } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = constructMetadata({
  title: "Terms of Service",
  description: `Terms of service and legal conditions governing the use of ${siteConfig.name} website.`,
  canonicalUrlRelative: "/terms",
});

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Terms of Service"
        description={`Legal conditions governing website access and technical documentation from ${siteConfig.legalName}.`}
        breadcrumbItems={[{ name: "Terms of Service", url: "/terms" }]}
        badge="Legal & Compliance"
        badgeTag="Terms of Service"
        imageSrc="/piron-guillaume-U4FyCp3-KzY-Hero.jpg"
        imageAlt="Terms of Service and Legal Notice"
      />
      <Section spacing="lg" background="default">
        <Container size="md">
          <div className="space-y-6">
            <div className="prose prose-slate max-w-none space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing the website and digital resources of {siteConfig.legalName}, you agree to abide by these terms and conditions.
              </p>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
                2. Intellectual Property & Medical Notice
              </h2>
              <p>
                All proprietary engineering designs, documentation, and digital assets remain the property of {siteConfig.legalName}. Content is for technical informational purposes only and does not constitute individual clinical advice.
              </p>
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white pt-4">
                3. Governing Law
              </h2>
              <p>
                These terms are governed by the laws of the Province of British Columbia and the federal laws of Canada.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
