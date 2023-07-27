/* 

Given an integer array nums sorted in non-decreasing order, 
return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].

Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

*/

let nums = [-4, -1, 0, 3, 10];
function squaresOfSortedArray(nums) {
  console.log(nums);
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] *= nums[i];
  // }
  // for (let j = 0; j < nums.length; j++) {
  //   for (let k = j; k < nums.length - 1; k++) {
  //     if (nums[j] > nums[k + 1]) {
  //       temp = nums[j];
  //       nums[j] = nums[k + 1];
  //       nums[j + 1] = temp;
  //     }
  //   }
  // }
  // let largest = Number.NEGATIVE_INFINITY;
  // // let secondLargest = Number.NEGATIVE_INFINITY;
  // for (let i = 0; i < nums.length; i++) {
  //   // if (nums[j] * nums[j] > nums[i + 1] * nums[i + 1]) {
  //   //   temp = nums[i + 1] * nums[i + 1];
  //   //   nums[i + 1] = nums[i] * nums[i];
  //   //   nums[i] = temp;
  //   //   j++;
  //   //   console.log(nums);
  //   // }
  //   if (nums[i] * nums[i] > largest) {
  //     // secondLargest = largest;
  //     largest = nums[i] * nums[i];
  //     nums[nums.length - 1] = largest;
  //   }
  // }

  let result = [];
  let firstIn = 0;
  let lastIn = nums.length - 1;
  let decIndex = lastIn;

  while (firstIn <= lastIn) {
    if (nums[firstIn] ** 2 > nums[lastIn] ** 2) {
      result[decIndex--] = nums[firstIn++] ** 2;
    } else {
      result[decIndex--] = nums[lastIn--] ** 2;
    }
  }

  return result;
}

console.log(squaresOfSortedArray(nums));
