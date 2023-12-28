// 28.12.23
// Kata - 'Grasshopper - Summation'
// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/javascript

// Language - JavaScript

// Difficulty - 8 kyu

const summation = function (number) {
  let accumulator = 0;

  for (let index = 1; index <= number; index++) {
    accumulator += index;
  }

   return accumulator;
};

console.log(summation(8));
