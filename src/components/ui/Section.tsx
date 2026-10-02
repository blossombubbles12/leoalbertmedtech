import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "surface" | "dark" | "gradient" | "slate" | "navy";
}

const spacingClasses = {
  none: "py-0",
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-16 md:py-20 lg:py-24",
  xl: "py-20 md:py-28 lg:py-32",
};

const backgroundClasses = {
  default: "bg-transparent",
  muted: "bg-slate-50",
  slate: "bg-slate-50/80",
  surface: "bg-white",
  dark: "bg-slate-950 text-white",
  navy: "bg-[#00274D] text-white",
  gradient: "bg-gradient-to-b from-slate-50 to-white",
};

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = "md", background = "default", children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("w-full relative", spacingClasses[spacing], backgroundClasses[background], className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";
