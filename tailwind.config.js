/** @type {import('tailwindcss').Config} */

const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['var(--font-satisfy)'],
      },
      colors: {
        background: "#f9fafb", // Light gray
        foreground: "#111827", // Dark gray (for text)
        primary: {
          DEFAULT: "#092c2f", // Primary brand color
          hover: "#1e40af",   // Darker shade for hover
        },
        secondary: {
          DEFAULT: "#d7f427", // Secondary accent
          hover: "#ebffca",   // Darker shade
        },
        accent: "#085fd1",
        muted: {
          DEFAULT: "#edeca2",
          hover: "#e0f561"
        },
        highlight: "#facc15", // Bright yellow for highlights
        error: "#ef4444", // Red for error states
        success: "#22c55e", // Green for success states
        info: "#3b82f6", // Blue for informational elements
      },
      maxWidth: {
        '8xl': '91rem',
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        blink: 'typing 4s steps(40, end) infinite, blink 1s step-start infinite',
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}