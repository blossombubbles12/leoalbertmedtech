import { type Variants, type Transition } from "framer-motion";

export const defaultTransition: Transition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1], // Smooth cubic-bezier
};

export const gentleTransition: Transition = {
  duration: 0.7,
  ease: [0.16, 1, 0.3, 1],
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: defaultTransition,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: defaultTransition,
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: defaultTransition,
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: defaultTransition,
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const hoverElevate = {
  rest: { y: 0, transition: { duration: 0.2, ease: "easeOut" } },
  hover: { y: -4, transition: { duration: 0.2, ease: "easeOut" } },
};
