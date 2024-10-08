const CLEANURI_SHORTENING_API_ENDPOINT = 'https://cleanuri.com/api/v1/shorten'

export const cleanuriShortener = async (url) => {
  const response = await fetch(CLEANURI_SHORTENING_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `url=${encodeURIComponent(url)}`,
  })
  const data = await response.json()
  return data
}