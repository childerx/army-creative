/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#68F86E",
      },
      screens: {
        print: { raw: "print" },
        mobile: { max: "635px" },
        tablet: { max: "1200px" },
        desktop: { max: "1280px" },
        "large-screen": { max: "1536px" },
      },
      fontFamily: {
        Merriweather: ["Merriweather", "serif"],
        museo: ["Museo sans", "Sans"],
        manrope: ["Manrope", "sans"],
        poppins: ["Poppins"],
        Raleway: ["Raleway", "sans"],
        montserrat: ["Montserrat", "sans"],
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        "drop-down": {
          "0%": { transform: "rotateX(-90deg)", opacity: "0" },
          "50%": { transform: "rotateX(20deg)" },
          "100%": { transform: "rotateX(0deg)", opacity: "1" },
        },
        "nav-show": {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        appearUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "0.8" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "drop-down": "drop-down 0.3s  ease-in-out forwards ",
        "nav-show": "nav-show 0.3s  ease-in-out forwards ",
        appearUp: "appearUp 0.3s  ease-in-out alternate ",
      },
    },
  },
  plugins: [],
};
