/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-green": "#80B918",
        "dark-green": "#005E46"
      },
      fontFamily: {
        "lato": ["Lato", "sans-serif"],
        "ptsans": ["PT Sans", "sans-serif"],
        "logo": ["Marko One", "sans-serif"]
      }
    },
  },
  plugins: [],
}

