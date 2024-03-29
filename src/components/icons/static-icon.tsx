import Image, { ImageProps } from "next/image";
import { twMerge } from "tailwind-merge";

export function StaticIcon({ className, alt, ...props }: ImageProps) {
  return (
    <Image {...props} alt={alt} className={twMerge("w-14 h-14", className)} />
  );
}
