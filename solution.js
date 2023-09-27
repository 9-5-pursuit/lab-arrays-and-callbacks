const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  const numGreaterThan2 = (num) => num > 2

return nums.every(numGreaterThan2)
};

const isEveryWordShorterThan7 = () => {
  const everyWord = (word) => word.length < 7

  return words.every(everyWord)
};

// Filter

const arrayLessThan5 = () => {
  let numlessthan5 = nums.filter((num) => num < 5);
  return numlessthan5
};

const arrayOddLengthWords = () => {
  const oddWordsArray = words.filter((word)=> word.length % 2 === 1)
  return  oddWordsArray
};

// Find

const firstValDivisibleBy4 = () => {
  let number = nums.find((num) => num % 4 === 0)
  return number
};

const firstWordLongerThan4Char = () => {
  let firstWord = words.find((word) => word.length > 4)
  return firstWord
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((num) => num % 3 === 0)
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word)=> word.length < 2)
};

// For Each

const logValuesTimes3 = () => {
  return nums.forEach((num) => num * 3)
};

const logWordsWithExclamation = () => {
  return words.forEach((word)=> word + "!")
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  return nums.map((num) => (num * num) * nums.indexOf(num))
};

const arrayWordsUpcased = () => {
  return words.map((word) => word.toUpperCase())
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((num)=> num % 7 === 0)
};

const doSomeWordsHaveAnA = () => {
  return words.some((word)=> word.includes("a"))
};

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
