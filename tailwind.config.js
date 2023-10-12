/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"#202c33",
        secondary:"#202c33",
        third:"#111b21"
      }
    },

  },
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),

  ],
}

