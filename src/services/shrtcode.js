const SHRTCODE_SHORTENING_API_ENDPOINT = 'https://api.shrtco.de/v2/shorten?url='

export const shrtcodeShortener = async (url) => {
  const call = await fetch(`${SHRTCODE_SHORTENING_API_ENDPOINT}${url}`)
  const data = await call.json()
  return data
}