/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      cdark: "#1E1D20",
      cbrown: "#EFE4D6",

      cwhite: "#FFFFFF",

      ccyan: "#64BFB3",
      // ccyan: "#2E706C",
      // cdcyan: "#64BFB3",

      cpink: "#CC669C",
    },
    extend: {
      fontFamily: {
        squada: ["Squada One"],
        blinker: ["Blinker"],
        korean: ["Noto Sans KR"],
      },
    },
  },
  plugins: [],
};
