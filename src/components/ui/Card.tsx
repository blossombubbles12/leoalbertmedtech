import React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "interactive" | "glass";
}

const variantStyles = {
  default:
    "bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.05)]",
  bordered:
    "bg-white border border-slate-200",
  elevated:
    "bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(0,59,115,0.06)]",
  interactive:
    "bg-white border border-slate-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#0066CC]/50 hover:shadow-[0_4px_16px_rgba(0,102,204,0.08)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
  glass:
    "bg-white/90 backdrop-blur-md border border-slate-200/80 shadow-xs",
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("rounded-lg p-6 relative overflow-hidden", variantStyles[variant], className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn("text-xl font-semibold leading-none tracking-tight text-slate-900 dark:text-white", className)}
      {...props}
    >
      {children}
    </h3>
  );
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-slate-500 dark:text-slate-400 mt-1", className)} {...props}>
      {children}
    </p>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-0", className)} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center pt-4 border-t border-slate-100 dark:border-slate-800 mt-4", className)} {...props}>
      {children}
    </div>
  );
}
