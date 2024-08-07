export const useGetNews = () => {
  const config = useRuntimeConfig()
  const apiKey = config.public.apiKey
  const apiUrl = `${config.public.apiBaseUrl}?q=bitcoin&apiKey=8857303130a944c8a7ef9e36dca51803`

  const fetchNews = async () => {
    try {
      const data = await $fetch(apiUrl)
      return data
    } catch (error) {
      return { error: error.message }
    }
  }

  return {
    fetchNews
  }
}