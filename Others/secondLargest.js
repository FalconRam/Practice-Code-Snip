const arr1 = [4, 3, 2, 1, 5, 8, 44, 44];
const arr2 = [3, 2, 3];

// Find Second largest element
// using inbuilt method

// function secondLargest(arr1) {
//   let uniqueArr = Array.from(new Set(arr1)); // TC = O(n)

//   let sortedArr = uniqueArr.sort((a, b) => a - b); // sort method time complexity is O(nlogn)

//   return sortedArr[sortedArr.length - 2];
// }

// optimised way based on time complexity
function secondLargest(arr) {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {  // Time complexity = O(n)
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] !== largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const result = secondLargest(arr1);
console.log(result);
