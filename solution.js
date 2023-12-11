const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = () => nums.every(num => num >= 2 )


const isEveryWordShorterThan7 = () => words.every(word => word.length < 7)

// Filter

const arrayLessThan5 = () => nums.filter(num => num < 5)

const arrayOddLengthWords = () => words.filter(word => word.length%2 !==0)

// Find

const firstValDivisibleBy4 = () => nums.find(num => num%4 ===0)

const firstWordLongerThan4Char = () => words.find(word => word.length >4)
// console.log(firstWordLongerThan4Char(words))
// Find Index

const firstNumIndexDivisibleBy3 = () => nums.findIndex(num => num % 3 ===0)

const firstWordIndexLessThan2Char = () => words.findIndex(word =>word.length < 2 )

// For Each

const logValuesTimes3 = () => nums.forEach(num=>console.log(num*3))

const logWordsWithExclamation = () => words.forEach(word=> console.log(word+'!'))

// Map

const arrayValuesSquaredTimesIndex = () => nums.map((num, index) => num*num * index)

const arrayWordsUpcased = () => words.map(word => word.toUpperCase())

// Some

const areSomeNumsDivisibleBy7 = () => nums.some(num => num%7 ===0)

const doSomeWordsHaveAnA = () => words.some(word => word.includes('a'))

const extra =() => console.log('extra practice  extra practice  extra practice  extra practice  extra practice  ')
console.log('*************************',extra())

const sumOfNums = nums.reduce((acc, cv) => acc + cv , 0)
console.log('sum', sumOfNums)

const concatWords = words.reduce((accumulator, current)=> accumulator + current, '')
console.log('concat', concatWords)


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
