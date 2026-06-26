import type { Config } from "tailwindcss";

/**
 * Tokens map to CSS custom properties defined in app/globals.css so the same
 * Tailwind class names work across light/dark themes (see design-system/MASTER.md §2).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        "surface-2": "var(--surface-2)",
        border: "var(--border)",
        "border-strong": "var(--border-strong)",
        text: "var(--text)",
        "text-muted": "var(--text-muted)",
        "text-faint": "var(--text-faint)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-contrast": "var(--accent-contrast)",
        "accent-soft": "var(--accent-soft)",
      },
      fontFamily: {
        // Latin from skill fonts; system-ui covers the Cyrillic UI copy.
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 7vw, 5.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        h1: ["clamp(2rem, 4.5vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
        h3: ["clamp(1.2rem, 2vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
      },
      borderRadius: {
        DEFAULT: "10px",
        card: "14px",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        "out-soft": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
