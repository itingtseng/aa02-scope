/***********************************************************************
Write a function named: lazyAdder(firstNum). The lazyAdder function will
accept a number and return a function. When the function returned by lazyAdder
is invoked it will again accept a number, (secondNum), and then return a function.
When the last mentioned function is invoked with a number, (thirdNum), it will
FINALLY return a number. See below for examples!

Example 1:
let firstAdd = lazyAdder(1);
let secondAdd = firstAdd(2);
let sum = secondAdd(3);
console.log(sum); // prints 6

Example 2:
let func1 = lazyAdder(10);
let func2 = func1(20);
let total = func2(3);
console.log(total); // prints 33

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Explain, but don't code, how you would turn your solution into a one-line
  fat-arrow function
***********************************************************************/

// Your code here 

function lazyAdder(firstNum) {
  let sum = firstNum
  console.log('this is first sum: ' + sum)
  return function (secondNum) {
    sum += secondNum
    console.log('this is second sum: ' + sum)
    return function (thirdNum) {
      return  sum += thirdNum
    }
  }
}


// Example 1:
let firstAdd = lazyAdder(1);
console.log(firstAdd)
let secondAdd = firstAdd(2);
console.log(secondAdd)
let sum = secondAdd(3);
console.log(sum); // prints 6

// Example 2:
let func1 = lazyAdder(10);
console.log(func1)
let func2 = func1(20);
console.log(func2)
let total = func2(3);
console.log(total); // prints 33


// function lazyAdder(firstNum) {
//   return function (secondNum) {
//     return function (thirdNum) {
//       let sum = 0
//       sum += firstNum
//       sum += secondNum
//       sum += thirdNum
//       return sum
//     }
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = lazyAdder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
