import * as newsMock from '~/mocks/news.json'

export const useGetNews = async (searchText: string = 'bitcoin') => {
  const config = useRuntimeConfig()
  const apiKey = config.public.apiKey
  const apiUrl = `${config.public.apiBaseUrl}?q=${searchText}`

  // Fui obrigado a fazer isso, pois a NEWSAPI não funciona em ambiente que não seja localhost
  if (config.public.isProduction === 'production') {
    await new Promise(resolve => setTimeout(resolve, 500))
    const data = newsMock
    return data
  }

  try {
    const data = await $fetch(`${apiUrl}&apiKey=${apiKey}`)
    return data
  } catch (error: unknown) {
    return { error: error?.message }
  }
}