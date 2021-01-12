module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['last'],
    }
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
