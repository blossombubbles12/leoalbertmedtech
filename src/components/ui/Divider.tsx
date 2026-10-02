import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
}

export function Divider({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: DividerProps) {
  if (orientation === "vertical") {
    return (
      <div
        role={decorative ? "none" : "separator"}
        aria-orientation="vertical"
        className={cn("inline-block w-px h-full min-h-[1em] bg-slate-200 dark:bg-slate-800 self-stretch", className)}
        {...props}
      />
    );
  }

  return (
    <hr
      role={decorative ? "none" : "separator"}
      aria-orientation="horizontal"
      className={cn("border-0 border-t border-slate-200 dark:border-slate-800 my-6 w-full", className)}
      {...props}
    />
  );
}
