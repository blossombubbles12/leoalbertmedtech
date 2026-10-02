import React from "react";
import { cn } from "@/lib/utils";

export type TextVariant = "lead" | "body" | "small" | "caption" | "muted";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: "p" | "span" | "div" | "label";
}

const variantStyles: Record<TextVariant, string> = {
  lead: "text-[18px] sm:text-[20px] text-slate-600 dark:text-slate-300 leading-relaxed font-normal",
  body: "text-[17px] sm:text-[18px] text-slate-600 dark:text-slate-300 leading-[1.7]",
  small: "text-[14px] sm:text-[15px] text-slate-500 dark:text-slate-400 leading-relaxed",
  caption: "text-[13px] sm:text-[14px] text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold",
  muted: "text-[14px] sm:text-[15px] text-slate-400 dark:text-slate-500",
};

export function Text({
  className,
  variant = "body",
  as: Component = "p",
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
