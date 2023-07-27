let nums1 = [1, 2, 3, 0, 0, 0];

let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

var merge = function (nums1, m, nums2, n) {
  nums1 = [...nums1, ...nums2];
  //   nums1 = nums1.concat(nums2);

  for (let i = 0; i < m + n - 1; i++) {
    console.log(i);

    if (nums1[i] === 0) {
        console.log(i);
      nums1.splice(i--, 1);
    }
  }
  return nums1;
};

let result = merge(nums1, m, nums2, n);

console.log(result);
