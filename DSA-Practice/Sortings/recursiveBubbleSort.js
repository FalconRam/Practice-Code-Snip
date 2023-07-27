/* -------------------- Recursive Bubble Sort --------------------*/

/* In this algorithm, 
    - If array size is 1, return.
    - Do One Pass of normal Bubble Sort. This pass fixes last element of current subarray.
    - Recur for all elements except last of current subarray. */

let orginalArray = [64, 34, 25, 12, 22, 11, 90];

function recursiveFunction(orginalArray, length) {
  // returns, since the array is already sorted
  if (length === 1) return;

  for (let i = 0; i < length; i++) {
    if (orginalArray[i] > orginalArray[i + 1])
      // swapping on each pass
      [orginalArray[i], orginalArray[i + 1]] = [
        orginalArray[i + 1],
        orginalArray[i],
      ];
  }
  recursiveFunction(orginalArray, length - 1);
}

recursiveFunction(orginalArray, orginalArray.length);
console.log(orginalArray);
