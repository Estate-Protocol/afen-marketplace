module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "afen-blue": "#02010A",
        "afen-blue-light": "#0F122E",
        "afen-blue-lighter": "#1E245C",
        "afen-yellow": "#dbca5f",
        almond: "#FFECD1",
        "rich-black": "#05060F",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
