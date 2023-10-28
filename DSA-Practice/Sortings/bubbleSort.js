/* ------------------------ Bubble Sort ------------------------*/
/* 
In this algorithm, 
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
