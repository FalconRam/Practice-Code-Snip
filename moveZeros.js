function moveZeroes(nums) {
  let t = 0;
  let temp;
  //[0,1,0,3,12] ==> [1,0,0,3,12] ==> [1,3,0,0,12] => [1,3,12,0,0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      temp = nums[t];
      nums[t] = nums[i];
      nums[i] = temp;
      t++;
    }
  }
  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));
