/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'custom-beige': '#f4f3ef',
        'custom-red': '#c62223',
      },
    },
  },
  plugins: [],
};