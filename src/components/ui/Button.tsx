import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "medical" | "white";
  size?: "sm" | "md" | "lg" | "icon";
  href?: string;
  isExternal?: boolean;
  isLoading?: boolean;
}

const variantClasses = {
  primary:
    "bg-[#0066CC] text-white hover:bg-[#0052A3] active:bg-[#004080] shadow-xs border border-transparent font-semibold",
  secondary:
    "bg-[#003B73] text-white hover:bg-[#00274D] active:bg-[#001D3A] shadow-xs border border-transparent font-semibold",
  outline:
    "border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100",
  ghost:
    "text-slate-700 hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200",
  medical:
    "bg-[#0066CC] text-white hover:bg-[#0052A3] shadow-xs",
  white:
    "bg-white text-[#003B73] hover:bg-slate-50 shadow-xs border border-slate-200 font-semibold",
};

const sizeClasses = {
  sm: "h-9 px-4 text-[13.5px] font-semibold rounded-md gap-1.5",
  md: "h-11 px-5 text-[15px] font-semibold rounded-md gap-2",
  lg: "h-12 px-7 text-[16px] font-bold tracking-tight rounded-md gap-2.5",
  icon: "h-10 w-10 p-0 rounded-md items-center justify-center",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      isExternal,
      isLoading,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-200 select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      variantClasses[variant],
      sizeClasses[size],
      className
    );

    if (href) {
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {children}
          </a>
        );
      }
      return (
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={baseStyles}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
