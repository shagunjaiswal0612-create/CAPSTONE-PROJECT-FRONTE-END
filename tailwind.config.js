/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        sand: {
          50: '#fdf8f0',
          100: '#faefd9',
          200: '#f3d9a8',
          300: '#eabd70',
          400: '#df9d3e',
          500: '#d4831f',
          600: '#b96516',
          700: '#994d15',
          800: '#7d3f18',
          900: '#673516',
        },
        ocean: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#b3e5ff',
          300: '#75d3ff',
          400: '#2fb8ff',
          500: '#0599f0',
          600: '#0079ce',
          700: '#0060a7',
          800: '#035289',
          900: '#084571',
        },
      },
    },
  },
  plugins: [],
}
