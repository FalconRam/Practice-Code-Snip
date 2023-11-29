/* 

==> Permutation in String - https://leetcode.com/problems/permutation-in-string/

Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

Permutation in String means - if s2 continuosuly contains a s1, irrespective of order

Example 1:
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:
Input: s1 = "ab", s2 = "eidboaoo"
Output: false

*/

function checkPermutation(s1, s2) {
  // Check if s1 can be a permutation of s2
  if (s1.length > s2.length) {
    return false;
  }

  // Define Map for s1 and s2
  let charFrequencyS1 = new Map();
  let charFrequencyS2 = new Map();

  // Count frequency of s1 and s2
  for (let char of s1) {
    charFrequencyS1.set(char, (charFrequencyS1.get(char) || 0) + 1);
  }
  // Initialize the frequency map for the initial window of s2
  for (let i = 0; i < s1.length; i++) {
    charFrequencyS2.set(s2[i], (charFrequencyS2.get(s2[i]) || 0) + 1);
  }

  // Compare Initial window of s2 for finding permutation
  if (compareMap(charFrequencyS1, charFrequencyS2)) return true;
  console.log("Before Count rest of freq ==>");
  console.log({ charFrequencyS1, charFrequencyS2 });

  // Initialize rest of frequency for s2 and Compare
  for (let i = s1.length; i < s2.length; i++) {
    // Sliding window Approach - Remove the leftmost char and add rigthmost char
    let leftChar = s2[i - s1.length]; // "eidbacooo"
    let rightChar = s2[i];
    charFrequencyS2.set(leftChar, charFrequencyS2.get(leftChar) - 1);
    if (charFrequencyS2.get(leftChar) === 0) charFrequencyS2.delete(leftChar);

    charFrequencyS2.set(rightChar, (charFrequencyS2.get(rightChar) || 0) + 1);
    console.log("After Count rest of freq ==>");
    console.log({ charFrequencyS1, charFrequencyS2 });
    if (compareMap(charFrequencyS1, charFrequencyS2)) return true;
  }

  // Helper function to compare two maps
  function compareMap(charFrequencyS1, charFrequencyS2) {
    if (charFrequencyS1.size != charFrequencyS2.size) return false;

    for (let [key, value] of charFrequencyS1) {
      if (charFrequencyS2.get(key) !== value) return false;
    }
    return true;
  }
  return false;
}

console.log("For ab, eidbaooo");
console.log(checkPermutation("abc", "eidbacooo"));
console.log("For ab, eidbaooo");
console.log(checkPermutation("abc", "eidbacooo"));
console.log("For ab, eidboaoo");
console.log(checkPermutation("ab", "eidboaoo"));
console.log("For adc, dcda");
console.log(checkPermutation("adc", "dcda"));

console.log(checkPermutation2("adc", "dcda"));

// One of the leetcode solution
function checkPermutation2(s1, s2) {
  const len1 = s1.length;
  const len2 = s2.length;
  let s1Freq = new Array(26).fill(0);
  let s2Freq = new Array(26).fill(0);
  const start = "a".charCodeAt(0);

  for (let i = 0; i < len1; i += 1) {
    s1Freq[s1.codePointAt(i) - start] += 1;
    s2Freq[s2.codePointAt(i) - start] += 1;
  }

  for (let i = len1; i < len2; i += 1) {
    if (s1Freq.every((count, index) => count === s2Freq[index])) return true;

    s2Freq[s2.codePointAt(i) - start] += 1;
    s2Freq[s2.codePointAt(i - len1) - start] -= 1;
  }

  return s1Freq.every((count, index) => count === s2Freq[index]);
}

// function checkPermutation(s1, s2) {
//   const charFrequencyS1 = new Map();
//   const charFrequencyS2 = new Map();

//   for (let char of s1) {
//     charFrequencyS1.set(char, (charFrequencyS1.get(char) || 0) + 1);
//   }
//   for (let char of s2) {
//     charFrequencyS2.set(char, (charFrequencyS2.get(char) || 0) + 1);
//   }
//   for (let char of s1)
//     if (
//       charFrequencyS2.has(char) &&
//       charFrequencyS2.get(char) === charFrequencyS1.get(char)
//     ) {
//       let slicedRight = s2.slice(
//         s2.indexOf(s1[0]),
//         s2.indexOf(s1[0]) + s1.length
//       );
//       let slicedLeft = s2.slice(
//         s2.length - s2.indexOf(s1[0]) - 1,
//         s2.indexOf(s1[0]) + s1.length - 1
//       );
//       console.log({
//         s2,
//         slicedLeft,
//         left_Start_Index: s2.length - s2.indexOf(s1[0]) - 1,
//         left_End_Index: s2.indexOf(s1[0]) + s1.length - 1,
//         slicedRight,
//         right_Start_Index: s2.indexOf(s1[0]),
//         right_End_Index: s2.indexOf(s1[0]) + s1.length,
//       });

//       return (
//         slicedRight.split("").sort().join("") ===
//           s1.split("").sort().join("") ||
//         slicedLeft.split("").sort().join("") === s1.split("").sort().join("")
//       );
//     }
//   return false;
// }
