/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fa8645",
        "brand-light": "#f8a435",
        "text-grey": "#a8a8a8",
        "text-dark": "#333336",
        "text-black": "#000000",
      },
      fontFamily: {
        main: ["Manrope", "ui-sans-serif", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 0px 70px rgba(0, 0, 0, 0.06)",
        "custom-2": "0px 10px 20px rgba(0, 0, 0, 0.1)",
        "button-primary": "0 10px 25px #5433ED52",
        "button-primary-hover": "0 13px 25px #5433ED52",
      },
      maxWidth: {
        "max-content": "1200px",
      },
      backgroundPosition: {
        "benefit-hero-pos": "left 44px bottom"
      },
    },
  },
  plugins: [],
}