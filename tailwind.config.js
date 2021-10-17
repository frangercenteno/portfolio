module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./sections/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      primary: {
        lighter: "#C0FFFB",
        default: "#00FFF0",
        dark: "#00FFF0"
      },
      secondary: {
        lighter: "#ffffff",
        default: "#141616",
        dark: "#ededed"
      },
    },
    container: {
      padding: "2rem",
      center: true
    },
    extends: {
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
