/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,twig}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      gray: '#d1d5db',
      black: '#000000',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {},
  },
  plugins: [],
};
