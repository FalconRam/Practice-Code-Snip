/* 
==> Sort Colours - https://leetcode.com/problems/sort-colors/description/
Given an array nums with n objects colored red, white, or blue, 
sort them in-place so that objects of the same color are adjacent, 
with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
0 - Red
1 - White
2 - Blue
You must solve this problem without using the library's sort function.

 
Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]

*/

function sortColors(nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;
  while (current <= right) {
    if (nums[current] === 2) {
      // Moves 2 to right of an array
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    } else if (nums[current] === 0) {
      // Moves 0 to left of an array
      [nums[current], nums[left]] = [nums[left], nums[current]];
      left++;
      current++;
    } else current++;
  }
  return nums;
}

console.log(sortColors([2, 0, 2, 1, 1, 0]));
console.log(sortColors([2, 0, 1]));
