/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      inter: ["inter", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        "primary-100": "#D9F3B5",
        "primary-200": "#B3E76C",
        "primary-300": "#8EDB23",
        "primary-400": "#5E9217",
        "primary-500": "#2F490B",
        "secondary-100": "#B4F4DF",
        "secondary-200": "#69EABF",
        "secondary-300": "#1EE09F",
        "secondary-400": "#14956A",
        "secondary-500": "#0A4A35",
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
