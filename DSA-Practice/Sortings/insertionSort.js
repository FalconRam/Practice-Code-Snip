// let nums1 = [1, 2, 3, 0, 0, 0];

// let nums2 = [2, 5, 6];
// let m = 3;
// let n = 3;

// var merge = function (nums1, m, nums2, n) {
//   nums1 = [...nums1, ...nums2];
//   //   nums1 = nums1.concat(nums2);

//   for (let i = 0; i < m + n - 1; i++) {
//     console.log(i);

//     if (nums1[i] === 0) {
//         console.log(i);
//       nums1.splice(i--, 1);
//     }
//   }
//   return nums1;
// };

// let result = merge(nums1, m, nums2, n);

// console.log(result);

let arrNum = [4, 2, 7, 1, 3];

function insertionSort(arrNum) {
  for (let j = 1; j < arrNum.length; j++) {
    let tempValue = arrNum[j];
    let position = j - 1;
    console.log("Temp value = " + tempValue + ", Position is " + position);
    while (position >= 0 && tempValue < arrNum[position]) {
      arrNum[position + 1] = arrNum[position];
      position = position - 1;
      console.log("Shifted higher value to right = " + arrNum);
    }
    console.log("Position after innerloop = " + position);
    arrNum[position + 1] = tempValue;
    console.log("lower value to left =====> " + arrNum);
  }
  return arrNum;
}

console.log(insertionSort(arrNum));
