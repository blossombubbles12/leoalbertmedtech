import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { BreadcrumbItem } from "@/types";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHomeIcon?: boolean;
}

export function Breadcrumb({
  items,
  className,
  showHomeIcon = true,
}: BreadcrumbProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    ...items,
  ];

  return (
    <>
      <BreadcrumbJsonLd items={fullItems} />
      <nav aria-label="Breadcrumb" className={cn("flex items-center text-sm text-slate-500 dark:text-slate-400 py-3", className)}>
        <ol className="flex items-center space-x-2 flex-wrap">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.url} className="inline-flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-3.5 h-3.5 mx-1.5 text-slate-400 flex-shrink-0" />
                )}
                {isLast ? (
                  <span
                    className="font-medium text-slate-800 dark:text-slate-200 truncate max-w-xs"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="hover:text-slate-900 dark:hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    {index === 0 && showHomeIcon && <Home className="w-3.5 h-3.5" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
