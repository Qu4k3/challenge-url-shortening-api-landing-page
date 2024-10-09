const CORS_PROXY = 'https://proxy.cors.sh/'
const ENCURTADOR_SHORTENING_API_ENDPOINT = 'https://api.encurtador.dev/encurtamentos'

export const encurtadorShortener = async (url) => {
  const response = await fetch(CORS_PROXY + ENCURTADOR_SHORTENING_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body:JSON.stringify({
      url: url
    }),
  })
  const data = await response.json()
  return data
}