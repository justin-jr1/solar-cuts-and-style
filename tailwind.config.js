/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        bgBlack: "#000000",
        dominantColor: "#7D6A04",
        tertiaryDark: "'#1E1E1E"
      },
      fontFamily:{
        'manrope': "'Manrope'"
      }
    },
  },
  plugins: [],
}
