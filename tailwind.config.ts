import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./docs/**/*.mdx",
    "./api/**/*.mdx",
    "./blog/**/*.mdx",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
  darkMode: ["selector", '[data-theme="dark"]'],
  corePlugins: {
    // preflight: false,
  },
} satisfies Config;
