# Array Method Drills

### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

   ```
   npm install
   ```

   This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will run the test output once.

Two arrays to work with

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

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
```

The first question is for the numbers array. The second question is for the words array.

You don't have to write an answer to the thought questions.

#### Every

1. Determine if every number is greater than or equal to 2
1. determine if every word shorter than 7 characters

#### Filter

1. filter the array for numbers less than 5
1. filter words that have an odd length

#### Find

1. Find the first value divisible by 4
1. find the first word that is longer than 4 characters

#### Find Index

1. find the index of the first number that is divisible by 3
1. find the index of the first word that is less than 2 characters long

#### For Each

1. console.log each value of the nums array multiplied by 3
1. console.log each word with an exclamation point at the end of it

**Thought Questions**

- What happened to the original array?
it wasnt altered
- Can you store the values from a `forEach` method in a new array?
you can by pushing them into  a new array
#### Map

1. Make a new array of each number squared and then multiplied by their index number
1. Make a new array of all the words in all uppercase

**Thought Questions**

- What happened to the original array? 
it was not mutated
- Can you store the values from a `map` method in a new array?s
map creates and stores values in a new array depending on results of the function's execution

#### Some

- Find out if some numbers are divisible by 7
- Find out if some words have the letter `a` in them

### Hungry for More

#### Reduce

- Add all the numbers in the array together using the `reduce` method
- concatenate all the words using reduce

**Thought Questions**

- What happened to the original array?
It got 'reduced' to a single value/element

#### Sort

- Try to sort without any arguments, do you get what you'd expect with the numbers array?
Yes. it sorted by the first integer of appearance from the 'ones' column and so on and so forth (i.e  nums = [10,2,5,8,13,3,1,0] => 0,1,10,13,2,3,5,8)
However this was only after i duplicated the original nums array - as this function was at the end
When i called sort on the nums array, it sorted as above but it conflicted with the previous function

- Try to sort without any arguments, do you get what you'd expect with the words array?
['The', 'brown', 'dog', 'fox', 'jumps', 'lazy', 'over', 'quick', 'the'] - Not quite sure what I expected but as aforemnetioned, it disrupts other test cases iF i do not copy the words array
- Sort the numbers in ascending order
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- Sort the numbers in descending order
 descend [10, 9, 8, 7, 6, 5, 4, 3, 2, 1,0 ] 
- Sort the words in ascending order
[
      'The',   'brown',
      'dog',   'fox',
      'jumps', 'lazy',
      'over',  'quick',
      'the'
    ]
I see now that it soerts aplhabetically first by capitalization, then goes through the lowercases. So case sensitivity is very important.
- Sort the words in descending order
words decend [
      'The',   'the',
      'quick', 'over',
      'lazy',  'jumps',
      'fox',   'dog',
      'brown'
    ]
**Thought Questions**

- What happened to the original array?
The elements were rearranged though the length did not change

### Array Methods Challenge Problems

#### isPanagram

Using the following array - test whether each letter a-z (case insensitive) is used at least once

```js
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
```

#### Working with data

- filter for products with a price that is less than 10, using the array below:
- sort alphabetically by product name

```js
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
```
