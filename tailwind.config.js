const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.js', './src/components/**/*.js', './src/data/**/*.js'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: colors.coolGray,
      purple: colors.purple,
      green: colors.green,
      indigo: colors.indigo,
      orange: colors.orange,
      red: colors.red,
      blue: colors.blue,
      rose: colors.rose,
      'light-blue': colors.lightBlue,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
