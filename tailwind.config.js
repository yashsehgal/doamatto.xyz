const { spacing, fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: true,
    content: [
      './pages/**/*.{ts,tsx}',
      './components/**/*.{ts,tsx}',
      './layouts/**/*.{ts,tsx}',
      './lib/**/*.{ts,tsx}'
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'lightPurple': 'var(--light-purple)',
        'darkPurple': 'var(--dark-purple)',
        'lightAlt': 'var(--light-alt)',
        'darkAlt': 'var(--dark-alt)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: { color: 'white' },
            color: 'white',
            a: {
              textDecoration: 'none',
              borderBottom: '1px solid',
              borderColor: theme('colors.white'),
              transition: 'border-color 250ms, color 250ms',
              color: 'inherit',
              '&:hover': {
                color: theme('colors.lightPurple'),
                borderColor: theme('colors.lightPurple')
              }
            },
            ul: { li: { '&:before': { backgroundColor: theme('colors.gray.600') } } },
            'h2,h3,h4': {
              color: theme('colors.gray.50'),
              'scroll-margin-top': spacing[32]
            },
          }
        },
        dark: {
          css: {
            color: 'black',
            a: {
              borderColor: 'black',
              '&:hover': {
                color: theme('colors.darkPurple'),
                borderColor: theme('colors.darkPurple')
              }
            },
            hr: { borderColor: theme('colors.gray.800') },
            ul: { li: { '&:before': { backgroundColor: theme('colors.gray.600') } } },
            'h2,h3,h4': {
              color: theme('colors.gray.100'),
              'scroll-margin-top': spacing[32]
            },
          }
        }
      }),
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
