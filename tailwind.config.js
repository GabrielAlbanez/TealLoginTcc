/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./public/index.html"
  ],
  theme: {
    extend: {
     
      colors : {

        lavanda : "#C2C5F4",

      },

    },
  },
  plugins: [],  
}

