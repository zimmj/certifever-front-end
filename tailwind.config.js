/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx, ts}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#66cc8a',

          secondary: '#377cfb',

          accent: '#ea5234',

          neutral: '#333c4d',

          'base-100': '#ffffff',

          info: '#3abff8',

          success: '#36d399',

          warning: '#fbbd23',

          error: '#f87272',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
