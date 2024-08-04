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
            'jacksons-purple': {
          '50': '#eaf1ff',
          '100': '#d9e4ff',
          '200': '#baccff',
          '300': '#91abff',
          '400': '#657bff',
          '500': '#424dff',
          '600': '#2621ff',
          '700': '#1e16ec',
          '800': '#1a15be',
          '900': '#1b1b96',
          '950': '#111056',
      },
    
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
