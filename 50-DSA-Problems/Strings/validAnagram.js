/* 
==> Valid Anagram -- https://leetcode.com/problems/valid-anagram/

- Given two strings s and t, return true if t is an anagram of s, and false otherwise.

- An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
typically using all the original letters exactly once.


Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let objS = {};
  let objT = {};

  for (let char of s) {
    if (objS[char]) {
      objS[char] += 1;
    } else objS[char] = 1;
  }
  for (let char of t) {
    if (objT[char]) {
      objT[char] += 1;
    } else objT[char] = 1;
  }
  let isValid = true;
  Object.keys(objS).map((key) => {
    if (objS[key] !== objT[key]) {
      isValid = false;
    }
  });

  return isValid;
}

console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
