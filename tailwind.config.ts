import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme.js";
import { extendedTheme } from "./app/utils/extended-theme";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      ...extendedTheme,
      fontFamily: {
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
