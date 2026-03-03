/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      // Custom colors used in the portfolio
      colors: {
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "purple-400": "#a855f7",
        "purple-500": "#8b5cf6",
        "purple-600": "#7c3aed",
      },

      // Spotlight animation (important for hero)
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },

      keyframes: {
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
};
