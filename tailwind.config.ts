import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      colors: {
        bark: "#1A2E1A",      // deep forest — dark sections, footer
        sage: "#3D6B4E",      // muted green — primary brand
        cactus: "#7BAF6E",    // vibrant green — accents, CTAs, highlights
        terra: "#C4915E",     // warm terracotta — secondary accent
        ink: "#1C2B1C",       // dark green-black — body text
        paper: "#F7F5F0",     // warm off-white — page background
      },
    },
  },
  plugins: [],
};
export default config;
