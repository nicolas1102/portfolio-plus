/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {},
    fontFamily: {
      inter: ["inter", "serif"],
    },
    extend: {
      colors: {
        "primary-100": "#77c69f",
        "primary-200": "#4fb07f",
        "primary-300": "#195c3b",
        "primary-400": "#133826",
        "primary-500": "#0a1f15",
        "secondary-100": "#39496c",
        "secondary-200": "#263453",
        "secondary-300": "#1d263a",
        "secondary-400": "#111621",
        "secondary-500": "#0f121a",
        "tertiary-100": "#B8E4F0",
        "tertiary-200": "#72C9E1",
        "tertiary-300": "#2BAFD3",
        "tertiary-400": "#1D748C",
        "tertiary-500": "#0E3A46",
      },
      boxShadow: {
        "sm2": "2px 2px rgba(6, 7, 10, 0.2)",
        "sm2-hover": "3px 3px rgba(6, 7, 10, 1)",
        "sm2-dk": "2px 2px rgba(255, 255, 255, 0.2)",
        "sm2-hover-dk": "3px 3px rgba(255, 255, 255, 1)",
        "sm3": "3px 3px rgba(6, 7, 10, 0.2)",
        "sm3-hover": "5px 5px rgba(6, 7, 10, 1)",
        "sm3-dk": "3px 3px rgba(255, 255, 255, 0.2)",
        "sm3-hover-dk": "5px 5px rgba(255, 255, 255, 1)",
        "md3": "5px 5px rgba(6, 7, 10, 0.2)",
        "md3-hover": "7px 7px rgba(6, 7, 10, 1)",
        "md3-dk": "5px 5px rgba(255, 255, 255, 0.2)",
        "md3-hover-dk": "7px 7px rgba(255, 255, 255, 1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
