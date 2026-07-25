function countWords(str) {

    const str = "My name is India";
  // Trim leading/trailing whitespaces
  const trimmedStr = str.trim();

  // If the string is empty or contains only spaces, return 0
  if (trimmedStr === '') {
    return 0;
  }

  // Split by any sequence of whitespace characters (spaces, tabs, newlines)
  const words = trimmedStr.split(/\s+/);
  return words.length;
}