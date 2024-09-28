export const isLinkAlive = async (url: string) => {
  try {
    const response = await fetch(url)
    console.log(response.ok)
    return true
  } catch {
    return false
  }
}
