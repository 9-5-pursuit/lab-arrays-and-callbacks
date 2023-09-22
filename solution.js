const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (arr) => {
  //
  return arr.every((i) => i >= 2);
};

const isEveryWordShorterThan7 = (arr) => {
  //
  return arr.every((i) => i.length < 7);
};

// Filter

const arrayLessThan5 = (arr) => {
  //
  return arr.filter((i) => i < 5);
};

const arrayOddLengthWords = (arr) => {
  //
  return arr.filter((i) => i.length % 2 !== 0);
};

// Find

const firstValDivisibleBy4 = (arr) => {
  //
  return arr.find((i) => i % 4 === 0);
};

const firstWordLongerThan4Char = (arr) => {
  //
  return arr.find((i) => i.length > 4);
};

// Find Index

const firstNumIndexDivisibleBy3 = (arr) => {
  //
  return arr.findIndex((i) => i % 3 === 0);
};

const firstWordIndexLessThan2Char = (arr) => {
  //
  return arr.findIndex((i) => i.length < 2);
};

// For Each

const logValuesTimes3 = (arr) => {
  //
  arr.forEach((i) => console.log(i * 3));
};

const logWordsWithExclamation = (arr) => {
  //
  arr.forEach((i) => console.log(i + " !"));
};

// Map

const arrayValuesSquaredTimesIndex = (arr) => {
  //
  return arr.map((i, index) => i * i * index);
};

const arrayWordsUpcased = (arr) => {
  //
  return arr.map((i) => i.toUpperCase());
};

// Some

const areSomeNumsDivisibleBy7 = (arr) => {
  //
  return arr.some((i) => i % 7 === 0);
};

const doSomeWordsHaveAnA = (arr) => {
  //
  return arr.some((i) => i.includes("a"));
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
