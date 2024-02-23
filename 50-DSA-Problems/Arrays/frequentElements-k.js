/*
==> Top K Frequent Elements -- https://leetcode.com/problems/top-k-frequent-elements/description/

Given an integer array nums and an integer k, 
return the k most frequent elements. You may return the answer in any order.


Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]


Follow up: Your algorithm's time complexity must be better than O(n log n), 
where n is the array's size.
*/

/*
Approach==> 
- Using hash map, mapped the frequency of each array element.
- Then with map values sorting the order in desc and splice from 0 to k,
- so we will get the most frequent elements count and limited with k
- Then traversing the map and checking values spliced with map's value, 
- if exits push to new array which is the answer

Time complexity: O(n log n)
*/
function frequentElements_k(nums, k) {
  const map = new Map();
  for (let num of nums) {
    if (map.has(num)) {
      let val = map.get(num);
      val += 1;
      map.set(num, val);
    } else map.set(num, 1);
  }
  console.log(map);
  const freqValues = [...map.values()].sort((a, b) => b - a).splice(0, k);
  console.log(freqValues);
  let keys = [];
  for (let [key, value] of map.entries()) {
    if (freqValues.includes(value)) keys.push(key);
  }
  return keys;
}

console.log(frequentElements_k([1, 1, 1, 2, 2, 3], 2)); // Output: [ 1, 2 ]
console.log(frequentElements_k([1, 1, 2, 2, 2, 3], 1)); // Output: [2]
console.log(frequentElements_k([1], 1)); // Output: [1]
console.log(frequentElements_k([1, 2, 3], 1)); // Output: [1, 2, 3]
