/***********************************************************************

Currying is the process of decomposing a function that takes multiple arguments
into one that takes single arguments successively until it has the sufficient
number of arguments to run.This technique is named after the
logician Haskell Curry(the functional programming language Haskell is, too).

Write a `curriedSum` function that takes an integer(how many numbers to sum)
and returns a function that can be successively called with single arguments
until it finally returns a sum.

Here is a breakdown of how curriedSum(numArgs) should work:
    - Define an empty array, `numbers`.
    - Define a function, `_curriedSum` that:
        - Closes over `numArgs` and `numbers`.
        - Takes a single postive integer greater than 0 as an argument.
          - If number is less than or equal to 0 return null
        - Appends this to the `numbers` array each time.
        - If `numbers.length === numArgs`, it sums the numbers in the array and
        returns the result.
        - Else, it returns itself.
    - Returns `_curriedSum`.

If you're confused, think of it this way: `_curriedSum` keeps collecting
arguments and returning itself until it has enough arguments, at which point it
actually does the required work of summing.


Example:
// 1
const sum = curriedSum(4); // returns a function
sum(5) // returns a function
sum(20) // returns a function
sum(30) // returns a function
sum(20); // => returns 75

// 2
// this function can also be invoked like this:
const sum = curriedSum(3)(2)(1)(7); // => returns 10

AFTER YOU ARE FINISHED WITH THIS PROBLEM, ASK FOR A CODE REVIEW
- Come up with at least two situations (one per person) on when currying would
  be useful
***********************************************************************/

// Your code here 

//my won

// function curriedSum(...numArgs) {
//   let numbers = []
//   let sum = 0
//   if (numArgs[0] <= 0) {
//     return null
//   }
//   else {
//     if (numArgs.length == 1) {
//       return function (n) {
//         if (n > 0) {
//           numbers.push(n)
//           if (numbers.length === numArgs[0]) {
//             for (let i = 0; i < numbers.length; i++) {
//               sum += numbers[i]
//             }
//             return sum
//           }
//           else {
//             return function () {
//               return curriedSum(...numArgs)
//             }
//           }
//         }
//       }
//     }
//     else {
//       for (let i = 1; i < numArgs.length; i++) {
//         numbers.push(numArgs[i])
//         if (numbers.length === numArgs[0]) {
//           for (let j = 0; j < numbers.length; j++) {
//             sum += numbers[j]
//           }
//           return sum
//         }
//       }
//     }
//   }
// }

//answer

// function curriedSum(numArgs) {
//   let numbers = []
//   let sum = 0
//   if (numArgs <= 0) {
//     return null
//   }
//   else {
//     return function innercurriedSum(n) {
//       if (n !== undefined ){
//         numbers.push(n)
//         if (numbers.length === numArgs) {
//           for (let i = 0; i < numbers.length; i++) {
//             sum += numbers[i]
//           }
//           return sum
//         }
//         else {
//           return innercurriedSum
//         }
//       }
//       else {
//         return innercurriedSum
//       }
//     }
//   }
// }
    

function curriedSum(numArgs) {
  let numbers = []
  if (numArgs <= 0) {
    return null
  }
  else {
    return function innerfunc(n) {   
      numbers.push(n)
      // console.log('this is length of numbers: ' + numbers.length)
      // console.log('this is numArgs: ' + numArgs)
      if (numArgs == numbers.length) {  
        // console.log('this is if length of numbers: ' + numbers.length)
        // console.log('this is if numArgs: ' + numArgs)
        let sum = 0
        for (let i = 0; i < numbers.length; i++){
          sum += numbers[i]
        }
        console.log('this is sum: ' + sum)
        return sum       
      }
      else {     
        // console.log('this is else length of numbers: ' + numbers.length)
        // console.log('this is else numArgs: ' + numArgs)
        return innerfunc
      }
    }
  }
}

// Here is a breakdown of how curriedSum(numArgs) should work:
//     - Define an empty array, `numbers`.
//     - Define a function, `_curriedSum` that:
//         - Closes over `numArgs` and `numbers`.
//         - Takes a single postive integer greater than 0 as an argument.
//           - If number is less than or equal to 0 return null
//         - Appends this to the `numbers` array each time.
//         - If `numbers.length === numArgs`, it sums the numbers in the array and
//         returns the result.
//         - Else, it returns itself.
//     - Returns `_curriedSum`.

// If you're confused, think of it this way: `_curriedSum` keeps collecting
// arguments and returning itself until it has enough arguments, at which point it
// actually does the required work of summing.

// 1
const sum1 = curriedSum(4); // returns a function
console.log(sum1(5)) // returns a function
console.log(sum1(20)) // returns a function
console.log(sum1(30)) // returns a function
console.log(sum1(20)); // => returns 75

// 2
// this function can also be invoked like this:
const sum2 = curriedSum(3)(2)(1)(7); // => returns 10
console.log(sum2)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = curriedSum;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
