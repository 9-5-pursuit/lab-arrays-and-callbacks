const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => {
  return nums.every((num) => num >= 2);
};

const isEveryWordShorterThan7 = () => {
  return words.every((word) => word.length < 7);
};

// Filter

const arrayLessThan5 = () => {
  return nums.filter((num) => num < 5);
};

const arrayOddLengthWords = () => {
  return words.filter((word) => word.length % 2 === 1);
};

// Find

const firstValDivisibleBy4 = () => {
  return nums.find((num) => num % 4 === 0);
};

const firstWordLongerThan4Char = () => {
  return words.find((word) => word.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = () => {
  return nums.findIndex((num) => num % 3 === 0);
};

const firstWordIndexLessThan2Char = () => {
  return words.findIndex((word) => word.length < 2);
};

// For Each

const logValuesTimes3 = () => {
  console.log(nums.forEach((num) => num * 3));
};

const logWordsWithExclamation = () => {
  console.log(words.forEach((word) => `${word}!`));
  let wordShout = words.forEach((word) => `${word}!`);
  return wordShout;
  // console.log(words);
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  let numSquaredTimes = nums.map((num, i) => num * num * i);
  return numSquaredTimes;
};

const arrayWordsUpcased = () => {
  let upWords = words.map((word) => word.toUpperCase());
  return upWords;
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  return nums.some((num) => num % 7 === 0);
};

const doSomeWordsHaveAnA = () => {
  return words.some((word) => word.includes("a"));
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
