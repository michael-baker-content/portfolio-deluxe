/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#201d1d",
        muted: "#675f5b",
        paper: "#fffaf1",
        cream: "#fff2d7",
        coral: "#f26b57",
        chartreuse: "#c8d84b",
        sky: "#8ec7df",
        portfolioBlue: "#285c8f",
        gold: "#d29a25",
      },
      boxShadow: {
        hard: "8px 8px 0 rgba(32, 29, 29, 0.92)",
        soft: "0 24px 70px rgba(61, 44, 28, 0.16)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
