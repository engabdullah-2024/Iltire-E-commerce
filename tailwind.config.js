/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor: "#458263" ,
        secondaryColor: "yellow",
        thirdColor: "#fff" ,
       
      }
    },


    fontFamily: {
      primaryFont: "Poppins"
    }
  },
  plugins: [],
}

