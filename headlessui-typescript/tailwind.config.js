const colors = require('tailwindcss/colors')
delete colors['lightBlue'] // Fix deprecation warning

module.exports = {
  theme: {
    extend: {
      colors: colors,
      ringOffset: colors,
    },
  },
}
