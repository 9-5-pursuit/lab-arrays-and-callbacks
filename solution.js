const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
  // Use the every() method to check if every number in the array is greater than 2

  return nums.every(num => num >= 2 )
};

const isEveryWordShorterThan7 = (words) => {

  //checking if the LENGTH of the word is less than 7 
  return words.every(word => word.length < 7); 
};

// Filter

const arrayLessThan5 = (nums) => {
  //checks if the number is less than 5
  return nums.filter(num => num < 5 );
};

const arrayOddLengthWords = (words) => {
  //check if the word is an odd length so if i divide by 2 i should have a remainder of 1 

  return words.filter(word => word.length % 2 == 1)
};

// Find

const firstValDivisibleBy4 = (nums) => {

 return nums.find((num) => num % 4 === 0)
   
  
};

const firstWordLongerThan4Char = (words) => {
  return words.find((word)=> word.length > 4)

};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
const number = (num) => num % 3 === 0; 

  return nums.findIndex(number)
};

const firstWordIndexLessThan2Char = (words) => {
  const firstWord = (word) => word.length < 2;
  return words.findIndex(firstWord)
  //
};

// For Each

const logValuesTimes3 = (nums) => {
  nums.forEach((num) => console.log(num * 3))
};

const logWordsWithExclamation = (words) => {
  words.forEach((word) => console.log(word + "!"));
};

// Map

const arrayValuesSquaredTimesIndex = () => {
  //
};

const arrayWordsUpcased = () => {
  //
};

// Some

const areSomeNumsDivisibleBy7 = () => {
  //
};

const doSomeWordsHaveAnA = () => {
  //
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
