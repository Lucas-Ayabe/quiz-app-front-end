import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { twJoin } from "tailwind-merge";
import { BgCircleBottom, BgCircleTop } from "@/components/icons";

const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "400"],
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: "Quiz",
  description: "Quizz App Front-End",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twJoin(
          rubik.variable,
          "font-sans relative bg-light-1 text-dark-3 dark:bg-dark-3 dark:text-white"
        )}
      >
        <BgCircleTop />
        {children}
        <BgCircleBottom />
      </body>
    </html>
  );
}
