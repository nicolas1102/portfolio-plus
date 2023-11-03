/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
    },
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
    },
  },
  plugins: [],
  darkMode: "class",
};
