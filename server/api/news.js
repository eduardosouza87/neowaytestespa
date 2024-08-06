export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const apiKey = config.apiKey
  const apiUrl = `${config.public.apiBaseUrl}?q=bitcoin`

  try {
    const response = await fetch(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      }
    })

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`)
    }
    
    return response.json()
  } catch (error) {
    return { error: error.message }
  }
})