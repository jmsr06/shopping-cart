/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondo': '#252425',
      },
      gridTemplateColumns: {
        'responsive-lg': 'repeat(auto-fit, minmax(250px, 1fr))',
        'responsive': 'repeat(auto-fit, minmax(200px, 1fr))',
      }
    },
  },
  plugins: [],
}