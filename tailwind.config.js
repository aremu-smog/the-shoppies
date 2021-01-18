module.exports = {
  purge: ['./src/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair','serif'],
        'montserrat': ['Montserrat','sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
