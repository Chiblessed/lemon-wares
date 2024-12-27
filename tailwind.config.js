/** @type {import('tailwindcss').Config} */
export default {
  content: [ './index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'sm': { 'max': '600px' },   // Small devices (phones)
        'md': { 'min': '810px' },   // Medium devices (tablets)
        'lg': { 'min': '850px' },  // Large devices (desktops)
        'xl': { 'min': '1279px' },  // Extra large devices (large desktops)
        '2xl': { 'max': '1535px' }, // 2X extra large devices
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

