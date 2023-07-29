/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-1': '#c9e7ab',
        'green-2': '#79a94a',
        'light-1': '#F8F8F8',
        'light-2': '#F0F0F0'
      },
    },
  },
  plugins: [],
}

