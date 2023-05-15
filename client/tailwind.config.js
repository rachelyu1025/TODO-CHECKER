/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    screens: {
      tablet: '376px',
      desktop: '768px',
    },
    colors: {
      background: '#F0F7FF',
      textColor: '#3E3E3E',
      textBlue: '#0069FF',
      inputBg: '#3787EB',
    },
  },
  plugins: [require('daisyui')],
};
