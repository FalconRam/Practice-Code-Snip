/* 
==> Longest Consecutive Sequence -- https://leetcode.com/problems/longest-consecutive-sequence/

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.


Example 1:
Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

function longestConsecutiveSequence(nums) {
  if (nums.length === 0) return 0;
  let numSet = new Set(nums);
  let longestSequence = 0;
  for (let num of nums) {
    // Checking is prevNumber is start of sequence
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentSeqLength = 1;
      while (numSet.has(currentNum + 1)) {
        currentSeqLength += 1;
        currentNum += 1;
      }
      longestSequence = Math.max(longestSequence, currentSeqLength);
    }
  }
  return longestSequence;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); //4

console.log(longestConsecutiveSequence([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9
