import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container, Section, Heading, Text, Breadcrumb, Badge, Button } from "@/components/ui";
import { constructMetadata } from "@/lib/seo";
import { siteConfig } from "@/config/site";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Compass,
  Target,
  Building2,
  MapPin,
  Phone,
  Mail,
  Award,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Microscope,
  Zap,
  Globe2,
  Users,
  Activity,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Corporate Profile, Heritage & Engineering Mission",
  description:
    "Learn about Leonardo Adalbert Medical Technology, our engineering mission, clinical leadership, research facilities, and Richmond, Vancouver headquarters.",
  canonicalUrlRelative: "/about",
});

export default function AboutPage() {
  const engineeringPillars = [
    {
      title: "Submillimeter Precision",
      description:
        "Every mechanical chassis, optical fixture, and robotic subassembly is fabricated under strict dimensional tolerances for dependable surgical precision.",
      icon: ShieldCheck,
    },
    {
      title: "Zero-Latency Telemetry",
      description:
        "Custom firmware and low-noise analog front-ends capture multi-channel physiological vitals with microsecond timestamp fidelity.",
      icon: Activity,
    },
    {
      title: "Clinical Interoperability",
      description:
        "Open communication protocols designed for seamless synchronization with hospital information networks, telemetry wards, and electronic medical records.",
      icon: Compass,
    },
    {
      title: "Fail-Safe Redundancy",
      description:
        "Dual-isolated power rails, continuous self-diagnostic algorithms, and hardware failsafes engineered to maintain 24/7 continuous operation in intensive care.",
      icon: Zap,
    },
  ];

  const corporateValues = [
    {
      title: "Patient-First Safety",
      description:
        "We hold patient wellness as the ultimate benchmark. Every device is tested under extreme operating constraints before clinical deployment.",
      icon: Award,
    },
    {
      title: "Collaborative Clinical Design",
      description:
        "Our biomedical engineers work directly alongside operating room surgeons, ICU nurses, and clinical directors to refine device ergonomics.",
      icon: Users,
    },
    {
      title: "Sustainable Medical Technology",
      description:
        "Developing energy-efficient, low-temperature sterilization processes and long-lifecycle instrumentation that reduce hospital waste.",
      icon: Target,
    },
    {
      title: "Uncompromising Integrity",
      description:
        "Transparent engineering specifications, dependable technical documentation, and direct access to our Canadian engineering headquarters.",
      icon: HeartHandshake,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* 1. Header Hero */}
      <Section spacing="lg" background="slate" className="border-b border-slate-200">
        <Container size="xl">
          <Breadcrumb items={[{ name: "About Us", url: "/about" }]} />
          <div className="mt-6 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2">
              <Badge variant="secondary">
                Corporate Profile & Heritage
              </Badge>
              <span className="text-[12px] font-mono font-semibold text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                Richmond, BC, Canada
              </span>
            </div>
            <Heading level="h1" className="text-[#003B73] text-3xl sm:text-4xl lg:text-5xl">
              Engineering the Future of Global Medical Technology
            </Heading>
            <Text variant="lead" className="text-slate-600 max-w-3xl">
              Leonardo Adalbert Medical Technology is an engineering-driven healthcare organization dedicated to designing, manufacturing, and deploying precision medical hardware, surgical visualization systems, and physiological telemetry monitors.
            </Text>
          </div>
        </Container>
      </Section>

      {/* 2. Corporate Heritage & Headquarters Feature */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                Institutional Background
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Advancing Healthcare Systems From British Columbia
              </Heading>
              
              <div className="space-y-4 text-slate-700 leading-relaxed text-[17px] sm:text-[18px]">
                <p>
                  Headquartered in Richmond, Greater Vancouver, <strong>{siteConfig.legalName}</strong> was founded on the conviction that medical technology must bridge cutting-edge physical sciences with intuitive clinical practicality.
                </p>
                <p>
                  Over years of focused engineering, our multi-disciplinary teams in biomedical instrumentation, optical physics, and embedded software have developed proprietary hardware architectures that power acute surgical suites, critical care intensive wards, and diagnostic research laboratories.
                </p>
                <p>
                  Today, Leonardo Adalbert collaborates with hospital networks, clinical research institutes, and medical device distributors across North America and international healthcare hubs.
                </p>
              </div>

              {/* Mission & Vision Split Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                  <div className="flex items-center gap-2 text-[#003B73] font-bold text-[16px]">
                    <Target className="w-5 h-5 text-[#0066CC]" />
                    <span>Our Mission</span>
                  </div>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed">
                    {companyData.mission}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                  <div className="flex items-center gap-2 text-[#003B73] font-bold text-[16px]">
                    <Award className="w-5 h-5 text-[#0066CC]" />
                    <span>Our Vision</span>
                  </div>
                  <p className="text-[14.5px] text-slate-600 leading-relaxed">
                    {companyData.vision}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Facility Imagery & Corporate Headquarters Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/contact us building.jpg"
                  alt="Leonardo Adalbert Medical Technology corporate headquarters and operations facility in Richmond, BC"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[11.5px] font-bold uppercase tracking-wider text-sky-300 block">
                    Canadian Operations Center
                  </span>
                  <p className="text-[14px] font-semibold text-white mt-0.5">
                    Richmond, Greater Vancouver, BC, Canada
                  </p>
                </div>
              </div>

              <div className="bg-[#00274D] text-white p-7 sm:p-8 rounded-2xl shadow-xl space-y-5">
                <div className="space-y-1">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                    Head Office & R&D Hub
                  </span>
                  <h3 className="text-[20px] font-bold text-white">
                    Direct Corporate Access
                  </h3>
                  <p className="text-[14px] text-slate-300 leading-relaxed">
                    Our engineering leadership and customer support teams coordinate global inquiries from our Richmond campus.
                  </p>
                </div>

                <div className="space-y-3 text-[14px] text-slate-300 pt-3 border-t border-white/10">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{siteConfig.contact.address.display}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                    <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-white font-medium">
                      {siteConfig.contact.phoneFormatted}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{siteConfig.contact.email}</span>
                  </div>
                </div>

                <Button href="/contact" variant="primary" size="md" className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold">
                  <span>Connect With Our Team</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 3. Executive Leadership & Founder Spotlight */}
      <Section spacing="xl" background="slate" className="border-y border-slate-200">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* CEO Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/5] bg-slate-900">
                <Image
                  src="/ceo.jpeg"
                  alt="Leonardo Leo Adalbert, Founder and Chief Executive Officer of Leonardo Adalbert Medical Technology"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-xl space-y-1">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#0066CC] block">
                    Executive Leadership
                  </span>
                  <h3 className="text-xl font-extrabold text-[#003B73]">
                    Leonardo &quot;Leo&quot; Adalbert
                  </h3>
                  <p className="text-[14px] font-medium text-slate-600">
                    Founder &amp; Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>

            {/* CEO Bio & Vision Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2">
                <Badge variant="secondary">
                  Executive Profile
                </Badge>
                <span className="text-[12px] font-mono text-slate-500 bg-white px-2.5 py-0.5 rounded border border-slate-200">
                  Richmond Headquarters
                </span>
              </div>

              <Heading level="h2" className="text-[#003B73]">
                Leadership Anchored in Clinical Purpose
              </Heading>

              <div className="space-y-4 text-slate-700 text-[17px] sm:text-[18px] leading-relaxed">
                <p>
                  As the Founder and Chief Executive Officer of Leonardo Adalbert Medical Technology, <strong>Leo Adalbert</strong> spearheads the organization&apos;s strategic engineering vision, institutional partnerships, and global deployment of high-acuity medical systems.
                </p>
                <p>
                  Under his leadership, Leonardo Adalbert has evolved into an agile biomedical enterprise in Greater Vancouver, prioritizing submillimeter electromechanical precision, zero-latency clinical telemetry, and uncompromised regulatory integrity across hospital environments.
                </p>
              </div>

              {/* CEO Quote Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-3 relative overflow-hidden">
                <div className="w-2 h-full bg-[#0066CC] absolute left-0 top-0 bottom-0" />
                <p className="text-[16px] sm:text-[17px] font-medium text-[#003B73] italic leading-relaxed pl-3">
                  &ldquo;In medical technology, every microsecond of telemetry and every micron of surgical optical resolution directly impacts a human life. We build precision instruments so healthcare teams never have to doubt their tools in the moments that matter most.&rdquo;
                </p>
                <div className="pl-3 pt-1 text-[13.5px] font-bold text-slate-600 flex items-center gap-2">
                  <span className="text-[#0066CC]">&mdash;</span>
                  <span>Leo Adalbert, Founder &amp; CEO</span>
                </div>
              </div>

              {/* Key Directives */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <ShieldCheck className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Direct R&amp;D Governance</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5">
                      Hands-on engineering review of all telemetry, optical, and robotic subsystems.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <HeartHandshake className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Physician Co-Design</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5">
                      Direct collaboration with practicing surgeons and ICU clinical directors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/contact" variant="primary" size="md">
                  <span>Connect With Executive Office</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 4. Clinical Research & Medical Advisory Collaboration */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/vitaly-gariev-_zbqco3m7dA-.jpg"
                  alt="Clinical research leadership at Leonardo Adalbert Medical Technology"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md text-slate-900 border border-white/40 shadow-lg">
                  <span className="text-[12px] font-bold uppercase tracking-wider text-[#0066CC] block">
                    Clinical Advisory Board
                  </span>
                  <p className="text-[14px] font-bold text-slate-900 mt-0.5">
                    Guided by active surgical practitioners & biomedical researchers.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <Badge variant="secondary">
                Clinical Rigor & Co-Design
              </Badge>
              <Heading level="h2" className="text-[#003B73]">
                Bridging Deep Engineering with Operating Room Realities
              </Heading>
              
              <Text className="text-slate-700 text-[17px] sm:text-[18px] leading-relaxed">
                Medical technology is only as valuable as its usability during critical clinical moments. At Leonardo Adalbert, all hardware layouts, tactile control interfaces, and software monitors undergo iterative co-design with practicing healthcare specialists.
              </Text>
              
              <Text className="text-slate-600 text-[16px] leading-relaxed">
                By gathering direct feedback from surgical suites, intensive care units, and clinical laboratory technicians, we ensure that our consoles minimize visual fatigue, simplify cable management, and deliver instant, high-contrast vitals data when seconds matter.
              </Text>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Tactile & Visual Ergonomics</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5">
                      Low-glare displays and intuitive controls for sterile environments.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/90 shadow-xs">
                  <CheckCircle2 className="w-5 h-5 text-[#0066CC] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Workflow Acceleration</h4>
                    <p className="text-[13.5px] text-slate-600 mt-0.5">
                      Rapid system start-up and synchronized multi-bed telemetry arrays.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 4. R&D Infrastructure & Testing Facilities */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
                R&D Capabilities
              </span>
              <Heading level="h2" className="text-[#003B73]">
                Advanced Laboratories & Precision Testing Facilities
              </Heading>

              <Text className="text-slate-700 text-[17px] sm:text-[18px] leading-relaxed">
                Our Richmond R&D infrastructure encompasses rapid prototyping labs, optical calibration benches, electromagnetic compatibility testing chambers, and simulated clinical environments.
              </Text>

              <Text className="text-slate-600 text-[16px] leading-relaxed">
                Every sensor assembly and electronic sub-module is subjected to rigorous environmental stress tests, thermal cycling, and electrical transient immunity validations before entering final production.
              </Text>

              <div className="space-y-3 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Microscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Spectroscopic Optical Alignment</h4>
                    <p className="text-[14px] text-slate-600 mt-0.5">
                      Calibrated laser interferometry ensuring sub-pixel resolution across surgical endoscopic arrays.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-100 text-[#0066CC] flex items-center justify-center shrink-0 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[15px] font-bold text-slate-900">Signal Integrity & EMI Shielding</h4>
                    <p className="text-[14px] text-slate-600 mt-0.5">
                      Ensuring biometric telemetry streams remain artifact-free even in high-electrocautery operating theatres.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Button href="/innovation" variant="outline" size="md">
                  <span>Explore Innovation Hub</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] bg-slate-100">
                <Image
                  src="/cdc-p33DqVXhWvs-u.jpg"
                  alt="Leonardo Adalbert clinical research laboratory and sensor testing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

          </div>
        </Container>
      </Section>

      {/* 5. Core Engineering Principles Grid */}
      <Section spacing="xl" background="navy" className="bg-[#00274D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl mb-12 space-y-3">
            <Badge variant="primary" className="bg-sky-500/20 text-sky-300 border border-sky-400/30">
              Core Directives
            </Badge>
            <Heading level="h2" className="text-white text-3xl sm:text-4xl">
              Engineering Directives & Quality Principles
            </Heading>
            <Text className="text-slate-200 text-[17px]">
              Our hardware and software development lifecycles are anchored in verifiable engineering standards.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineeringPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3 hover:bg-white/15 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-[18px] font-bold text-white">{p.title}</h3>
                  <p className="text-[14.5px] text-slate-200 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 6. Corporate Values */}
      <Section spacing="xl" background="default">
        <Container size="xl">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-[13px] font-bold uppercase tracking-wider text-[#0066CC]">
              Institutional Commitments
            </span>
            <Heading level="h2" className="text-[#003B73]">
              Values That Drive Our Organization
            </Heading>
            <Text variant="lead" className="text-slate-600">
              Guiding principles behind our daily operations, clinical collaborations, and engineering roadmap.
            </Text>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.title}
                  className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0066CC] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-[18px] font-bold text-slate-900">{val.title}</h3>
                    <p className="text-[14.5px] text-slate-600 leading-relaxed">{val.description}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 text-[12.5px] font-semibold text-[#0066CC]">
                    Institutional Directive
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* 7. Corporate Consultation CTA */}
      <Section spacing="xl" background="slate" className="border-t border-slate-200">
        <Container size="xl">
          <div className="bg-gradient-to-r from-[#00274D] via-[#003B73] to-[#001D3A] rounded-3xl p-8 sm:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="primary" className="bg-white/10 text-sky-300 border border-white/20">
                Richmond Corporate Headquarters
              </Badge>

              <Heading level="h2" className="text-3xl sm:text-4xl text-white font-extrabold tracking-tight">
                Partner With Leonardo Adalbert Medical Technology
              </Heading>

              <Text className="text-slate-200 text-[17px] sm:text-[18px] leading-relaxed">
                Whether you are a hospital network seeking custom clinical integration or an international distributor exploring partnership opportunities, our Canadian headquarters is here to assist.
              </Text>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex flex-wrap items-center justify-around gap-4 text-[15px] font-medium">
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
                  <span>Contact Our Executive Team</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
                <Button href="/resources" variant="white" size="lg" className="bg-white text-[#003B73] hover:bg-slate-100 font-semibold">
                  <span>View Technical Documentation</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
