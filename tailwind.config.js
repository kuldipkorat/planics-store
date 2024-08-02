/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 10s linear infinite'
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
    },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        mulish:["Mulish", "sans-serif"]
      },
    },
    colors: {
      primary: '#E3EEFF',
      // btnColor:'#EBF2FF',
      red:{
        800:"#C41E3A",
        900:"#D8000C",
      },
      white:"#ffff",
      black:"#000000",
      blue: {
        100: '#F3F8FF',
        200: '#EBF2FF',
        300: '#E3EEFF',
        400: '#D7E6FF',
        500: '#BFD7FF',
        600: '#90B9FF',
        700: '#68A1FF',
        800: '#3B84FF',
        900: '#306BD4',
        1000: '#0041AE'
      },
      // lightGray:"#585858",
      lightGray: {
        100: '#eeeeee',
        200: '#e6e6e6',
        300: '#cbcbcb',
        400: '#585858',
        500: '#4f4f4f',
        600: '#464646',
        700: '#424242',
        800: '#353535',
        900: '#282828',
        1000: '#1f1f1f'
      },
      yellow:{
        400:'#facc15'
      }
    }
  },
  plugins: [],
}

