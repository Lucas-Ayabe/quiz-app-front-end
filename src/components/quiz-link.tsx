import Image, { ImageProps } from "next/image";
import Link from "next/link";

import { PropsWithChildren } from "react";

type QuizLinkProps = PropsWithChildren<{
  href: string;
  src: ImageProps["src"];
}>;

export function QuizLink({ src, href, children }: QuizLinkProps) {
  return (
    <Link
      href={href}
      className="quiz-link group flex gap-8 items-center p-5 bg-white border-[3px] border-white rounded-box shadow-small dark:bg-dark-2 dark:border-dark-2 dark:shadow-small-dark"
    >
      <Image src={src} width={56} height={56} alt="" />
      <span className="text-heading-s font-medium text-dark-3 dark:text-white">
        {children}
      </span>
    </Link>
  );
}
