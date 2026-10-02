import React from "react";
import Image from "next/image";
import { Container } from "./Container";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { Breadcrumb } from "./Breadcrumb";
import { Badge } from "./Badge";
import { BreadcrumbItem } from "@/types";
import { cn } from "@/lib/utils";

export interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumbItems?: BreadcrumbItem[];
  badge?: string;
  badgeTag?: string;
  imageSrc?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  description,
  breadcrumbItems,
  badge,
  badgeTag,
  imageSrc = "/piron-guillaume-U4FyCp3-KzY-Hero.jpg",
  imageAlt,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "relative bg-[#001D3A] text-white overflow-hidden py-14 sm:py-16 lg:py-20 border-b border-white/10",
        className
      )}
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          priority
          className="object-cover object-center opacity-30 mix-blend-luminosity scale-105 transition-transform duration-700"
          sizes="100vw"
        />

        {/* Multi-Stop Rich Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00142A]/95 via-[#00274D]/85 to-[#003B73]/75 backdrop-blur-[1.5px]" />
        
        {/* Radial Ambient Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-400/20 via-transparent to-transparent" />
        
        {/* Subtle Grid Accent */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Foreground Content */}
      <Container size="xl" className="relative z-10">
        {breadcrumbItems && breadcrumbItems.length > 0 && (
          <div className="mb-4">
            <Breadcrumb items={breadcrumbItems} theme="dark" />
          </div>
        )}

        <div className="max-w-4xl space-y-4">
          {(badge || badgeTag) && (
            <div className="inline-flex items-center gap-2 flex-wrap">
              {badge && (
                <Badge
                  variant="primary"
                  className="bg-sky-500/25 text-sky-200 border-sky-400/40 text-xs font-semibold px-3 py-1 shadow-sm"
                >
                  {badge}
                </Badge>
              )}
              {badgeTag && (
                <span className="text-[12px] font-mono font-semibold text-slate-200 bg-white/10 backdrop-blur-md px-2.5 py-0.5 rounded border border-white/20">
                  {badgeTag}
                </span>
              )}
            </div>
          )}

          <Heading
            level="h1"
            className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-sm leading-tight"
          >
            {title}
          </Heading>

          {description && (
            <Text
              variant="lead"
              className="text-slate-200 max-w-3xl text-base sm:text-lg lg:text-xl leading-relaxed font-normal"
            >
              {description}
            </Text>
          )}

          {children && <div className="pt-2">{children}</div>}
        </div>
      </Container>
    </div>
  );
}
