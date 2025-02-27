const colors = require('tailwindcss/colors')


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
      colors: {
        white: {
          DEFAULT: colors.white,
          100: "#ffffff1A",
          500: "#ffffff80",
          900: "#ffffffE6"
        },
        primary: {
          DEFAULT: "#093047",
          900: "#00546c"
        },
        secondary: "#86C4EC"
      }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
