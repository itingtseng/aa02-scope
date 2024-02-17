/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// Your code here 

// function smoothieMachine() {
//   let smoothie = "I'm having a smoothie with "
//   return function (num1) {
//     return function (num2) {
//       return function (num3) {
//         if (num2 == null && num3 == null) {
//           return smoothie += num1
//         }
//         else if (num3 == null) {
//           return smoothie += num1 + ' and ' + num2
//         }
//         else {
//           return smoothie += num1 + ' and ' + num2 + ' and ' + num3
//         }
//       }
//     }
//   }
// }

// function smoothieMachine(...otherNums) {
//   let smoothie = "I'm having a smoothie with "
//   if (otherNums.length == 1) {
//     return smoothie += otherNums
//   }
//   else {
//     for (let i = 1; i < otherNums.length; i++){
//       let newsmoothie = smoothie += otherNums[0]
//       return newsmoothie += ' and ' + otherNums[i]
//     }
//   }
// }

function smoothieMachine() {
  let smoothie = "I'm having a smoothie with "
  return function (...topping) {
    if (topping.length == 1) {
      return smoothie += topping
    }
    else {
      return smoothie += ' and ' + topping.join(' and ')
    }
  }
}

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
