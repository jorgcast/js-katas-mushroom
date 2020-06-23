/**
 * @param {string[]} words
 * @return {string}
 */
const kata2 = (words = []) => {
  if (!Array.isArray(words)) {
    throw new Error('Not an array!');
  }

  if (words.length === 0) return '';

  // Convert the words to lowerCase
  words = words.map((word) => word.toLowerCase());

  // Take the first word as prefix
  let prefix = words[0];

  // Loop over all words
  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    if (prefix.length > word.length) {
      prefix = prefix.substring(0, word.length);
    }

    for (let j = 0; j < word.length; j++) {
      // Modify prefix when a letter doesn't match
      if (prefix[j] !== word[j]) {
        prefix = prefix.substring(0, j);
        break;
      }
    }

    // If we  don't have a match by now,
    // don't check the rest of the words
    if (prefix === '') {
      return '';
    }
  }

  return prefix;
};

export default kata2;
