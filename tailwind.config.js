/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        "ec-blue": "#001D6E",
        "ec-variant-blue": "#C4DDFF",
      },
    },
  },
  plugins: [],
};
