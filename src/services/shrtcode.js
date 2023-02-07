const SHRTCODE_SHORTENING_API_ENDPOINT = 'https://api.shrtco.de/v2/shorten?url='

export const shrtcodeShortener = async (url) => {
  const response = await fetch(`${SHRTCODE_SHORTENING_API_ENDPOINT}${url}`)
  const data = await response.json()
  return data
}