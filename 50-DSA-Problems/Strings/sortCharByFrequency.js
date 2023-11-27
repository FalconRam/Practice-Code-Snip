/*
==> Sort Characters By Frequency -- https://leetcode.com/problems/sort-characters-by-frequency/
Given a string s, sort it in decreasing order based on the frequency of the characters. 
The frequency of a character is the number of times it appears in the string.

Return the sorted string. If there are multiple answers, return any of them.

Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

Example 2:
Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.

Example 3:
Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

function sortCharByFrequency(s) {
  // Create a Map() and set the each char count in the instance
  const charFrequency = new Map();
  for (let char of s)
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);

  // Sort the char by character frequency
  // Since charFrequency is instance of Map() we have privileges to access methods like keys() directly
  const sortedChars = Array.from(charFrequency.keys()).sort(
    (a, b) => charFrequency.get(b) - charFrequency.get(a)
  );

  // Build a sorted string from the Sorted Array
  // and Append repeated char using repeat function
  let sortedString = "";
  for (let char of sortedChars)
    sortedString += char.repeat(charFrequency.get(char));
  return { charFrequency, sortedChars, sortedString };
}

console.log(sortCharByFrequency("tree"));
console.log(sortCharByFrequency("cccaaa"));
console.log(sortCharByFrequency("Aabb"));
