/*
==> Generate Parentheses -- https://leetcode.com/problems/generate-parentheses/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:
Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:
Input: n = 1
Output: ["()"]

*/

// Deep understanding of recursion is here - https://chat.openai.com/share/33817afb-db25-4996-80a8-e58a63e23c7e

function generateParentheses(n) {
  /* Only Recursive Approach */
  let resArr = [];
  function backtrack(string, open, close) {
    if (string.length === 2 * n) {
      resArr.push(string);
      return;
    }
    if (open < n) backtrack(string + "(", open + 1, close);
    if (close < open) backtrack(string + ")", open, close + 1);
  }
  backtrack("", 0, 0);
  return resArr;
  /* Recursively Stack Approach */
  //   let stack = [];
  //   let resArr = [];
  //   function backTrace(open, close) {
  //     if (stack.length === 2 * n) {
  //       resArr.push(stack.join(""));
  //       return;
  //     }
  //     if (open < n) {
  //       stack.push("(");
  //       backTrace(open + 1, close);
  //       stack.pop();
  //     }
  //     if (close < open) {
  //       stack.push(")");
  //       backTrace(open, close + 1);
  //       stack.pop();
  //     }
  //   }

  //   backTrace(0, 0); // Initialize open and close
  //   return resArr;
}

console.log(generateParentheses(3));
console.log(generateParentheses(1));
