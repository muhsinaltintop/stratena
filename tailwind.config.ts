import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#564a64",
        navy: "#1E2A38",
        charcoal: "#14202B",
        "background-light": "#f7f7f7",
        "background-dark": "#19171b",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
