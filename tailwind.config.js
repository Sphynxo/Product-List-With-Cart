/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Text", "serif"],
      },

      colors: {
        red: "#C73B0F",
        rose900: "#260F08",
        rose500: "#87635A",
        rose400:"#AD8A85",
        rose300: "#CAAFA7",
        rose100: "#F5EEEC",
        rose50: "#FCF8F6",
        green: "#1EA575"
      }
    },
  },
  plugins: [],
};
