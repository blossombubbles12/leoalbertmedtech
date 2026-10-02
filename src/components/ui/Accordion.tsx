"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultExpandedIds?: string[];
  className?: string;
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultExpandedIds = [],
  className,
}: AccordionProps) {
  const [expandedIds, setExpandedIds] = useState<string[]>(defaultExpandedIds);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setExpandedIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setExpandedIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn("divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800", className)}>
      {items.map((item) => {
        const isExpanded = expandedIds.includes(item.id);
        return (
          <div key={item.id} className="py-2">
            <h3>
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isExpanded}
                aria-controls={`accordion-content-${item.id}`}
                id={`accordion-header-${item.id}`}
                className="flex w-full items-center justify-between py-4 text-left font-medium text-slate-900 dark:text-white transition-all hover:text-sky-700 dark:hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-md"
              >
                <span>{item.title}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-slate-500 transition-transform duration-200",
                    isExpanded && "rotate-180 text-sky-600"
                  )}
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  id={`accordion-content-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-header-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-4 pt-1 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
