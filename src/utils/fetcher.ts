export const fetcher = async (endpoint: string) => {
  const api_key = process.env.API_KEY
  const base_url = process.env.BASE_URL
  const url = new URL(`${base_url}/en/${endpoint}.json`)

  try {
    if (!api_key) {
      throw new Error("API key is missing")
    }

    const params = new URLSearchParams({ api_key })
    url.search = params?.toString()
    const res = await fetch(url)

    if (res.ok) {
      return res?.json()
    } else {
      const errorResponse = await res?.json()
      console.error(errorResponse.message || "Error fetching data")
      return null
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
