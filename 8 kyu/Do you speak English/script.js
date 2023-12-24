// 24.12.23
// Kata - 'Do you speak "English"?'
// https://www.codewars.com/kata/58dbdccee5ee8fa2f9000058/train/javascript

// Language - JavaScript

// Difficulty - 8 kyu

/**
 * The function accepts a sentence with text and a word to search in it, returning a Boolean value.
 * @param {string} text - a sentence with text.
 * @param {string} foundWord - a found word
 * @returns {boolean}
 */
const findSubstring = (text, foundWord) => {
  const textLower = text.toLowerCase();

  return textLower.includes(foundWord);
}

console.log(findSubstring('12131eNgLiShddfdrd', 'english'));
