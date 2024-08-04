export default defineAppConfig({
  ui: {
    primary: 'blue',

    button: {
      font: 'font-bold',
      default: {
        color: 'jacksons-purple',
        size: 'lg'
      }
    },

    modal: {
      width: 'w-full md:max-w-3xl',
    }
  },

	colorMode: {
    preference: 'light',
    fallback: 'light'
  },
})
