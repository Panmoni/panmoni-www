/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
        readex: ["Readex Pro Variable", "sans-serif"],
      },
      colors: {
        brand: {
          green: "#b2cd54",
          dark: "#141a43",
        },
        background: "#F8F6F0",
        accent: "#FFF8E7",
      },
    },
  },
  variants: {},
  plugins: [],
};
