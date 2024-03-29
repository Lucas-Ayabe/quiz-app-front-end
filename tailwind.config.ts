import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        small: "0 16 40px rgba(143, 160, 193, 0.14)",
      },
      fontFamily: {
        sans: ["var(--font-rubik)"],
      },
      fontSize: {
        display: "9rem",
        "heading-l": "4rem",
        "heading-m": "2.25rem",
        "heading-s": "1.75rem",
        "body-m": "0.75rem",
      },
      colors: {
        primary: {
          DEFAULT: "#A729F5",
          light: "#F6E7FF",
        },
        success: "#26D782",
        danger: "#EE5454",
        dark: {
          1: "#626C7F",
          2: "#3B4D66",
          3: "#313E51",
        },
        light: {
          1: "#F4F6FA",
          2: "#ABC1E1",
        },
      },
      backgroundImage: {
        lightened:
          "linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
