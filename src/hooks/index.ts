"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect viewport media query matches.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

/**
 * Hook to track scroll position and scrolled state (useful for sticky headers).
 */
export function useScrollPosition(threshold: number = 20) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > threshold);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return { isScrolled, scrollY };
}

/**
 * Hook for modal/disclosure/accordion toggle states.
 */
export function useDisclosure(initialState: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return { isOpen, open, close, toggle, setIsOpen };
}

/**
 * Hook to detect user's preference for reduced motion.
 */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
