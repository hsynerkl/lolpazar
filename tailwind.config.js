/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          50: "#d9dae9",
          100: "#25273a",
          200: "#3f4257",
          300: "#323448",
          400: "#191a27",
        },
        yellow: {
          50: "#ffc107",
        },
        purple: {
          50: "#cba3ff",
        },
        blue: {
          50: "#9ddfff",
        },
      },

      container: {
        center: true,
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
