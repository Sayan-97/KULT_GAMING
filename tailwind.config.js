/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors
      colors:{
        primary: '#5416E9',
        secondary: '#CF2AC0',
        background: '#040719',
        accent: '#1C1C1C',
      },

      backgroundImage: {
        bgBtn: 'linear-gradient(96.99deg, #5416E9 3.16%, #CF2AC0 99.53%)',
      },

      // Font family
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Clash: ['Clash Display', 'sans-serif']
      },

      // Font Weight
      fontWeight: {
        light: 400,
        medium: 500,
        semibold: 600,
        bold: 700
      },

      // Border Radius
      borderRadius: {
        custom: '6px'
      }
    },
  },
  plugins: [],
}

