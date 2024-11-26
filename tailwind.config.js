/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#FDF2F8',
          purple: '#F3E8FF',
          blue: '#EFF6FF',
        }
      }
    },
  },
  plugins: [],
};