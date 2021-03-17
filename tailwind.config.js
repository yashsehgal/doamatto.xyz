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
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
