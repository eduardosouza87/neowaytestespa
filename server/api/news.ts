export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const apiKey = config.apiKey
  const apiUrl = `${config.public.apiBaseUrl}?q=technology`

  const response = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    }
  })
  const data = await response.json()

  return data
})
