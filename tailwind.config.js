/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '600px' },   
        'md': { 'min': '810px' },  
        'lg': { 'min': '850px' },  
        'xl': { 'min': '1279px' },  
        '2xl': { 'max': '1535px' }, 
      },
      colors: {
        'primary-color': '#B00000',
        'text-primary-color': '#2E2E2E'
      },
      boxShadow:{
        'custom-shadow': '8px 3px 6px 5px rgba(255, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}

