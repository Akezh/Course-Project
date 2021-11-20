const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  prefix: 'tw-',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      projectCardBack: "#434343",
    }),
    colors: {
      gray: {
        700: "#A2A0A8",
        900: "#363B49",
      },
      black: {
        900: "#28282C",
        700: "#434343",
      },
      green: "#77FE9E",
    },
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "5xl": "2.8125rem",
        sectionHeader: "1.75rem",
      },
    },
  },
  plugins: [],
};
