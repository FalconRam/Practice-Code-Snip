/* 
# Remove Duplicate from SOrted Array

-Given an interger array nums sorted in non-decreasing order,
-remove the duplicate in-place such that each unique elements appears only once.
-The relative order of the elements should be kept the same.
-Then return the number of unique elements in nums

=> Input: [1,1,2]       ==> Output: 2 - [1,2,_]
=> Input: [0,0,1,1,2,2,3,3,4,4]       ==> Output: 2 - [0,1,2,3,4,_,_,_,_]

*/

let arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4];

// lets compare next element is same

// Inbuilt function

// function removeDuplicate(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       //   arr[i] = arr[i + 1];
//       arr.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return { arr: arr, length: arr.length };
// }

// function removeDuplicate(arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       j++;
//     }
//   }
//   return j;
// }

function removeDuplicate(arr) {
  let j = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[j] = arr[i + 1];
      j++;
    }
    console.log(arr);
  }
  arr.length = --j;
  return { length: j, arr: arr };
}

let result = removeDuplicate([1, 1, 2, 3, 4, 4, 5]);
console.log(result);
