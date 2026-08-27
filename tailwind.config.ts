import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#F8F1EC",
        night: "#241820",
        ink: "#23181B",
        wine: {
          DEFAULT: "#6E2A3C",
          dark: "#551F2E",
          light: "#8A3E52",
        },
        gold: {
          DEFAULT: "#C6A15B",
          light: "#D9BC85",
        },
        blush: "#EFE1DA",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      maxWidth: {
        content: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;
