import React from "react";
import { cn } from "@/lib/utils";

export type HeadingLevel = "display" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
}

const levelStyles: Record<HeadingLevel, string> = {
  display:
    "text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]",
  h1:
    "text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight",
  h2:
    "text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white leading-snug",
  h3:
    "text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white leading-snug",
  h4:
    "text-lg sm:text-xl font-semibold text-slate-900 dark:text-white",
  h5:
    "text-base font-semibold text-slate-900 dark:text-white",
  h6:
    "text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300",
};

export function Heading({
  className,
  level = "h2",
  as,
  children,
  ...props
}: HeadingProps) {
  const defaultTag = level === "display" ? "h1" : level;
  const Component = as || defaultTag;

  return (
    <Component
      className={cn(levelStyles[level], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
