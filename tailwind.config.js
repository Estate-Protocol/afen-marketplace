module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      "afen-blue": "#0B0C21",
      "afen-yellow": "#dbca5f",
      almond: "#FFECD1",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
