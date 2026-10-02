"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface SlideData {
  id: string;
  badge: string;
  headline: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  image: string;
  imageAlt: string;
  highlightTag?: string;
}

const slides: SlideData[] = [
  {
    id: "slide-1",
    badge: "ADVANCED MEDICAL TECHNOLOGY",
    headline: "Engineering Precision for Next-Generation Healthcare",
    description:
      "Leonardo Adalbert Medical Technology designs, develops, and delivers intelligent clinical hardware, precision telemetry, and digital health platforms for modern healthcare organizations.",
    primaryCta: { label: "Explore Medical Technologies", href: "/medical-technologies" },
    secondaryCta: { label: "Our Solutions", href: "/solutions" },
    image: "/rodrigo-porto-vfy71fExF7g-advanced operation.jpg",
    imageAlt: "Advanced operating room suite with high-precision medical technology systems",
    highlightTag: "Integrated Surgical Hardware",
  },
  {
    id: "slide-2",
    badge: "CRITICAL CARE & DIAGNOSTIC TELEMETRY",
    headline: "Real-Time Biometric Intelligence and Clinical Precision",
    description:
      "Empowering clinical teams with synchronized telemetry, low-latency vital signal monitoring, and high-fidelity diagnostic data across operating suites and acute care environments.",
    primaryCta: { label: "View Telemetry Systems", href: "/medical-technologies" },
    secondaryCta: { label: "Technical Resources", href: "/resources" },
    image: "/slider1.jpg",
    imageAlt: "Clinical medical tablet displaying high-fidelity diagnostic telemetry and patient vital data",
    highlightTag: "Real-Time Telemetry Data",
  },
  {
    id: "slide-3",
    badge: "HIGH-ACUITY SURGICAL SYSTEMS",
    headline: "Integrated Environments Built for Uncompromising Reliability",
    description:
      "Delivering advanced surgical optical arrays, ergonomic workstation architecture, and sterile instrumentation designed for complex operative procedures.",
    primaryCta: { label: "Surgical Solutions", href: "/solutions" },
    secondaryCta: { label: "Inquire With Engineering", href: "/contact" },
    image: "/cesar-badilla-miranda-0m4ZNiUcFy8-.jpg",
    imageAlt: "State-of-the-art operating theatre illumination and surgical equipment array",
    highlightTag: "Clinical Suite Architecture",
  },
  {
    id: "slide-4",
    badge: "INNOVATION & DIGITAL PLATFORMS",
    headline: "Pioneering the Future of Connected Medical Devices",
    description:
      "From robotic actuation to modular laboratory automation, we bridge hardware precision with enterprise-grade interoperability to advance patient care worldwide.",
    primaryCta: { label: "Discover Innovation", href: "/innovation" },
    secondaryCta: { label: "Corporate Overview", href: "/about" },
    image: "/national-cancer-institute-mBrfAiw_CZA-tech.jpg",
    imageAlt: "Precision bio-engineering robotic instrumentation and high-throughput laboratory automation",
    highlightTag: "Bio-Robotic Engineering",
  },
];

const AUTOPLAY_INTERVAL = 7000; // 7 seconds per slide

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full min-h-[620px] sm:min-h-[680px] lg:min-h-[740px] flex items-center overflow-hidden bg-[#001D3A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Leonardo Adalbert Featured Medical Technologies"
    >
      {/* Background Image Carousel with AnimatePresence */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide.id}
          custom={direction}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentSlide.image}
            alt={currentSlide.imageAlt}
            fill
            priority={currentIndex === 0}
            className="object-cover object-center transform scale-100"
            sizes="100vw"
          />

          {/* High-Contrast Multi-Layer Medical Grade Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#001730]/95 via-[#00274D]/85 to-[#003B73]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001730] via-transparent to-[#001730]/40" />
          
          {/* Subtle Precision Grid Effect */}
          <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Foreground Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-8 xl:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="space-y-5"
              >
                {/* Badge / Category Label */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#60A5FA] text-[13px] sm:text-[14px] font-semibold tracking-wider uppercase">
                  <ShieldCheck className="w-4 h-4 text-[#38BDF8]" />
                  <span>{currentSlide.badge}</span>
                </div>

                {/* Main High-Impact Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-white tracking-tight leading-[1.15]">
                  {currentSlide.headline}
                </h1>

                {/* Body Supporting Copy */}
                <p className="text-[17px] sm:text-[18px] lg:text-[19px] text-slate-200 leading-[1.65] max-w-2xl font-normal">
                  {currentSlide.description}
                </p>

                {/* Primary & Secondary Call to Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-3">
                  <Button
                    href={currentSlide.primaryCta.href}
                    variant="primary"
                    size="lg"
                    className="shadow-lg shadow-sky-900/30 group bg-[#0066CC] hover:bg-[#0052A3]"
                  >
                    <span>{currentSlide.primaryCta.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>

                  {currentSlide.secondaryCta && (
                    <Button
                      href={currentSlide.secondaryCta.href}
                      variant="white"
                      size="lg"
                      className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white"
                    >
                      {currentSlide.secondaryCta.label}
                    </Button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Floating High-Tech Spec Card */}
          <div className="hidden lg:block lg:col-span-4 xl:col-span-5">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white max-w-md ml-auto shadow-2xl"
              >
                <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-4">
                  <span className="text-xs uppercase tracking-widest text-slate-300 font-bold">
                    System Architecture
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Clinical Ready
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {currentSlide.highlightTag}
                </h3>
                <p className="text-[14.5px] text-slate-200 leading-relaxed mb-5">
                  Engineered with fail-safe architecture, modular sub-assemblies, and seamless integration for modern hospital networks.
                </p>

                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/15 text-xs">
                  <div>
                    <div className="text-slate-400 font-medium">Compliance</div>
                    <div className="text-slate-100 font-semibold mt-0.5">Medical Grade</div>
                  </div>
                  <div>
                    <div className="text-slate-400 font-medium">Platform</div>
                    <div className="text-slate-100 font-semibold mt-0.5">LAT Interoperable</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Carousel Controls Bottom Bar */}
      <div className="absolute bottom-6 sm:bottom-8 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Slide Indicator Bars */}
          <div className="flex items-center gap-2.5 sm:gap-3" role="tablist" aria-label="Slides">
            {slides.map((slide, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`relative h-2 sm:h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                    isActive ? "w-10 sm:w-14 bg-[#38BDF8]" : "w-3 sm:w-4 bg-white/40 hover:bg-white/60"
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.badge}`}
                  aria-selected={isActive}
                  role="tab"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeSlideIndicator"
                      className="absolute inset-0 bg-[#38BDF8] rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Navigation Controls (Prev / Next & Pause) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused((prev) => !prev)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
              title={isPaused ? "Play slideshow" : "Pause slideshow"}
            >
              {isPaused ? <Play className="w-4 h-4 fill-white text-white" /> : <Pause className="w-4 h-4" />}
            </button>

            <button
              onClick={prevSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
