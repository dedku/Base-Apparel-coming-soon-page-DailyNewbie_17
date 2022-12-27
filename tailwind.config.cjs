/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      red: {
        100: 'hsl(0, 0%, 100%)',
        200: 'hsl(0, 80%, 86%)',
        300: 'hsl(0, 74%, 74%)',
        400: 'hsl(0, 36%, 70%)',
        700: 'hsl(0, 93%, 68%)',
        900: 'hsl(0, 6%, 24%)'
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
