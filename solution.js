const { nums, words } = require("./data/data.js");

//Every
const isEveryNumGreaterThan2 = (nums) => {
const greaterThan2=(element)=>{

  if(element){
    return element >2
  }

}
return nums.every(greaterThan2)

   
   
}

  const isEveryWordShorterThan7 = (words) => {
  const lessThan7=(element)=>{
    if(element){
      return element.length <7
    }


  }
  return words.every(lessThan7)
 
  
};

//Filter

const arrayLessThan5 = () => {
  const result = nums.filter((num) => {
    return num < 5 || num === 0;
  });
  return result;
};
arrayLessThan5();

const arrayOddLengthWords = () => {

  const result=words.filter((word)=>{

    if(word.length%2!==0){


      return word
    }
 
});
 
  return result
  
};

// Find

const firstValDivisibleBy4 = (nums) => {
  const firstValueFound=(element)=>{
    if(element){
      return element%4===0
    }


  }
  return nums.find(firstValueFound)
};

const firstWordLongerThan4Char = (words) => {
  const firstWordFound=(element)=>{
    if(element){
      return element.length > 4
    }
  }
  return words.find(firstWordFound)
};

// Find Index

const firstNumIndexDivisibleBy3 = (nums) => {
  const firstNumFound=(element,index)=>{
    if(element%3===0){


      return index
    }
  }
  return nums.findIndex(firstNumFound)
  
};


const firstWordIndexLessThan2Char = () => {
  //
};

// For Each

const logValuesTimes3 = () => {
  //
};

const logWordsWithExclamation = () => {
  //
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
