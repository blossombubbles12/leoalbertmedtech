"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Navigation } from "./Navigation";
import { MobileNav } from "./MobileNav";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/hooks";
import { cn } from "@/lib/utils";

export function Header() {
  const { isScrolled } = useScrollPosition(10);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-200">
      {/* Top Corporate Utility Bar */}
      <div className="hidden lg:block bg-[#00274D] text-slate-300 text-[12.5px] py-2 border-b border-white/10 font-medium">
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Headquarters: {siteConfig.contact.address.display}</span>
            </div>
            <span className="text-slate-600">|</span>
            <span className="text-slate-300">Advanced Medical Systems & Engineering</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>{siteConfig.contact.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link href="/resources" className="hover:text-white transition-colors">
              Technical Documentation
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "w-full bg-white/95 backdrop-blur-md transition-all duration-200 border-b",
          isScrolled
            ? "border-slate-200 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : "border-slate-200/80"
        )}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
            
            {/* Official Logo (Left-aligned with dedicated margin) */}
            <div className="flex items-center shrink-0 mr-2 sm:mr-4 lg:mr-8 xl:mr-12">
              <Link
                href="/"
                className="flex items-center gap-3 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC] rounded-md transition-opacity hover:opacity-95"
                aria-label={`${siteConfig.name} Home`}
              >
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  width={300}
                  height={70}
                  priority
                  className="h-8 sm:h-9.5 md:h-10 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Nav (Center/Expanded area with generous breathing room) */}
            <div className="hidden md:flex flex-1 items-center justify-start lg:justify-center overflow-visible">
              <Navigation />
            </div>

            {/* Action / Contact CTA & Mobile Toggle (Right-anchored) */}
            <div className="flex items-center gap-3 shrink-0 ml-auto md:ml-4 lg:ml-6">
              <Button
                href="/contact"
                variant="primary"
                size="sm"
                className="hidden md:inline-flex shadow-xs bg-[#0066CC] hover:bg-[#0052A3] text-white px-4 py-2 text-[13.5px] font-semibold"
              >
                <span>Inquire With Engineering</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <MobileNav />
            </div>

          </div>
        </div>
      </div>
    </header>
  );
}
