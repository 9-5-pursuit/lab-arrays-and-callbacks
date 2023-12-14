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


const firstWordIndexLessThan2Char = (words) => {
  const lessThan2=(element,index)=>{
    if(element.length<2){
       return index
    }


  }
  return words.findIndex(lessThan2)
};

// For Each

const logValuesTimes3 = (nums) => {
  const elTimes3=(element)=>{
    if(element){
      return console.log(element*3)
    }
  }
  return nums.forEach(elTimes3)
};

const logWordsWithExclamation = (words) => {

  const foundExclamationAtLastIndex=(element)=>{
      // if(element.slice(-1)==="!"){
        if(element.endsWith('!')){//I like this way better💪🏾
        return  console.log(element )
      }

  }
  return words.forEach(foundExclamationAtLastIndex)
  //
};

// Map

const arrayValuesSquaredTimesIndex = (nums) => {
  const squaredIndex=(element)=>{
    if(element>0){
      const elIndex=nums.indexOf(element)

      const squareRoot=element*element

      return squareRoot*elIndex
      
    }else{
      return element
    }
}
  return nums.map(squaredIndex)
};
console.log(arrayValuesSquaredTimesIndex(nums))

const arrayWordsUpcased = (words) => {
  const makeUpperCase=(element)=>{
    if(element.length>0){

      return element.toUpperCase()
    }


  }
  return words.map(makeUpperCase)
};

// Some

const areSomeNumsDivisibleBy7 = (nums) => {

  const divisbleTrue=(element)=>{
    if(element%7 ===0){
      return element

    }


  }
  return nums.some(divisbleTrue)
};

// const doSomeWordsHaveAnA = (words) => {
//   const containsLetterA=(element)=>{

//     if(element.length>0&&element.includes('a')){
//       return element 


//     }
//   }
// return words.some(containsLetterA)
// };

const doSomeWordsHaveAnA = (words) => {//like this was betteer
  const containsLetterA=(element)=>{
    if(element.includes("a")===true){
      return true
    }else{
      return false
    }
  } 
   return words.some(containsLetterA)
 
 };
 //HUNGRY FOR MOREEEE!!!!!!!!🍽️


 //REDUCE

 const sumWthReduce=(nums)=>{
 
  const sumOfArray=(accumulator,currentValue)=>{
    return accumulator+currentValue

  }
  return nums.reduce(sumOfArray)


 }
sumWthReduce(nums)

const concatWithReduce=(words)=>{
  const concatWords=(accumulator,currentValue)=>{
    return accumulator+currentValue
  }
  return words.reduce(concatWords)

}
concatWithReduce(words)
///panagrm have to test

const alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','o','p','q','r','s','t','u','v','w','x','y','z']
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
const isLetterUsedMoreThanOnce=(arr,i)=>{
 const testCase=(accumulator,currentValue)=>{
  if(accumulator==alpha[i]&&currentValue==alpha[i]){
    return 'all letters used at least once'

  }

 }
 return arr.forEach(testCase)


}
isLetterUsedMoreThanOnce(panagram)


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
