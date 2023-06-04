export function transformText(text?: string): string | undefined {
  const formattedText = text?.replace(/_/g, " ").replace(/(\S+)\(/g, "$1 (")
  return formattedText?.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
  })
}

export function transformWinningMethod(text?: string): string | undefined {
  const words = text?.split("_")
  const capitalizedWords = words?.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  const swappedString = capitalizedWords?.reverse().join(" ")
  return swappedString
}
