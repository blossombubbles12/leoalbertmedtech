import React from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface ImageWrapperProps extends Omit<ImageProps, "alt"> {
  alt: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "auto";
  wrapperClassName?: string;
}

const aspectRatios = {
  "16/9": "aspect-video",
  "4/3": "aspect-4/3",
  "1/1": "aspect-square",
  "21/9": "aspect-[21/9]",
  auto: "",
};

export function ImageWrapper({
  className,
  wrapperClassName,
  aspectRatio = "auto",
  alt,
  src,
  fill,
  ...props
}: ImageWrapperProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-slate-100 dark:bg-slate-800",
        aspectRatios[aspectRatio],
        wrapperClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={cn("object-cover transition-all duration-300", className)}
        {...props}
      />
    </div>
  );
}
