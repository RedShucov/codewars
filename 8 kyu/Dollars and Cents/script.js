// 25.12.23
// Kata - 'Do you speak "English"?'
// https://www.codewars.com/kata/55902c5eaa8069a5b4000083/train/javascript

// Language - JavaScript

// Difficulty - 8 kyu

/**
 * The function formats the amount into a string with a currency sign.
 * @param {number} amount - an amount in dollars.
 * @returns {string}
 */
const formatString = (amount) => '$' + amount.toFixed(2);

console.log(formatString(5.1));
