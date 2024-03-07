import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./docs/**/*.mdx", "./api/**/*.mdx", "./blog/**/*.mdx"],
  theme: {
    extend: {
      colors: {
        // primary: "rgb(var(--color-primary) / <alpha-value>)",
        // text: {
        //   DEFAULT: "rgb(var(--color-text) / <alpha-value>)",
        //   secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        // },
        // border: {
        //   DEFAULT: "rgb(var(--color-border) / <alpha-value>)",
        //   default: "rgb(var(--color-border) / <alpha-value>)",
        //   secondary: "rgb(var(--color-border-secondary) / <alpha-value>)",
        // },
        // neutral: {
        //   "50": "#fafafa",
        //   "100": "#f5f5f5",
        //   "200": "#e5e5e5",
        //   "300": "#d4d4d4",
        //   "400": "#a3a3a3",
        //   "500": "#737373",
        //   "600": "#525252",
        //   "700": "#404040",
        //   "800": "#262626",
        //   "900": "#171717",
        //   "950": "#0a0a0a",
        // },
      },
    },
  },
  darkMode: ["selector", '[data-theme="dark"]'],
  corePlugins: {
    preflight: false,
    container: false,
  },
} satisfies Config;
