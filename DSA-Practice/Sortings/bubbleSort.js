/* ------------------------ Bubble Sort ------------------------
 
In this algorithm, 
<<<<<<< HEAD
    - Push the Maximum to the last by adjacent swapping (Opposite to Selection Sort)
    TimeComplexity ==>
        - Worst/Average Case - O(N^2)
        - Best Case - O(N) (If handleded)
*/

let originalArray = [64, 34, 25, 12, 22, 11, 90];

function bubbleSort(originalArray) {
  for (let i = originalArray.length - 1; i >= 1; i--) {
    // last element is sorted, so we need to loop till n-1 to 1
    let isSwapped = false;
    for (let j = 0; j < i; j++) {
      // loop all to swap adjacent elements till i
      if (originalArray[j] > originalArray[j + 1]) {
        [originalArray[j], originalArray[j + 1]] = [
          originalArray[j + 1],
          originalArray[j],
        ];
        isSwapped = true;
      }
    }
    console.log(isSwapped);
    if (!isSwapped) {
      // In inner loop, if nothing swapped, the loop will break, since it is already sorted
      // So the time Complexity will be O(N) in best case
      console.log("break");
      // break;
      return originalArray;
    }
  }
  return originalArray;
}
console.log(bubbleSort(originalArray));
=======
    - traverse from left and compare adjacent elements and the higher one is placed at right side. 
    - In this way, the largest element is moved to the rightmost end at first. 
    - This process is then continued to find the second largest and place it and so on,
      until the data is sorted.

  Time Complexity: O(N^2)
  Space Complexity: O(1)
      */


let orginalArray = [64, 1, 789, 5667, 34, 25, 12, 22, 0, 0.5, 11, 90];

// for (let i = 0; i < orginalArray.length; i++) {
//   console.log(orginalArray)
//   for (let j = i + 1; j <= orginalArray.length; j++) {
//     if (orginalArray[i] > orginalArray[j]) {
//       let temp = orginalArray[i];
//       orginalArray[i] = orginalArray[j];
//       orginalArray[j] = temp;
//     }
//   }
// }
// console.log(`Bubble Sorted Array : ${orginalArray}`);

function bubbleSort(orginalArray) {
  let lastIndex = orginalArray.length - 1;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    console.log(orginalArray)
    for (let i = 0; i < lastIndex; i++) {
      if (orginalArray[i] > orginalArray[i + 1]) {
        [orginalArray[i], orginalArray[i + 1]] = [
          orginalArray[i + 1],
          orginalArray[i],
        ];
        isSorted = false;
      }
    }
  }
  return orginalArray;
}

console.log(bubbleSort(orginalArray));
>>>>>>> 19cbb6aebf2a4835b539148a53f6b0fdc83ce555
