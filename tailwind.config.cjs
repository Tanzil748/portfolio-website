/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Raleway", "sans-serif"],
        paragraph: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
