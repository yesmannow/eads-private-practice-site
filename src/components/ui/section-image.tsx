import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

type SectionImageProps = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
} & Omit<ComponentPropsWithoutRef<typeof Image>, "src" | "alt" | "width" | "height">;

export function SectionImage({
  src,
  alt,
  width = 1280,
  height = 720,
  className = "",
  priority = false,
  ...props
}: SectionImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`rounded-2xl object-cover ${className}`}
      priority={priority}
      {...props}
    />
  );
}

