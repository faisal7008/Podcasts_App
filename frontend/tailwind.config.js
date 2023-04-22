/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "color-dark": "#393646",
        "color-bg": "#4F4557",
        "color-card": "#6D5D6E",
        "color-font": "#F4EEE0",
      },
    },
  },
  // plugins: [require("preline/plugin")],
};
