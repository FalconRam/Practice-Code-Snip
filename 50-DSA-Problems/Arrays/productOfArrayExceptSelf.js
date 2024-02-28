/* 
Given an integer array nums, return an array answer 
such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/

const productOfArrayExceptSelf = (nums) => {
  /* 

Approach ==> 1st loop, product the left to right from gn array and store in new array
2nd product the value from new array produced by 1st loop with gn array

*/
  //   let resArr = [];
  //   let preFix = 1;
  //   let postFix = 1;
  //   // [1, 2, 3, 4]
  //   for (let i = 0; i < nums.length; i++) {
  //     // 0, 1, 2, 3
  //     resArr[i] = preFix; // 1, 1, 2, 6
  //     preFix *= nums[i]; // 1 -> 2 -> 6
  //     console.log(preFix, resArr);
  //   }
  //   console.log("---------------");
  //   console.log(resArr);
  //   console.log("---------------");
  //   for (let i = nums.length - 1; i >= 0; i--) {
  //     // 3, 2, 1, 0
  //     resArr[i] *= postFix; // 24, 12, 8, 6
  //     postFix *= nums[i]; // 4 -> 12 -> 24
  //     console.log(postFix, resArr);
  //   }

  let resArr = [];
  let prefix = 1;
  let postfix = 1;

  for (let i = 0; i < nums.length; i++) {
    resArr[i] = prefix;
    prefix *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    resArr[i] *= postfix;
    postfix *= nums[i];
  }

  return resArr;
};

console.log(productOfArrayExceptSelf([1, 2, 3, 4]));
