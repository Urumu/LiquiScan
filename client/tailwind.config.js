/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        gold: '#F0C000',
        burgundy: {
          light: '#7B2CBF',
          DEFAULT: '#4A0D67',
          dark: '#46003E',
        },
        dark: '#000000',
      },
      boxShadow: {
        product: '0 4px 18px 0 rgba(240,192,0,0.08), 0 2px 8px 0 #4A0D67',
        gold: '0 4px 16px 0 rgba(240,192,0,0.25)',
        'gold-deep': '0 4px 32px 0 #000a, 0 0 0 3px #F0C00044',
      },
      backgroundImage: {
        'burgundy-gradient': 'linear-gradient(180deg, #7B2CBF 0%, #4A0D67 100%)',
        'burgundy-gradient-dark': 'linear-gradient(to bottom, #46003E 0%, #46003E 60%, #000 100%)',
      },
    },
  },
  plugins: [],
};
