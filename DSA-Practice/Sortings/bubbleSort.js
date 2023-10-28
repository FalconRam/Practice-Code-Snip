/* ------------------------ Bubble Sort ------------------------
 
In this algorithm, 
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
