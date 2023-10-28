/* 
----------------------Recursive INSERTION SORT----------------------------

- Takes an element & place it into the correct order for each pass in recursive

*/

let arr = [14, 9, 15, 12, 6, 8, 13];

function recursiveInsertionSort(arr, j, n) {
  if (j == n) return;

  while (j > 0 && arr[j] < arr[j - 1]) {
    console.log("Inner Array: " + arr);
    [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
    j--;
    console.log("Inner Swapped Array: " + arr);
  }
  console.log("Outer Array: " + arr);
  recursiveInsertionSort(arr, j + 1, arr.length);
  return arr;
}

console.log(recursiveInsertionSort(arr, 0, arr.length));
