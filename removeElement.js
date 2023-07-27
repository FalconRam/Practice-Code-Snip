let nums = [0, 1, 2, 2, 3, 0, 4, 2];
// [3, 2, 2, 3];
let val = 2;

function removeElement(nums, val) {
  let t = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[t] = nums[i];
      t++;
    }
  }

  return { length: t, arr: nums.slice(0, t) };
}

console.log(removeElement(nums, val));
