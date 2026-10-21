/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#2f3a26',
          dark: '#1f261e',
          light: '#3e562e',
          deep: '#171e16',
        },
        cream: {
          DEFAULT: '#fdfbef',
          soft: '#f4f0db',
          sand: '#e9e5dc',
        },
        gold: {
          DEFAULT: '#ccbf99',
          hover: '#baa97b',
          dark: '#b3a579',
        },
      },
      fontFamily: {
        serif: ['PPEditorialOld', 'Georgia', 'serif'],
        sans: ['Work Sans Custom', 'Work Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
