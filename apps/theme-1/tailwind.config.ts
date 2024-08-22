import { Config } from "tailwindcss";
import sharedConfig from "../../packages/ui/tailwind.config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)", // Light shade
          500: "var(--color-primary-500)", // Main shade
          900: "var(--color-primary-900)", // Dark shade
        },
        secondary: {
          100: "var(--color-secondary-100)", // Light shade
          500: "var(--color-secondary-500)", // Main shade
          900: "var(--color-secondary-900)", // Dark shade
          contrast: "var(--color-secondary-contrast)" 
        },
        ...sharedConfig?.theme?.extend?.colors || {},
      },
      backgroundImage:{
        linear: "var(--linear)",
      }
    },
  },
  plugins: [],
};

export default config;


