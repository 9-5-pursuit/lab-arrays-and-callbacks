const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  return nums.every((element) => element >= 2);
};

const isEveryWordShorterThan7 = (words) => {
  return words.every((element) => element.length < 7);
};

// Filter

const arrayLessThan5 = (nums) => {
  return nums.filter((element) => element < 5);
};

const arrayOddLengthWords = (words) => {
  return words.filter((element) => element.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (nums) => {
  return nums.find((element) => element % 4 === 0);
};

const firstWordLongerThan4Char = (words) => {
  return words.find((element) => element.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  return nums.findIndex((element) => element % 3 === 0);
};

const firstWordIndexLessThan2Char = (words) => {
  return words.findIndex((element) => element.length < 2);
};

// For Each

const logValuesTimes3 = (nums) => {
  console.log(nums.forEach((element) => (element *= 3)));
};

const logWordsWithExclamation = (words) => {
  console.log(words.forEach((element) => element.includes("!")));
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  return nums.map((element, index) => Math.pow(element, 2) * index);
};

const arrayWordsUpcased = (words) => {
  return words.map((element) => element.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  return nums.some((element) => element % 7 === 0);
};

const doSomeWordsHaveAnA = (words) => {
  return words.some((element) => element.includes("a"));
};

// Hungry for More --- missing tests so won't run

// Reduce

const numbersInTheArraySummed = (nums) => {
  console.log(nums.reduce((current, accumulator) => current + accumulator, 0));
};

const wordsInTheArrayConcatenated = (words) => {
  console.log(
    words.reduce((current, accumulator) => current + accumulator, "")
  );
};

// Sort

const hashSortNums = (nums) => {
  console.log(nums.sort());
};

const hashSortWords = (words) => {
  console.log(words.sort());
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
