/***********************************************************************
For this problem you will be writing a function capable of finding the volume
for a rectangle (height * width * length). In order to enter the
required measurements we'll need to measure them one at a time.

Write a function named `recVolume(height)`. The recVolume function will be passed
a height int and will return a function. The function returned by recVolume can
then be invoked two more times with a single argument number each time (one for
length and one for width). Once all three numbers (height, width, length) have
been collected return the volume of the rectangle. Any subsequent calls to the
function returned by recVolume should continue to return the original volume.


***********************************************************************/

// Your code here 

// try 1

// function recVolume(height) {
//   let arr =[height]
//   return function innerfunc(num) {
//     // console.log('this is arr: ' + arr)
//     if (arr.length < 3) {
//       arr.push(num)
//       return innerfunc
//     }
//     else if (arr.length == 3) {   
//       let product = 1
//       // console.log(arr)
//       for (i = 0; i < arr.length; i++){
//         // console.log(arr[i])
//         product *= arr[i]
//       }
//       // console.log(arr[0])
//       // console.log(arr[1])
//       // console.log(arr[2])
//       // product = arr[0]*arr[1]*arr[2]
//       return product
//     }
//   }
// }

function recVolume(height) {
  let arr = [height]
  return function innerfunc(d) {
    arr.push(d)
    console.log('this is arr: ' + arr)
    if (arr.length == 3) {
      console.log('this is if arr: ' + arr)
      let product = 1
      for (let i = 0; i < arr.length; i++){
        product *= arr[i]
      }
      return product
    }
    else if (arr.length < 3){
      console.log('this is else arr: ' + arr)
      return innerfunc
    }
    else {
      let product = 1
      for (let i = 0; i <= 2; i++) {
        product *= arr[i]
      }
      return product
    }
  }
}

let calculateVolume = recVolume(5); // Pass the height (10) to recVolume
console.log(calculateVolume);
console.log(calculateVolume(4)); // Pass the length (5) to calculate the volume
console.log(calculateVolume(3)); // Pass the width (3) to calculate the volume
console.log(calculateVolume(145)); // Pass the width (3) to calculate the volume

// function recVolume(height) {
//   let length = null;
//   let width = null;

//   return function (dimension) {
//     if (length === null) {
//       length = dimension;
//       return function (dimension) {
//         if (width === null) {
//           width = dimension;
//           return height * length * width;
//         }
//       };
//     } else if (width === null) {
//       width = dimension;
//       return height * length * width;
//     } else {
//       return height * length * width;
//     }
//   };
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = recVolume;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
