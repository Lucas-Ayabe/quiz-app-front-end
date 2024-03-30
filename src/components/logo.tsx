import { PropsWithChildren } from "react";
import Image from "next/image";

export function Logo({ src, children }: PropsWithChildren<{ src: string }>) {
  return (
    <div className="flex items-center gap-6">
      <Image
        className="w-10 h-10 sm:w-14 sm:h-14"
        src={src}
        alt=""
        width={56}
        height={56}
      />

      <span className="text-[1.125rem] sm:text-heading-s font-medium">
        {children}
      </span>
    </div>
  );
}
