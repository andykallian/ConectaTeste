/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('../src/assets/header-background.png')",
        'carrousel-bg': "url('../src/assets/rectangle-bg.png')",
      },
      fontFamily: {
        'vollkorn': ['Vollkorn', 'sans'],
        'inter': ['Inter', 'sans'],
        'roboto': ['Roboto', 'sans'],

      },
      boxShadow: {
        'custom': '0 8px 24px -4px rgba(0, 0, 0, 0.25)',
      },
      screens: {
        'sm': '374px',
        'md': '734px',
        'lg': '1439px', 
      },
    },
  },
  plugins: [],
}

