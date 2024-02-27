/*
==> Valid Parentheses -- https://leetcode.com/problems/valid-parentheses/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

*/

function validParentheses(s) {
  let stack = [];
  //   for (let char of s) {
  //     if (char === "(" || char === "{" || char === "[") {
  //       stack.push(char);
  //     } else {
  //       const curStackLength = stack.length;
  //       if (
  //         !stack.length ||
  //         (char === ")" && stack[curStackLength - 1] !== "(") ||
  //         (char === "}" && stack[curStackLength - 1] !== "{") ||
  //         (char === "]" && stack[curStackLength - 1] !== "[")
  //       )
  //         return false;
  //       stack.pop();
  //     }
  //   }
  //   return true;

  if (s.length <= 1) {
    return false;
  } else {
    for (let char = 0; char < s.length; char++) {
      if (s[char] == "{") {
        stack.push("}");
      } else if (s[char] == "[") {
        stack.push("]");
      } else if (s[char] == "(") {
        stack.push(")");
      } else if (stack.pop() !== s[char]) {
        return false;
      }
    }
    return !stack.length;
  }
}

console.log(validParentheses("()")); // true
console.log(validParentheses("()[]{}")); // true
console.log(validParentheses("(]")); // false
