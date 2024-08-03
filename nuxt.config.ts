// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap'
        }
      ]
    }
  },

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY,
    }
  },

  modules: ["@nuxt/ui"],

  tailwindcss: {
    cssPath: '~/assets/tailwind.css'
  },
})