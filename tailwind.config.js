const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    content: ['./components/**/*.jsx', './pages/**/*.jsx'],
    whitelist: ['__next'],
  },
  theme: {
    fontFamily: {
      body: ['Crimson Pro', 'serif'],
      sans: ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xl: '1.375rem',
      '4xl': ['2.25rem', '2.25rem'],
      '5xl': ['3.125rem', '3.125rem'],
    },
    extend: {
      colors: {
        gold: {
          light: '#F1C73E',
          default: '#D4AF37',
          dark: '#AC8E2D',
        },
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
