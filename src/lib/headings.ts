export function limitHeadingWords(heading: string, maxWords = 6) {
  const words = heading.trim().split(/\s+/);

  if (words.length <= maxWords) {
    return heading;
  }

  return words.slice(0, maxWords).join(" ");
}
