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
        'artigo': ['Artigo', 'sans']
      },
      boxShadow: {
        'custom': '0 8px 24px -4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
