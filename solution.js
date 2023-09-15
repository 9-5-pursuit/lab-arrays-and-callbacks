const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => nums.every(item => item >= 2);

const isEveryWordShorterThan7 = (pan) => pan.every(item => item.length < 7);

// Filter

const arrayLessThan5 = (nums) => nums.filter(item => item < 5);

const arrayOddLengthWords = (pan) => pan.filter(item => item.length%2);

// Find

const firstValDivisibleBy4 = (nums) => nums.find(item => item%4==0);

const firstWordLongerThan4Char = (pan) => pan.find(item => item.length>4);

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => nums.findIndex((item) => item%3==0);

const firstWordIndexLessThan2Char = (pan) => pan.findIndex(item => item.length<2);

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach(item => console.log(item*3));
}

const logWordsWithExclamation = (pan) => {
  pan.forEach(item => console.log(item+'!'))
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => nums.map((item, i) => { return Math.pow(item, 2) * i});

const arrayWordsUpcased = (pan) => pan.map(item => item.toUpperCase());

// Some

const areSomeNumsDivisibleBy7 = (nums) => nums.some(item => item%7==0);

const doSomeWordsHaveAnA = (pan) => pan.some(item => /a/.test(item));

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
