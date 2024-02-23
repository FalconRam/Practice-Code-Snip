/*
==> Top K Frequent Words -- https://leetcode.com/problems/top-k-frequent-words/description/

Given an array of strings words and an integer k, return the k most frequent strings.

Return the answer sorted by the frequency from highest to lowest. 
Sort the words with the same frequency by their lexicographical order.


Example 1:
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]

Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.


Example 2:
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]

Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
 

Follow-up: Could you solve it in O(n log(k)) time and O(n) extra space?

*/

function frequentWords_k(words, k) {
  const map = new Map();
  for (let word of words) {
    map.set(word, (map.get(word) || 0) + 1);
  }
  console.log(map);
  console.log([...map.entries()], [...map.keys()]);
  const sortedEntries = [...map.entries()]
    .sort((a, b) => {
      if (a[1] === b[1]) {
        // Sort by lexicographical order if frequencies are the same
        return a[0].localeCompare(b[0]);
      } else return b[1] - a[1]; // else, sort by frequency
    })
    .splice(0, k);
  const keys = [];
  console.log(keys, sortedEntries);
  for (let sortedEntrie of sortedEntries) {
    keys.push(sortedEntrie[0]);
  }

  return keys;
}

console.log(
  frequentWords_k(["i", "love", "leetcode", "i", "love", "coding"], 2)
);
console.log(
  frequentWords_k(
    ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"],
    4
  )
);
