/**
 * @param {string} pattern
 * @param {string} words
 * @return {string}
 */
const kata3 = (pattern, words) => {
  const patternMap = {};
  const wordsArray = words.split(' ');

  if (pattern.length !== wordsArray.length) {
      return false;
  }

  for (let i = 0; i < pattern.length; i++) {
      if (patternMap[pattern[i]]) {
          if (patternMap[pattern[i]] !== wordsArray[i]) {
              return false;
          }
      } else {
          patternMap[pattern[i]] = wordsArray[i];
      }
  }

  // Check duplicated key-values
  const duplicates = [...new Set(Object.values(patternMap))];

  return duplicates.length === Object.keys(patternMap).length;
};

export default kata3;
