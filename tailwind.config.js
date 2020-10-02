const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.jsx', './pages/**/*.jsx'],
  theme: {
    fontFamily: {
      body: ['Crimson Text', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xl: '1.375rem',
      '4xl': ['2.25rem', '2.25rem'],
      '5xl': ['3.125rem', '3.125rem'],
    },
    extend: {
      fontSize: {
        '7xl': '10rem',
      },
      colors: {
        gold: '#D4AF37',
      },
      margin: {
        '-72': '-18rem',
      },
      height: {
        'screen-2/3': '66.666667vh',
      },
    },
  },
  variants: {},
  plugins: [],
};
