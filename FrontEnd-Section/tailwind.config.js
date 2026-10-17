/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2E3A2F",
        secondary: "#6B7F5B",
        tertiary: "#D9C9B2",
        accent: "#C96F4F",
        bg: "#F8F6EE",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        clay: "8px 8px 20px rgba(46,58,47,0.12), -8px -8px 20px rgba(255,255,255,0.9)",
        "clay-sm":
          "5px 5px 12px rgba(46,58,47,0.10), -5px -5px 12px rgba(255,255,255,0.85)",
        "clay-lg":
          "14px 14px 32px rgba(46,58,47,0.15), -14px -14px 32px rgba(255,255,255,0.95)",
        "clay-inset":
          "inset 6px 6px 14px rgba(46,58,47,0.15), inset -6px -6px 14px rgba(255,255,255,0.9)",
        "clay-accent":
          "8px 8px 20px rgba(201,111,79,0.35), -8px -8px 20px rgba(255,255,255,0.85)",
      },
      borderRadius: {
        clay: "28px",
        "clay-lg": "36px",
      },
    },
  },
  plugins: [],
};
