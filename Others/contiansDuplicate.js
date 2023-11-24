/* 
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.
*/

function contiansDuplicate(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== nums[i]) {
      console.log(`obj[nums[${i}]]: ${obj[nums[i]]}, nums[${i}]: ${nums[i]}`);
      obj[nums[i]] = nums[i];
    } else return true;
  }
  console.log(obj);
  return false;
}

console.log(contiansDuplicate([1, 2, 3, 1]));
