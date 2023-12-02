/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue,js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      fontFamily: { epilogue: ["Epilogue", "sans-serif"] },
    },
    fontWeight: {
      black: "900",
    },
  },
  plugins: [require("preline/plugin")],
};
