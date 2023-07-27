/* Rotate array to right by k steps, k is non negative

input ==> [1,2,3,4,5,6] -> k=3 ==> Output : [4,5,6,1,2,3]

*/

let array = [1, 2, 3, 4, 5, 6];
let k = 4;

// inbuilt method

// function rotateArray(array, n, k) {
//   let copiedArray = array.slice();
//   for (let i = 0; i < k; i++) {
//     array.unshift(copiedArray[n - i - 1]);
//     array.pop();
//   }
//   return array;
// }

// function rotateArray(array, n, k) {
//   // if k is greater than size, we don't need to rotate till k,
//   //so based on size criteria rotation can be done and produce same output'
//   if (k > n) {
//     k = k % n;
//   }
//   let sliceArray = array.splice(n - k, n); //At position n-k, remove n items
//   array.unshift(...sliceArray); // spreading the splice returned array in begining
//   return array;
// }

// without using array methods

// function rotateArray(array, n, k) {
//   let temp;
//   for (let i = 0; i < k; i++) {
//     let temp = array[n - 1];
//     for (let j = n - 1; j > 0; j--) {
//       array[j] = array[j - 1];
//     }
//     array[0] = temp;
//   }
//   return array;
// }

function rotateArray(array, n, k) {
  let temp;
  for (let j = 0; j < k; j++) {
    for (let i = n - 1; i > 0; i--) {
      temp = array[i];
      array[i] = array[i - 1];
      array[i - 1] = temp;
    }
  }
  //   let j = 0;
  //   while (j < k) {
  //     for (let i = n - 1; i > 0; i--) {
  //       temp = array[i];
  //       array[i] = array[i - 1];
  //       array[i - 1] = temp;
  //     }
  //     j++;
  //   }
  return array;
}


console.log(rotateArray(array, array.length, k));
