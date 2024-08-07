export const useGetNews = () => {
  const config = useRuntimeConfig()
  const apiKey = config.public.apiKey
  const apiUrl = `${config.public.apiBaseUrl}?q=bitcoin`

  const fetchNews = async () => {
    try {
      const data = await $fetch(apiUrl, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      })
      return data
    } catch (error) {
      return { error: error.message }
    }
  }

  return {
    fetchNews
  }
}