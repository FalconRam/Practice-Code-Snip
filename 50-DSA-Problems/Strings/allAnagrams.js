/* 
===> Find All Anagrams in a String -- https://leetcode.com/problems/find-all-anagrams-in-a-string/

- Given two strings s and p, return an array of all the start indices of p's anagrams in s. 
- You may return the answer in any order.

- An Anagram is a word or phrase formed by rearranging the letters of a different word 
- or phrase, typically using all the original letters exactly once.

 

Example 1:
Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".

Example 2:
Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".

*/

function allAnagrams(s, p) {
  console.time("allAnagramsUsingMap");
  // Check if s can be a Anagram of p
  if (p.length > s.length) return [];
  let result = new Array();

  // Define Map for s and p
  let charFrequencyS = new Map();
  let charFrequencyP = new Map();

  // Count frequency of s and p
  for (let char of p)
    charFrequencyP.set(char, (charFrequencyP.get(char) || 0) + 1);

  // Initialize the frequency map for the initial window of s
  for (let i = 0; i < p.length; i++)
    charFrequencyS.set(s[i], (charFrequencyS.get(s[i]) || 0) + 1);

  // Compare Initial window of p for finding Anagram
  if (compareAndPush(charFrequencyS, charFrequencyP, p.length)) {
    result.push(0);
    console.log("Pushed 0");
  } else console.log("Not Pushed 0");
  // Initialize rest of frequency for p and compare
  let current = 0;
  for (let i = p.length; i < s.length; i++) {
    // Sliding window Approach - Remove the leftmost char and add rigthmost char
    let leftChar = s[i - p.length]; // "bpaa"
    let rightChar = s[i];
    charFrequencyS.set(leftChar, charFrequencyS.get(leftChar) - 1);
    if (charFrequencyS.get(leftChar) === 0) charFrequencyS.delete(leftChar);

    charFrequencyS.set(rightChar, (charFrequencyS.get(rightChar) || 0) + 1);

    current += 1;
    if (compareAndPush(charFrequencyS, charFrequencyP)) {
      result.push(current);
      console.log("Pushed " + current);
    } else console.log("Not pushed " + current);
  }
  function compareAndPush(charFrequencyS, charFrequencyP) {
    let keyCount = 0;

    console.log({ charFrequencyS, charFrequencyP });

    if (charFrequencyS.size !== charFrequencyP.size) return false;

    for (let [key, value] of charFrequencyP) {
      if (charFrequencyS.get(key) === value) {
        keyCount += 1;
      }
    }
    return charFrequencyP.size === keyCount;
  }
  console.timeEnd("allAnagramsUsingMap");
  return result;
}

console.log(allAnagrams("cbaebabacd", "abc")); // [0,6]
console.log(allAnagrams("abab", "ab")); // [0,1,2]
console.log(allAnagrams("baa", "aa")); // [1]
console.log(allAnagrams("bpaa", "aa")); // [2]

function allAnagramsUsingASCII(s, p) {
  console.time("allAnagramsUsingASCII");
  if (p.length > s.length) return [];
  const result = [];
  const charFrequencyS = new Array(26).fill(0);
  const charFrequencyP = new Array(26).fill(0);

  // Count frequency of p
  for (let char of p) charFrequencyP[char.charCodeAt(0) - "a".charCodeAt(0)]++;

  // Initialize the frequency map for the initial window of s
  for (let i = 0; i < p.length; i++)
    charFrequencyS[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;

  // Compare Initial window of p for finding Anagram
  if (compare(charFrequencyS, charFrequencyP)) result.push(0);

  // Initialize rest of frequency for p and compare
  for (let i = p.length; i < s.length; i++) {
    // Sliding window Approach - Remove the leftmost char and add rightmost char
    charFrequencyS[s[i - p.length].charCodeAt(0) - "a".charCodeAt(0)]--;
    charFrequencyS[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;

    if (compare(charFrequencyS, charFrequencyP)) result.push(i - p.length + 1);
  }

  function compare(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  console.timeEnd("allAnagramsUsingASCII");
  return result;
}

console.log(allAnagramsUsingASCII("cbaebabacd", "abc")); // [0,6]
console.log(allAnagramsUsingASCII("abab", "ab")); // [0,1,2]
console.log(allAnagramsUsingASCII("baa", "aa")); // [1]
console.log(allAnagramsUsingASCII("bpaa", "aa")); // [2]
