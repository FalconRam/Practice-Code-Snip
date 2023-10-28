/* 

==> Append Characters to String to Make Subsequence
Medium

-You are given two strings s and t consisting of only lowercase English letters.
-Return the minimum number of characters that need to be appended 
to the end of s so that t becomes a subsequence of s.
-A subsequence is a string that can be derived from another string 
by deleting some or no characters without changing the order of the remaining characters.

Example 1:
Input: s = "coaching", t = "coding"
Output: 4
Explanation: Append the characters "ding" to the end of s so that s = "coachingding".
Now, t is a subsequence of s ("coachingding").
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

Example 2:
Input: s = "abcde", t = "a"
Output: 0
Explanation: t is already a subsequence of s ("abcde").

Example 3:
Input: s = "z", t = "abcde"
Output: 5
Explanation: Append the characters "abcde" to the end of s so that s = "zabcde".
Now, t is a subsequence of s ("zabcde").
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.

*/

// let s = "coaching";
// let t = "coding";
// let s = "zgc";
// let t = "abcde";
let s = "abcde";
let t = "a";
// let s = "a";
// let t = "z";

function appendCharsToMakeSubsequence(s, t) {
  //   if (t.length === 1) return 0;
  let prefixCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[i]) {
      prefixCount++;
    }
  }
  if (prefixCount === 0)
    return {
      length: t.length,
      prefixCount: prefixCount,
    };
  //   let result = s.slice(0, prefixCount) + t.slice(prefixCount, t.length);
  return {
    length: t.slice(prefixCount, t.length).length,
    prefixCount: prefixCount,
  };
}

// console.log(appendCharsToMakeSubsequence(s, t));

//   let sp = prefixCount;
//   let tp = prefixCount;
//   for (let i = prefixCount; i < s.length; i++) {
//     if (s[sp] === t[tp]) {
//       //"coaching"  "coding";
//       sp++;
//       tp++;
//       suffixCount++;
//       console.log("Incremented both");
//     } else {
//       sp++;
//       console.log("Incremented sp");
//     }
//   }

