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
        primary: "#fe6209",
        gradient: {
          start: "#ff8210",
          end: "#fd4201",
        },
        orange: {
          light: "#ff9f50",
          lighter: "#ffd4ad",
        },
        white: {
          opacity: "rgba(255, 255, 255, 0.85)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
