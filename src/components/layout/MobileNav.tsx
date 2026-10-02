"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedSection(null);
  }, [pathname]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.touchAction = "unset";
    };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    setExpandedSection((prev) => (prev === title ? null : title));
  };

  const portalContent = (
    <div
      className={cn(
        "fixed inset-0 z-[999999] md:hidden",
        isOpen ? "visible" : "invisible pointer-events-none"
      )}
      aria-hidden={!isOpen}
    >
      {/* 1. Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-slate-950/75 backdrop-blur-xs transition-opacity duration-300",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* 2. Slide-In Drawer Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-full max-w-[340px] sm:max-w-[380px] bg-white shadow-2xl flex flex-col justify-between overflow-hidden border-l border-slate-200 transition-transform duration-300 ease-out transform z-10",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header Bar inside Drawer */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50 shrink-0">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={180}
              height={42}
              priority
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-slate-700 hover:text-slate-950 hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066CC] cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6 text-slate-900" />
          </button>
        </div>

        {/* Scrollable Navigation List */}
        <div className="flex-1 overflow-y-auto px-4 sm:px-5 py-4 space-y-3">
          <nav className="space-y-2">
            {siteConfig.mainNav.map((item) => {
              const hasSubmenu = Boolean(
                item.isMegaMenu || (item.children && item.children.length > 0)
              );
              const isExpanded = expandedSection === item.title;
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));

              return (
                <div
                  key={item.title}
                  className={cn(
                    "rounded-xl border transition-all overflow-hidden",
                    isActive
                      ? "border-[#0066CC]/30 bg-sky-50/40"
                      : "border-slate-200 bg-white"
                  )}
                >
                  {/* Parent Item Row */}
                  <div className="flex items-center justify-between">
                    {hasSubmenu ? (
                      <button
                        type="button"
                        onClick={() => toggleSection(item.title)}
                        className={cn(
                          "flex-1 flex items-center justify-between text-left py-3.5 px-4 font-bold text-[15.5px] transition-colors focus:outline-none cursor-pointer",
                          isActive ? "text-[#0066CC]" : "text-slate-900"
                        )}
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0 ml-2",
                            isExpanded && "rotate-180 text-[#0066CC]"
                          )}
                        />
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex-1 py-3.5 px-4 font-bold text-[15.5px] block transition-colors",
                          isActive
                            ? "text-[#0066CC]"
                            : "text-slate-900 hover:text-[#0066CC]"
                        )}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>

                  {/* Accordion Submenu */}
                  {hasSubmenu && isExpanded && (
                    <div className="border-t border-slate-100 bg-slate-50/90 px-4 py-3 space-y-3">
                      {/* Mega Menu Groups */}
                      {item.groups && (
                        <div className="space-y-3.5">
                          {item.groups.map((group) => (
                            <div key={group.title} className="space-y-1.5">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                                {group.title}
                              </span>
                              <div className="space-y-1 pl-2 border-l-2 border-slate-200">
                                {group.items.map((sub) => (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block py-1.5 text-[14px] font-medium text-slate-700 hover:text-[#0066CC] transition-colors"
                                  >
                                    <div className="flex items-center justify-between">
                                      <span>{sub.title}</span>
                                      {sub.badge && (
                                        <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-sky-100 text-[#0066CC]">
                                          {sub.badge}
                                        </span>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Standard Children */}
                      {item.children && (
                        <div className="space-y-1.5 pl-2 border-l-2 border-slate-200">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block py-1.5 text-[14px] font-medium text-slate-700 hover:text-[#0066CC] transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      )}

                      {/* Main Category Direct Link */}
                      <div className="pt-2 border-t border-slate-200/80">
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-[13px] font-bold text-[#0066CC] hover:text-[#0052A3] inline-flex items-center gap-1.5 py-1"
                        >
                          <span>Explore All {item.title}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Bottom Contact & Action Bar */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 space-y-3 shrink-0">
          <div className="space-y-2 text-[13px] text-slate-600 bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0066CC] shrink-0" />
              <span className="truncate">{siteConfig.contact.address.display}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0066CC] shrink-0" />
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="font-semibold text-slate-900 hover:text-[#0066CC] transition-colors"
              >
                {siteConfig.contact.phoneFormatted}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#0066CC] shrink-0" />
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-slate-700 hover:text-[#0066CC] transition-colors truncate"
              >
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="md"
            onClick={() => setIsOpen(false)}
            className="w-full bg-[#0066CC] hover:bg-[#0052A3] text-white font-semibold shadow-sm justify-center"
          >
            <span>Inquire With Engineering</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="md:hidden">
      {/* Hamburger Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="p-2.5 rounded-lg text-slate-800 hover:bg-slate-100 active:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0066CC] flex items-center justify-center cursor-pointer"
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
      >
        <Menu className="w-6 h-6 text-slate-900" />
      </button>

      {/* Render via Portal onto document.body */}
      {mounted && typeof document !== "undefined"
        ? createPortal(portalContent, document.body)
        : null}
    </div>
  );
}
