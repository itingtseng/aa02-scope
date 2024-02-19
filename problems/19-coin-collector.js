/***********************************************************************
Write a function named: coinCollector(numCoins). The coinCollector function will
accept a number of coins (greater that 0) to collect when it is first invoked
and will return a function. The function returned by coinCollector can then be
invoked numCoins number of times passing in one coin (represented by an int) to
be added to the collection.

Once the function returned by coinCollector has the numCoins required it will
return an array of the coins it has gathered.

Example 1:
  let oneCoin = coinCollector(1); // returns a function
  console.log(oneCoin(10)); // prints [10]

Example 2:
  let twoCoins = coinCollector(2); // returns a function
  twoCoins(25); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

Example 3:
  let threeCoins = coinCollector(3); // returns a function
  threeCoins(25); // returns a function
  threeCoins(5); // returns a function
  console.log(threeCoins(10)); // prints [ 25, 5, 10 ]

***********************************************************************/

// Your code here 

function coinCollector(n) {
  let arr = []
  if (n <= 0) {
    return null
  }
  else {
    return function coin(coin) {
      if (n == 1) {
        arr.push(coin)
        return arr
      }
      else {
        n--
        arr.push(coin)
        return coinCollector(n)
      }
    }
  }
}

// Example 1:
  let oneCoin = coinCollector(1); // returns a function
  console.log(oneCoin(10)); // prints [10]

// Example 2:
  let twoCoins = coinCollector(2); // returns a function
  console.log(twoCoins(25)); // returns a function
  console.log(twoCoins(10)); // prints [25, 10]

// Example 3:
  let threeCoins = coinCollector(3); // returns a function
  console.log(threeCoins(25)); // returns a function
  console.log(threeCoins(5)); // returns a function
console.log(threeCoins(10)); // prints [ 25, 5, 10 ]
  
// function coinCollector(n) {
//   let arr = []
//   if (n == 0) {
//     return arr
//   }
//   else {
//     return function (coin) {
//       if (n > 0) {
//         arr.push(coin)
//         n--
//         if (n == 0) {
//           return arr
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
  module.exports = coinCollector;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
