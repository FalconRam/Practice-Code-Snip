/* 

Given integer array, Find a subarray which has maximum sum

*/

// Kadane's Algorithm

//let array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let array = [5, 4, -1, 7, 8];

function findSubarray() {
  let sum = 0;
  let max = array[0];
  let startIndex, endIndex, temp;
  if (array.length === 0 || array.length === 1) {
    console.log({ sum: max, subArray: array });
    return max;
  }

    // for (let i = 0; i < array.length; i++) {
    //   sum += array[i];
    //   if (sum > max) {
    //     max = sum;
    //   }
    //   if (sum < 0) {
    //     sum = 0;
    //   }
    // }

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (sum > max) {
      array[i] > max && (startIndex = i);
      temp = max;
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }

    if (temp > sum) {
      console.log({ temp: temp, sum: sum });
      endIndex = i;
    }
  }

  console.log({
    sum: max,
    subArray: array.slice(startIndex, endIndex),
    startIndex: startIndex,
    endIndex: endIndex,
  });
  return max;
}
findSubarray();
