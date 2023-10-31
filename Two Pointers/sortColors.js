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

// Implementation steps ===>>>
/*

1.) Initialize three pointers: left, current, and right.

- left will point to the position where the next 0 should go.
- current will be used to iterate through the array.
- right will point to the position where the next 2 should go.

2.) Start a while loop to iterate through the array until current is less than or equal to right.

3.) Inside the loop, check the value at nums[current]:

- If it's 0, swap the value at nums[current] with the value at nums[left], and increment both left and current pointers.
- If it's 2, swap the value at nums[current] with the value at nums[right, and decrement the right pointer.
- If it's 1, simply increment the current pointer to move to the next element.

4.) Continue this process until the current pointer crosses or equals the right pointer.
*/

let nums = [2, 0, 2, 1, 1, 0];

function sortColors(nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = 0;

  while (current <= right) {
    if (nums[current] === 0) {
      [nums[current], nums[left]] = [nums[left], nums[current]];
      left++;
      // current++;
    } else if (nums[current] === 2) {
      [nums[current], nums[right]] = [nums[right], nums[current]];
      right--;
    }
    // else {
      current++;
    // }
  }
  return nums;
}
console.log(sortColors(nums));
