const { nums, words } = require("./data/data.js");

// Every
const isEveryNumGreaterThan2 = (nums) => {
 
  for (let i = 0; i < nums.length; i++){
    if( nums[i] < 2 ){
      return false
    }else{
      return true
    }
  }
};

const isEveryWordShorterThan7 = (words) => {
  for(let i =0; i < words.length; i++){
    if(words[i].length < 7){
      return true
    }
  }
};

// Filter

const arrayLessThan5 = (nums) => {
  let array = []
  for(let i =0; i < nums.length; i++){
    if(nums[i] < 5 ){
      array.push(nums[i])
    }
  }
  return array
};

const arrayOddLengthWords = (words) => {
  let array = []
  for(let i = 0; i < words.length; i++){
    if(words[i].length % 2 !== 0){
      array.push(words[i])
    }
  }
  return array
};

// Find

const firstValDivisibleBy4 = (nums) => {

  for(let i =0; i < nums.length; i++){
    if(nums[i] % 4 === 0 ){
      return nums[i]
    }
  }
  
};

const firstWordLongerThan4Char = (words) => {
  
  for(let i =0; i < words.length; i++){
    let letterArray = [...words[i]]
    if(letterArray.length > 4){
      return words[i]
    }
  }
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  for(let i =0; i < nums.length; i++){
    if(nums[i] % 3 === 0){
      return i
    }
  }
};

const firstWordIndexLessThan2Char = (words) => {
  for(let i =0; i < words.length; i++){
    if(words[i].length < 2){
      return i
    }
  }

};

// For Each

const logValuesTimes3 = (nums) => {
  for(let i =0; i < nums.length; i++){
    console.log(nums[1] * 3);
  }
};

const logWordsWithExclamation = (words) => {
  for(let i =0; i < words.length; i++){
    console.log(`${words[i]}!`);
  }
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  let array = []
  for(let i = 0; i < nums.length; i++){
    let newNumber = i * (nums[i] * nums[i])
    array.push(newNumber)
  }
  return array

};

const arrayWordsUpcased = (words) => {
  let array = []
  for(let i = 0; i < nums.length; i++){
    let upperCased = words[i].toUpperCase()
    array.push(upperCased)
  }
  return array
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {
  for(let i =0; i < nums.length; i++){
    if(nums[i] % 7 === 0 ){
      return true
    }
  }
};

const doSomeWordsHaveAnA = (words) => {
  for(let i =0; i < words.length; i++){
    let word = [...words[i]]
    for(let j = 0; j < word.length; j++){
      console.log(word[j])
      
      if(word[j] === 'a' ){
        return true
      }
    }
  }
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
