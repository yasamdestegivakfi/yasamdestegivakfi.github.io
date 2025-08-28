/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      colors: {
        primary: '#2563eb',
        secondary: '#1e40af',
      },
      boxShadow: {
        header: '0 10px 30px -10px rgba(0,0,0,0.25)',
        card: '0 10px 20px -10px rgba(0,0,0,0.25)'
      }
    },
  },
  plugins: [],
}
