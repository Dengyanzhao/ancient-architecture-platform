/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8b5a2b',
        secondary: '#d2b48c',
        accent: '#a0522d',
        background: '#f8f5f0',
        foreground: '#333333',
        border: '#e6d7c3',
      },
      fontFamily: {
        sans: ['Noto Sans SC', 'sans-serif'],
      },
    },
  },
  plugins: [],
}