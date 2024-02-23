/*
==> Group Anagrams -- https://leetcode.com/problems/group-anagrams/

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

*/

function groupAnagrams_1(words) {
  /*
  Hash Map Approach - 1 ==> 
  
  TimeComplexity: O(N*M)
  
  Group same word of anagram and store in map as values array & 
  key is hashstring, i.e., array of freqCount of word
  
  */
  if (!words.length) return [];
  const anagramMap = new Map();
  groupAnagrams(words);
  function groupAnagrams(words) {
    for (const word of words) {
      const hash = getHashKey(word);
      const values = anagramMap.get(hash) || [];
      values.push(word);
      anagramMap.set(hash, values);
    }
  }
  function getHashKey(word) {
    const freqOfWord = new Array(26).fill(0);
    for (const char of word) {
      const charCode = char.charCodeAt(0) - "a".charCodeAt(0);
      freqOfWord[charCode] += 1;
    }
    return freqOfWord.toString();
  }
  return Array.from(anagramMap.values());
}

function groupAnagrams_2(words) {
  /*
Hash Map Approach - 2 ==> sort the each word and check if sorted word is in Map, if exists push it to Map,
then get the values from the map for that sorted word and push current word into Map

TimeComplexity: O(N*M log(M))

In-Built sort fn TimeComplexity: O( M log(M))
N is number of elem in words Array
M is number of char in word

*/
  if (!words.length) return [];

  const anagramMap = new Map();
  for (let word of words) {
    const sortedWord = word.split("").sort().join("");
    if (!anagramMap.has(sortedWord)) anagramMap.set(sortedWord, []);
    const values = anagramMap.get(sortedWord);
    values.push(word);
    anagramMap.set(sortedWord, values);
  }
  return Array.from(anagramMap.values());
}

console.log(groupAnagrams_1(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams_1(["a"]));
console.log(groupAnagrams_1([""]));

console.log(groupAnagrams_2(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams_2(["a"]));
console.log(groupAnagrams_2([""]));
