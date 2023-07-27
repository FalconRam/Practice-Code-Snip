/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string 
by deleting some (can be none) of the characters without disturbing 
the relative positions of the remaining characters. 
(i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:
Input: s = "axc", t = "ahbgdc"
Output: false

Constraints:
    0 <= s.length <= 100
    0 <= t.length <= 104
    s and t consist only of lowercase English letters.

Follow up: Suppose there are lots of incoming s, say s1, s2, ..., sk where k >= 109, and you want to check one by one to see if t has its subsequence. In this scenario, how would you change your code?

*/

// let s = "abc";
// let t = "ahbgdc";
let s = "aaaaaa";
let t = "bbaaaa";
// let s = "";
// let t = "";

function isSubsequence(s, t) {
  let i = 0;
  // let tIn;
  // let count = 0;

  //  if (!s.length) return true;

  // for (let k = 0; k < t.length; k++) {
  //   if (s[i] === t[k]) {
  //     tIn = k;
  //     i++;
  //     break;
  //   }
  // }
  // for (let k = tIn + 1; k < t.length; k++) {
  //   if (s[i] === t[k]) {
  //     count++;
  //     i++;
  //   }
  // }

  // if (count === s.length - 1)
  //   return { isSubsequence: true, tIn: tIn, count: count };

  // return { isSubsequence: false, tIn: tIn, count: count };

  if (!s.length) return true;

  for (let j = 0; j < t.length; j++) {
    if (s[i] === t[j]) i++;

    if (i === s.length) return { isSubsequence: true, count: i };
  }
  return { isSubsequence: false, count: i };
}

console.log(isSubsequence(s, t));
