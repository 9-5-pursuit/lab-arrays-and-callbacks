const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => nums.every
(element => element >= 2); //inline arrow function
  

const isEveryWordShorterThan7 = (words) => words.every(element => element.length < 7);

// Filter
//returns array
const arrayLessThan5 = (nums) => nums.filter(num => num < 5);


const arrayOddLengthWords = (words) => words.filter(word => word.length % 2 !== 0);

// Find

const firstValDivisibleBy4 = (nums) => nums.find
(num => num % 4 === 0)

const firstWordLongerThan4Char = (words) => words.find(word => word.length > 4)


// Find Index

const firstNumIndexDivisibleBy3 = (nums) => nums.findIndex(num => num % 3 === 0)

const firstWordIndexLessThan2Char = (words) => words.findIndex(word => word.length < 2)

// For Each

const logValuesTimes3 = (nums) => nums.forEach(num => console.log(num * 3))

const logWordsWithExclamation = (words) => words.forEach(word => console.log(`${word}!`))

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((num, index) => num ** 2 * index)
};

const arrayWordsUpcased = (words) => {
  return words.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => nums.some(num => num % 7 === 0)

const doSomeWordsHaveAnA = (words) => words.some(word => word.includes("a"))

module.exports = {
  isEveryNumGreaterThan2,
  isEveryWordShorterThan7,
  arrayLessThan5,
  arrayOddLengthWords,
  firstValDivisibleBy4,
  firstWordLongerThan4Char,
  firstNumIndexDivisibleBy3,
  firstWordIndexLessThan2Char,
  logValuesTimes3,
  logWordsWithExclamation,
  arrayValuesSquaredTimesIndex,
  arrayWordsUpcased,
  areSomeNumsDivisibleBy7,
  doSomeWordsHaveAnA,
};
