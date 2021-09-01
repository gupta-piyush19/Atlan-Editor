// tailwind.config.js
module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footerCol: "#2026d2",
        success: "#82b54b",
        tableCol: "rgb(171, 71, 188, 0.2)",
      },
      screens: {
        md: "769px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
