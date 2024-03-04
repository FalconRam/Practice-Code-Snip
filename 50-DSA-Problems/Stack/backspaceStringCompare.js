/* 
==> Backspace String Compare -- https://leetcode.com/problems/backspace-string-compare/

Given two strings s and t, return true 
if they are equal when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
 

Example 1:
Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:
Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:
Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".


Constraints:

    1 <= s.length, t.length <= 200
    s and t only contain lowercase letters and '#' characters.

Follow up: Can you solve it in O(n) time and O(1) space?

*/

function backspaceStringCompare(s, t) {
  let stackS = [];
  let stackT = [];
  for (let char of s) {
    if (char === "#") stackS.pop();
    if (char !== "#") stackS.push(char);
  }
  console.log(stackS);
  for (let char of t) {
    if (char === "#") stackT.pop();
    if (char !== "#") stackT.push(char);
  }
  console.log(stackT);
  return stackS.join("") === stackT.join("");
}
console.log(backspaceStringCompare("ab#c", "ad#c"));
console.log(backspaceStringCompare("ab##", "c#d#"));
console.log(backspaceStringCompare("a#c", "b"));
