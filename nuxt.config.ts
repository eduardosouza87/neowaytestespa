// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        }
      ]
    },    
    baseURL: process.env.NODE_ENV === 'production' ? '/neowaytestespa' : '/',
  },

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY
    }
  },

  modules: ["@nuxt/ui", "@nuxt/image", "@pinia/nuxt"],

  tailwindcss: {
    cssPath: '~/assets/tailwind.css'
  },

  colorMode: {
    preference: 'light'
  }
})
