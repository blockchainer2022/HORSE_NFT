module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        primary: {
          400: "#182535",
        },
        brown: "#655437",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Broken Console", "sans-serif"],
        serif: ["Roboto", "sans-serif"],
      },
      textColor: {
        primary: {
          400: "#182535",
        },
      },
      borderColor: {
        primary: {
          400: "#182535",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
