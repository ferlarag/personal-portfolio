/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Tilt: ['"Tilt Warp"','sans-serif']
      },
      colors: {
        main: '#0A1CE8',
        mainHover: '#4F5CF9',
      },
    },
  },
  plugins: [],
}

