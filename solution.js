const { nums, words } = require("./data/data.js");

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

// const words = [
//   "The",
//   "quick",
//   "brown",
//   "fox",
//   "jumps",
//   "over",
//   "the",
//   "lazy",
//   "dog",
// ];

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((num) => num > 2);
  //
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((x) => x.length < 7);
  //
};

// Filter

const arrayLessThan5 = (nums) => {
  //
  return nums.filter((x) => x < 5);
};

const arrayOddLengthWords = (words) => {
  //
  return words.filter((x) => x.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  //
  return nums.find((x) => x % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  //
  return words.find((x) => x.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  //
  return nums.findIndex((x) => x % 3 === 0);
};

const firstWordIndexLessThan2Char = (words) => {
  //
  return words.findIndex((x) => x.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
  //
  return nums.forEach((x) => console.log(x * 3));
};

const logWordsWithExclamation = (words) => {
  //
  return words.forEach((x) => console.log(x + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  //
  return nums.map((x, i) => x * x * i);
};

const arrayWordsUpcased = (words) => {
  //
  return words.map((x) => x.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  //
  return nums.some((x) => x % 7 === 0);
};

const doSomeWordsHaveAnA = (words) => {
  //
  return words.some((x) => x.includes("a"));
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
