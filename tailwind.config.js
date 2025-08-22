module.exports = {
  darkMode: "class", // مهم حتى يستخدم كلاس .dark
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alexandria: ["Alexandria", "sans-serif"],
        cairo: ["Cairo", "sans-serif"],
        libertinus: ["Libertinus Serif", "serif"],
        merriweather: ["Merriweather", "serif"],
        noto: ["Noto Serif", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
