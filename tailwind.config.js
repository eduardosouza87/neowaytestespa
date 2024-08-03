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
    extend: {
      colors: {        
        app: {
					blue: {
						100: '#8bb1ea',
						400: '#1b1b96',
						900: '#001550'
					},
					orange: {
						100: '#ff995e',
						400: '#eb5e0d',
						900: '#9f3800'
					}
        }
      }
    }
  },
}
