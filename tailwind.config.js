module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue'
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      azoSans: ['azo_sansregular', 'sans-serif'],
      azoSansBlack: ['Azo Sans Bk', 'sans-serif'],
      azoSansBlackItalic: ['Azo Sans Bk', 'sans-serif'],
      azoSansBoldItalic: ['Azo Sans', 'sans-serif']
    },

    extend: {
      colors: {        
        app: {
          200: '#94A3B8',
          400: '#2259E9',
          600: '#1E293B',
          700: '#071846',
          900: '#0f172a'
        }
      }
    }
  },
}
