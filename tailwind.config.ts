import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5A3A1A", 
        accent: "#C89B5C",   
        background: "#F7F2EC",   
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"], 
        body: ["var(--font-body)", "sans-serif"],       
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          xl: "1200px",
        },
      },
    },
  },
  plugins: [],
};
export default config;