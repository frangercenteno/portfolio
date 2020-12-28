module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  enabled: process.env.NODE_ENV === 'production',
  purge: [],
  theme: {
    colors: {
      primary: {
        lighter: '#C0FFFB',
        default: '#00FFF0',
        dark: '#00FFF0'
      },
      secondary: {
        lighter: '#ffffff',
        default: '#141616',
        dark: '#ededed'
      },
    },
    container: {
      padding: '2rem',
      center: true
    },
  },
  variants: {},
  plugins: [],
}
