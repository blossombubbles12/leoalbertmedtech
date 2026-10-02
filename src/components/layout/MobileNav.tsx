"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MapPin, Mail, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    setExpandedSection(null);
  }, [pathname]);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleSection = (title: string) => {
    setExpandedSection(expandedSection === title ? null : title);
  };

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-slate-800 hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-0 top-16 bottom-0 z-50 bg-white border-t border-slate-200 flex flex-col justify-between p-5 overflow-y-auto shadow-2xl"
          >
            <div className="space-y-4">
              {/* Logo in drawer */}
              <div className="pb-3 border-b border-slate-100 flex items-center justify-between">
                <Image
                  src="/logo.png"
                  alt={siteConfig.name}
                  width={220}
                  height={50}
                  className="h-8 w-auto object-contain"
                />
                <span className="text-[11px] font-mono font-semibold bg-sky-50 text-[#0066CC] px-2 py-0.5 rounded">
                  Richmond, BC
                </span>
              </div>

              {/* Navigation Items with Accordions */}
              <nav className="flex flex-col space-y-1.5">
                {siteConfig.mainNav.map((item) => {
                  const hasSubmenu = Boolean(item.isMegaMenu || (item.children && item.children.length > 0));
                  const isExpanded = expandedSection === item.title;
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <div key={item.title} className="rounded-xl overflow-hidden border border-slate-100 bg-slate-50/50">
                      
                      {/* Top Header / Trigger Row */}
                      <div className="flex items-center justify-between">
                        <Link
                          href={item.href}
                          className={cn(
                            "flex-1 text-[16px] font-bold py-3 px-4 transition-colors",
                            isActive
                              ? "text-[#0066CC]"
                              : "text-slate-900 hover:text-[#003B73]"
                          )}
                        >
                          {item.title}
                        </Link>

                        {hasSubmenu && (
                          <button
                            type="button"
                            onClick={() => toggleSection(item.title)}
                            className="p-3 text-slate-500 hover:text-[#0066CC] focus-visible:outline-none"
                            aria-label={`Toggle ${item.title} submenu`}
                            aria-expanded={isExpanded}
                          >
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 transition-transform duration-200",
                                isExpanded && "rotate-180 text-[#0066CC]"
                              )}
                            />
                          </button>
                        )}
                      </div>

                      {/* Expandable Submenu */}
                      {hasSubmenu && (
                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="px-4 pb-4 pt-1 space-y-3 bg-white border-t border-slate-100"
                            >
                              {/* 1. If Mega Menu Groups */}
                              {item.groups && (
                                <div className="space-y-4">
                                  {item.groups.map((group) => (
                                    <div key={group.title} className="space-y-2">
                                      <span className="text-[11.5px] font-bold uppercase tracking-wider text-slate-700 block">
                                        {group.title}
                                      </span>
                                      <div className="space-y-1.5 pl-2 border-l-2 border-slate-100">
                                        {group.items.map((sub) => (
                                          <Link
                                            key={sub.href}
                                            href={sub.href}
                                            className="block py-1 text-[14.5px] font-semibold text-slate-700 hover:text-[#0066CC]"
                                          >
                                            <div className="flex items-center justify-between">
                                              <span>{sub.title}</span>
                                              {sub.badge && (
                                                <span className="text-[10.5px] font-bold font-mono px-1.5 py-0.5 rounded bg-sky-100 text-[#0066CC]">
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

                              {/* 2. If Standard Children */}
                              {item.children && (
                                <div className="space-y-1.5 pl-2 border-l-2 border-slate-100">
                                  {item.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="block py-1 text-[14.5px] font-semibold text-slate-700 hover:text-[#0066CC]"
                                    >
                                      {child.title}
                                    </Link>
                                  ))}
                                </div>
                              )}

                              {/* Overview Link */}
                              <div className="pt-2 border-t border-slate-100">
                                <Link
                                  href={item.href}
                                  className="text-[13.5px] font-bold text-[#0066CC] inline-flex items-center gap-1"
                                >
                                  <span>Explore All {item.title}</span>
                                  <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                              </div>

                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}

                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Contact & Action */}
            <div className="pt-5 mt-5 border-t border-slate-200 space-y-4">
              <div className="space-y-2 text-[13.5px] text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0066CC] shrink-0" />
                  <span>{siteConfig.contact.address.display}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0066CC] shrink-0" />
                  <a href={`tel:${siteConfig.contact.phone}`} className="font-semibold text-slate-800">
                    {siteConfig.contact.phoneFormatted}
                  </a>
                </div>
              </div>

              <Button
                href="/contact"
                variant="primary"
                size="md"
                className="w-full shadow-sm"
              >
                Inquire With Engineering
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
