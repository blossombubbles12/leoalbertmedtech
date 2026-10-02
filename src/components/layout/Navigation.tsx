"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Sparkles, ChevronRight, ShieldCheck } from "lucide-react";
import { siteConfig, NavItem } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navigation({ className }: { className?: string }) {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
  };

  // Close dropdown on route change or click outside
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveMenu(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="Main Navigation"
      className={cn("hidden md:flex items-center gap-1 lg:gap-2 xl:gap-2.5", className)}
      onMouseLeave={handleMouseLeave}
    >
      {siteConfig.mainNav.map((item) => {
        const hasDropdown = Boolean(item.isMegaMenu || (item.children && item.children.length > 0));
        const isOpen = activeMenu === item.title;
        const isActive =
          pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <div
            key={item.title}
            className="relative"
            onMouseEnter={() => handleMouseEnter(item.title)}
          >
            {/* Nav Trigger Button / Link */}
            <Link
              href={item.href}
              className={cn(
                "inline-flex items-center gap-1 px-2.5 lg:px-3 py-2 text-[14.5px] lg:text-[15px] xl:text-[15.5px] font-medium tracking-tight rounded-md transition-all duration-150 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0066CC]",
                isOpen
                  ? "text-[#0066CC] bg-sky-50 font-semibold"
                  : isActive
                  ? "text-[#0066CC] font-semibold"
                  : "text-slate-700 hover:text-[#003B73] hover:bg-slate-50"
              )}
              aria-expanded={hasDropdown ? isOpen : undefined}
              aria-haspopup={hasDropdown ? "true" : undefined}
            >
              <span>{item.title}</span>
              {hasDropdown && (
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 text-slate-400 transition-transform duration-200",
                    isOpen && "rotate-180 text-[#0066CC]"
                  )}
                />
              )}
            </Link>

            {/* Active Indicator Underline */}
            {isActive && !isOpen && (
              <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#0066CC] rounded-full" />
            )}

            {/* 1. MEGA MENU PANEL (For Large Multi-Column Categories) */}
            {item.isMegaMenu && item.groups && (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute top-full -left-16 lg:-left-28 xl:-left-36 w-[700px] lg:w-[820px] pt-3 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-6 lg:p-7 overflow-hidden grid grid-cols-12 gap-6">
                      
                      {/* Left: Grouped Navigation Links */}
                      <div className="col-span-8 grid grid-cols-2 gap-6 border-r border-slate-100 pr-6">
                        {item.groups.map((group) => (
                          <div key={group.title} className="space-y-3">
                            <span className="text-[12px] font-bold uppercase tracking-wider text-slate-700 block pb-1 border-b border-slate-100">
                              {group.title}
                            </span>
                            <div className="space-y-1">
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="group/item block p-2.5 rounded-xl hover:bg-sky-50/70 transition-colors"
                                >
                                  <div className="flex items-center justify-between gap-1">
                                    <span className="text-[14px] font-bold text-slate-800 group-hover/item:text-[#0066CC] transition-colors">
                                      {subItem.title}
                                    </span>
                                    {subItem.badge && (
                                      <span className="text-[10.5px] font-bold font-mono px-1.5 py-0.5 rounded bg-sky-100/80 text-[#0066CC]">
                                        {subItem.badge}
                                      </span>
                                    )}
                                  </div>
                                  {subItem.description && (
                                    <p className="text-[12.5px] text-slate-600 line-clamp-2 mt-0.5 leading-normal">
                                      {subItem.description}
                                    </p>
                                  )}
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Bottom Bar within Left Section */}
                        <div className="col-span-2 pt-3 border-t border-slate-100 flex items-center justify-between">
                          <Link
                            href={item.href}
                            className="text-[13px] font-bold text-[#0066CC] hover:text-[#003B73] inline-flex items-center gap-1 group/all transition-colors"
                          >
                            <span>View All {item.title}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/all:translate-x-1" />
                          </Link>
                          <span className="text-[12px] text-slate-500 font-medium">
                            Clinical Architecture
                          </span>
                        </div>
                      </div>

                      {/* Right: Featured Showcase Card */}
                      {item.featured && (
                        <div className="col-span-4 flex flex-col justify-between">
                          <Link
                            href={item.featured.href}
                            className="group/featured block relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200 aspect-[4/3] shadow-xs"
                          >
                            <Image
                              src={item.featured.image}
                              alt={item.featured.title}
                              fill
                              className="object-cover group-hover/featured:scale-105 transition-transform duration-500"
                              sizes="260px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#001D3A]/90 via-[#001D3A]/30 to-transparent" />
                            {item.featured.tag && (
                              <div className="absolute top-2.5 left-2.5">
                                <span className="px-2 py-0.5 rounded text-[10.5px] font-bold uppercase tracking-wider bg-[#0066CC] text-white">
                                  {item.featured.tag}
                                </span>
                              </div>
                            )}
                            <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                              <h4 className="text-[14px] font-bold text-white group-hover/featured:text-sky-200 transition-colors">
                                {item.featured.title}
                              </h4>
                              <p className="text-[12px] text-slate-200 line-clamp-2 mt-0.5 leading-tight">
                                {item.featured.description}
                              </p>
                            </div>
                          </Link>

                          <div className="pt-3">
                            <Link
                              href="/contact"
                              className="block w-full text-center py-2 px-3 rounded-lg bg-slate-50 hover:bg-sky-50 border border-slate-200 text-[12.5px] font-bold text-slate-800 hover:text-[#0066CC] transition-colors"
                            >
                              Request Engineering Specs
                            </Link>
                          </div>
                        </div>
                      )}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

            {/* 2. STANDARD DROPDOWN (For Single Column Menus like About) */}
            {!item.isMegaMenu && item.children && (
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="absolute top-full left-0 w-72 pt-3 z-50"
                  >
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block p-3 rounded-xl hover:bg-sky-50/70 transition-colors group/sub"
                        >
                          <div className="text-[14px] font-bold text-slate-800 group-hover/sub:text-[#0066CC] transition-colors">
                            {child.title}
                          </div>
                          {child.description && (
                            <p className="text-[12.5px] text-slate-600 mt-0.5 leading-snug">
                              {child.description}
                            </p>
                          )}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}

          </div>
        );
      })}
    </nav>
  );
}
