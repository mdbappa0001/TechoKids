/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'blue': '#3D8EF0',
      'gray': '#C5DDFB',
      'white': '#FFFFFF',
      'success': '#FFA500',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}