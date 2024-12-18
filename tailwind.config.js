/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./**/*.html", // This will include all HTML files in the project
    "./css/**/*.css",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

