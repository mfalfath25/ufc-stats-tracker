export default function transformText(text?: string) {
  const transformedText = text?.replace(/_/g, " ").replace(/(\S+)\(/g, "$1 (");
  return transformedText?.replace(/\w\S*/g, (word) => {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  });
}
