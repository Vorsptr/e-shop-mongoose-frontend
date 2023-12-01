/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      "text-color": "#1E1E1E",
      "light-white": "#F7F7F7",
      "grey-color": "#5A5A5A",
      "ligh-black": "#2A2A2A",
    },
    backgroundImage: {
      "hero-background": "url(./src/assets/bg-image.png)",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      pressStart: ["Press+Start+2P", "sans-serif"],
      vt: ["VT323", "monospace"],
    },
    boxShadow: {
      "3xl": "1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15)",
    },
  },
  plugins: [],
};
