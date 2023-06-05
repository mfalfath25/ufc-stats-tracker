export const fetcher = async (endpoint: string) => {
  const api_key = process.env.API_KEY
  const base_url = process.env.BASE_URL
  const url = new URL(`${base_url}/en/${endpoint}.json`)

  try {
    if (api_key) {
      const params = new URLSearchParams({ api_key })
      url.search = params.toString()
      const res = await fetch(url)

      if (res.ok) {
        return res.json()
      } else {
        throw new Error('Error fetching data')
      }
    }
  } catch (error) {
    console.error(error)
    throw new Error('API error')
  }
}
