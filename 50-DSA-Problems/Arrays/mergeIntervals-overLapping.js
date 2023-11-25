/* 
==> Merge Intervals -- https://leetcode.com/problems/merge-intervals/

Given an array of intervals where intervals[i] = [starti, endi], 
merge all overlapping intervals, and return an array of the non-overlapping intervals 
that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

function mergeIntervals(intervals) {
  let current = 0;
  if (intervals.length <= 1) {
    return intervals;
  }
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < intervals.length - 1; i++) {
    if (intervals[current][1] >= intervals[i + 1][0]) {
      intervals[current][1] = Math.max(
        intervals[current][1],
        intervals[i + 1][1]
      );
    } else {
      current++;
      intervals[current] = intervals[i + 1];
    }
  }
  return intervals.slice(0, current + 1);
}

console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
);
console.log(
  mergeIntervals([
    [1, 4],
    [5, 6],
  ])
);
