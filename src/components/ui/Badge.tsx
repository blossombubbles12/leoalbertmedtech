import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "primary" | "secondary" | "outline" | "teal" | "success" | "muted";
  size?: "sm" | "md";
}

const variantStyles = {
  primary:
    "bg-[#003B73] text-white",
  secondary:
    "bg-sky-50 text-[#0066CC] border border-sky-200/80 font-semibold",
  teal:
    "bg-teal-50 text-teal-800 border border-teal-200/80 font-semibold",
  outline:
    "border border-slate-300 text-slate-700 bg-white",
  success:
    "bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold",
  muted:
    "bg-slate-100 text-slate-700 border border-slate-200",
};

const sizeStyles = {
  sm: "px-2.5 py-1 text-[12px] font-semibold rounded-md",
  md: "px-3.5 py-1 text-[13px] sm:text-[14px] font-semibold rounded-md tracking-wide uppercase",
};

export function Badge({
  className,
  variant = "secondary",
  size = "md",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
