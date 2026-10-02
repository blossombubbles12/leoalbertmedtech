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
  theme?: "light" | "dark";
}

export function Breadcrumb({
  items,
  className,
  showHomeIcon = true,
  theme = "light",
}: BreadcrumbProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", url: "/" },
    ...items,
  ];

  const isDark = theme === "dark";

  return (
    <>
      <BreadcrumbJsonLd items={fullItems} />
      <nav
        aria-label="Breadcrumb"
        className={cn(
          "flex items-center text-sm py-2",
          isDark ? "text-sky-200" : "text-slate-500 dark:text-slate-400",
          className
        )}
      >
        <ol className="flex items-center space-x-2 flex-wrap">
          {fullItems.map((item, index) => {
            const isLast = index === fullItems.length - 1;
            return (
              <li key={item.url} className="inline-flex items-center">
                {index > 0 && (
                  <ChevronRight
                    className={cn(
                      "w-3.5 h-3.5 mx-1.5 flex-shrink-0",
                      isDark ? "text-sky-300/70" : "text-slate-400"
                    )}
                  />
                )}
                {isLast ? (
                  <span
                    className={cn(
                      "font-semibold truncate max-w-xs",
                      isDark ? "text-white" : "text-slate-800 dark:text-slate-200"
                    )}
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className={cn(
                      "transition-colors inline-flex items-center gap-1",
                      isDark
                        ? "text-sky-200 hover:text-white"
                        : "hover:text-slate-900 dark:hover:text-white"
                    )}
                  >
                    {index === 0 && showHomeIcon && (
                      <Home className={cn("w-3.5 h-3.5", isDark ? "text-sky-300" : "")} />
                    )}
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
