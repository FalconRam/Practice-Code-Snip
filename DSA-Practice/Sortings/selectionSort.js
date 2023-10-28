/* 
Selection Sort is a simple comparison-based sorting algorithm. 
It works by dividing the input list into two parts: the sorted portion and the unsorted portion. 
The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion 
and swaps it with the leftmost element of the unsorted portion. 
This process continues until the entire list is sorted.

Here are the implementation steps for Selection Sort:

    Start with an unsorted array of elements.
    Set the first element as the current minimum (or maximum) element.
    Iterate through the remaining unsorted portion of the array.
    For each iteration, compare the current element with the current minimum (or maximum) element.
    If a smaller (or larger) element is found, update the current minimum (or maximum) element.
    After iterating through the unsorted portion, swap the current minimum (or maximum) element with the leftmost element of the unsorted portion.
    Repeat steps 2-6 until the entire array is sorted.
    The array is now sorted.
    
    */

// for (let i = 0; i < orginalArray.length - 1; i++) {
//   let tempSmallIndex = i;
//   for (let j = i + 1; j < orginalArray.length; j++) {
//     if (orginalArray[tempSmallIndex] > orginalArray[j]) {
//       tempSmallIndex = j;
//     }
//   }
//   [orginalArray[i], orginalArray[tempSmallIndex]] = [
//     orginalArray[tempSmallIndex],
//     orginalArray[i],
//   ];
//   // let temp = orginalArray[i];
//   // orginalArray[i] = orginalArray[tempSmallIndex];
//   // orginalArray[tempSmallIndex] = temp;
// }



/* ------------------------ Selection Sort ------------------------
 
In this algorithm, 
    - Select the minimum and swap
    - Swap happens from left to right
*/ 

let orginalArray = [13, 46, 24, 52, 20, 9];

function selectionSort(orginalArray) {
  console.time("swapping");
  for (let i = 0; i <= orginalArray.length - 2; i++) {
    let mini = i; // set miniIndex temporarily
    for (let j = i; j <= orginalArray.length - 1; j++) {
      // finds miniIndex in unsorted array
      if (orginalArray[mini] > orginalArray[j]) mini = j;
    }
    //swap arr[mini], arr[i]
    // let temp = orginalArray[i];
    // orginalArray[i] = orginalArray[mini];
    // orginalArray[mini] = temp;
    [orginalArray[i], orginalArray[mini]] = [orginalArray[mini], orginalArray[i]];
  }
  console.timeEnd("swapping");
  return orginalArray;
}

console.log(selectionSort(orginalArray));
