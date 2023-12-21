import type { Config } from "tailwindcss";

export const extendedTheme = {
  colors: {
    primary: "rgb(var(--primary) / <alpha-value>)",
    background: "rgb(var(--background) / <alpha-value>)",
    foreground: {
      DEFAULT: "rgb(var(--foreground) / <alpha-value>)",
      active: "rgb(var(--foreground-active) / <alpha-value>)",
    },
  },
  animation: {
    slideIn: "fadedSlideIn 400ms cubic-bezier(0.16, 1, 0.3, 1)",
  },
  keyframes: {
    fadeIn: {
      "0%": {
        opacity: "0",
      },
      "100%": {
        opacity: "1",
      },
    },
    fadedSlideIn: {
      "0%": {
        opacity: "0",
        transform: "translateY(-8px)",
      },
      "100%": {
        opacity: "1",
        transform: "translateY(0)",
      },
    },
    popIn: {
      "0%": {
        opacity: "0",
        transform: "translate(-50%, -48%) scale(0.96)",
      },
      "100%": {
        opacity: "1",
        transform: "translate(-50%, -50%) scale(1)",
      },
    },
  },
} satisfies Config["theme"];
