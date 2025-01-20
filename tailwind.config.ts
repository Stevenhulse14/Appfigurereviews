import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
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
      fontSize: {
        xxs: "0.625rem",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.01)", opacity: "1" },
        },
      },
      animation: {
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
