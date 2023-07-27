/* 
if a[i]=== a[i+1], then mupltiply it and assign 0 to the i+1, 
and finally move all the zero to end
*/
let nums = [0,1]

// [847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272];

// [1, 2, 2, 1, 1, 0];

// [1, 2, 2, 1, 1, 0] ==> [1, 2, 2, 1, 1, 0] ==>  [1,4,0,1,1,0] ==>
// ==> [1,4,0,1,1,0] ==> [1,4,0,2,0,0] ==> moved zero to end
function applyOperations(nums) {
  let t = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1] && nums[i] !== 0) {
      nums[i] += nums[i + 1];
      nums[i + 1] = 0;
    }
  }
  console.log(nums.length); // [1694,0,0,0,0,399,832,0,1758,0,412,0,206,272]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[t], nums[i]] = [nums[i], nums[t]];
      t++;
    }
  }
  return nums
}

console.log(applyOperations(nums));
