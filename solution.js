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



myNums = [...nums]

const sortedNums = myNums.sort()
console.log(sortedNums)

myWords = [...words]
const sortedWords = myWords.sort()
console.log(sortedWords)

const SortNumbersArrAsc = () => myNums.sort((a,b) => a-b)
console.log(SortNumbersArrAsc(myNums))

const SortNumbersArrDsc = () => myNums.sort((a,b) => b-a)
console.log('descend',SortNumbersArrDsc(myNums))

const SortWordsArrAsc = () => myWords.sort((a,b) => a-b)
console.log(SortWordsArrAsc(myWords))

const SortWordsArrDsc = () => myWords.sort((a,b) => b.localeCompare(a))
console.log('words decend',SortWordsArrDsc(myWords))


const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
const isPanagram = () => {
  const letters = Array(26).fill(false)
  for (const word of panagram) {
   for (const letter of word.toLowerCase()){
    const charCode = letter.charCodeAt(0) - 'a'.charCodeAt(0);
    if (charCode >= 0 && charCode < 26) {
      letters[charCode] = true;
    }
  }
}
const isPanagramResult = letters.every(used => used);
console.log('isPanagram', isPanagramResult);
}
isPanagram()
// true

const products = [
  {
    name: "fairy lights",
    price: 5.99,
    description: "festive holiday decoration",
  },
  {
    name: "banana",
    price: 0.99,
    description: "full of potassium",
  },
  {
    name: "egg separator",
    price: 3.99,
    description: "it separates yolks from whites",
  },
  {
    name: "flag",
    price: 5.99,
    description: "catches the breeze",
  },
  {
    name: "quark",
    price: 0.01,
    description: "Very small",
  },
  {
    name: "turtleneck",
    price: 19.99,
    description: "available in black and slightly-darker black",
  },
  {
    name: "mitt (leather)",
    price: 15,
    description: "regulation sized",
  },
  {
    name: "nothing",
    price: 10,
    description: "Hey, if you pay us, we won't ask any questions.",
  },
  {
    name: "violin",
    price: 2000,
    description: "Talk about a JS fiddle...",
  },
  {
    name: "yoyo",
    price: 1,
    description: "We had to pull some strings to get this one in.",
  },
];

const filterProductsForPrice = () => products.filter(product => product.price < 10)
console.log(filterProductsForPrice())

const sortProductsByName = () => [...products].sort((a,b) => a.name.localeCompare(b.name))
console.log('sort by name',sortProductsByName())

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
