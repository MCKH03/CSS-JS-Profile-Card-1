/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

const withOpacity = function (variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    } else return `rgba(var(${variableName}))`;
  };
};

module.exports = {
  content: ["./index.html", "./main.js"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["'Lato'", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {},
      colors: {
        "customPurple-1": "rgb(213, 198, 255)",
        "customPurple-2": "#A79AE0",
        "customPurple-3": "rgba(144, 130, 236, 0.65)",
        "customPurple-4": "#26235c",
      },
      boxShadow: {
        custom: "0 4px 75px rgba(0,0,0,0.25)",
      },
      keyframes: {},
      animation: {},
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
};
