// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode support
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-main": "#FF0000", // This is slate-100, a clean, light gray
      },
    },
  },
  plugins: [],
};
