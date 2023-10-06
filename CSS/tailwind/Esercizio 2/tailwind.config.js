/**@type {import ('tailwindcss').config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
  darkMode: "class",
  theme: {
    extend: {
      // TODO: estendere media query per max-w 320px
      // screens:{
      //   'sm': '320px',
      // },
      colors: {
        primary: {
          1: "#0c1434",
          2: "#f84414",

        },
      },
    },
    fontFamily: {
      body: [
        // "Inter",
        // "ui-sans-serif",
        // "system-ui",
        // "-apple-system",
        // "system-ui",
        // "Segoe UI",
        // "Roboto",
        // "Helvetica Neue",
        // "Arial",
        // "Noto Sans",
        // "sans-serif",
        // "Apple Color Emoji",
        // "Segoe UI Emoji",
        // "Segoe UI Symbol",
        // "Noto Color Emoji",
      ],
      sans: [
        // "Inter",
        // "ui-sans-serif",
        // "system-ui",
        // "-apple-system",
        // "system-ui",
        // "Segoe UI",
        // "Roboto",
        // "Helvetica Neue",
        // "Arial",
        // "Noto Sans",
        // "sans-serif",
        // "Apple Color Emoji",
        // "Segoe UI Emoji",
        // "Segoe UI Symbol",
        // "Noto Color Emoji",
      ],
    },
  },
};
