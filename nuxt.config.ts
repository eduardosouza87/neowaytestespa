// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    apiKey: process.env.API_KEY,
    
    public: {
      apiBaseUrl: process.env.API_BASE_URL,
      apiKey: process.env.API_KEY,
    }
  },
})
