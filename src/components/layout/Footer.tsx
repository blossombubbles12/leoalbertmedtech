import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Globe, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#00274D] text-slate-300 border-t border-slate-800">
      <Container size="xl" className="py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Company Summary Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="bg-white p-2.5 rounded-lg inline-block shadow-sm">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={260}
                height={60}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="text-[15px] text-slate-200 leading-relaxed max-w-sm">
              Global medical engineering and healthcare technology systems designed and engineered with clinical precision. Headquartered in Richmond, Vancouver, Canada.
            </p>

            <div className="space-y-3 text-[14px] text-slate-300 pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0066CC] shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address.display}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0066CC] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:text-white transition-colors font-medium"
                >
                  {siteConfig.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#0066CC] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#0066CC] shrink-0" />
                <span>{siteConfig.domain}</span>
              </div>
            </div>
          </div>

          {/* Nav Columns */}
          {siteConfig.footerNav.map((col) => (
            <div key={col.title} className="space-y-4">
              <h3 className="text-[13px] font-bold uppercase tracking-wider text-white border-b border-white/10 pb-2">
                {col.title}
              </h3>
              <ul className="space-y-2.5 text-[15px]">
                {col.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                    >
                      <span>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Standards Strip */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[13px] text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
            <span>Precision Engineering &bull; High-Acuity Medical Systems</span>
          </div>
          <span className="text-slate-300">Richmond, Vancouver, BC &bull; Global Deployments</span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[13.5px] text-slate-400 gap-4">
          <p>
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
