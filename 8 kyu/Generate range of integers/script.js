// 24.12.23
// Kata - 'Generate range of integers'
// https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript

// Language - JavaScript

// Difficulty - 8 kyu

// Output data:
// the generated array {Array}

/**
* The function takes three arguments (start, stop, step) and returns an array of a range of integers. 
 * @param {number} start - the number from which to generate.
 * @param {number} stop - the number up to which to generate.
 * @param {number} step - step during generation.
 * @returns {Array} generated array of integers.
 */
const generateRange = (start, stop, step) => {
  const newArray = [];

  for (let i = start; i <= stop; i += step) {
    newArray.push(i)
  };

  return newArray;
};

console.log(generateRange(5, 100, 25));
