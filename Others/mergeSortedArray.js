let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
// let nums1 = [];
// let m = 0;
// let nums2 = [1];
// let n = 1;

function mergeSortedArray(nums1, nums2, m, n) {
  
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  
  while (j >= 0) {
      if (i >= 0 && nums1[i] > nums2[j]) { 
        // 3 > 6 ==> // 3 > 5 ==> 3>2 nums1[3]=3 :k=2 i=1 ==> 3>2 nums1[2] = 2
          nums1[k--] = nums1[i--];
      } else {
          nums1[k--] = nums2[j--]; // nums1[5] = 6 :k=4 j=1 ==> nums1[4] = 5 :k=3 j=0
      }
  }

  return nums1;
}

console.log(mergeSortedArray(nums1, nums2, m, n));


