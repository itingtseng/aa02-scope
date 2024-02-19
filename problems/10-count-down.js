/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 2:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"

***********************************************************************/

// Your code here 

function countDownTimer(n) {
  if (n < 0) {
    return null
  }
  else {
    if (n == 0) {
      return 'Happy New Year!'
    }
    else {
      return function innerfunc() {
        if (n > 1) {
          n--
          return countDownTimer()
       }
        else if (n == 1){
          return 'Happy New Year!'
        }
      }
    }
  }
}

// Example 1:
console.log('Example 1')
  console.log(countDownTimer(0)); // prints "Happy New Year!"

// Example 2:
console.log('Example 2')
let oneDay = countDownTimer(1); // returns a function
console.log(oneDay)
  console.log(oneDay()); // prints "Happy New Year!"

// Example 3:
console.log('Example 3')
let twoDays = countDownTimer(2); // returns a function
console.log(twoDays)
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

// Example 4:
console.log('Example 4')
let threeDays = countDownTimer(3); // returns a function
console.log(threeDays)
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // returns a function
  console.log(threeDays()); // prints "Happy New Year!"
  
  // function countDownTimer(n) {
//   if (n == 0) {
//     return 'Happy New Year!'
//   }
//   else {
//     return function () {
//       if (n > 0) {
//         n--
//         if (n == 0) {
//           return 'Happy New Year!'
//         }
//         else {
//           return function () {
//             return countDownTimeer(n)
//           }
//         }
//       }
//     }
//   }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = countDownTimer;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
