/* 
==> Basic Calculator -- https://leetcode.com/problems/basic-calculator/description/

Given a string s representing a valid expression, 
implement a basic calculator to evaluate it, and return the result of the evaluation.

Note: You are not allowed to use any built-in function 
which evaluates strings as mathematical expressions, such as eval().

Example 1:
Input: s = "1 + 1"
Output: 2

Example 2:
Input: s = " 2-1 + 2 "
Output: 3

Example 3:
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23

 

Constraints:

    1 <= s.length <= 3 * 105
    s consists of digits, '+', '-', '(', ')', and ' '.
    s represents a valid expression.
    '+' is not used as a unary operation (i.e., "+1" and "+(2 + 3)" is invalid).
    '-' could be used as a unary operation (i.e., "-1" and "-(2 + 3)" is valid).
    There will be no two consecutive operators in the input.
    Every number and running calculation will fit in a signed 32-bit integer.
*/

// function basicCalculator(s) {
//   let pointer = 0;
//   let characters = s.trim().split("");
//   let stack = [];
//   let temp;
//   let hasOperator = false;
//   console.log({ characters });
//   while (pointer < characters.length) {
//     //   for (let i = 0; i < characters.length; i++) {
//     let char = characters[pointer];
//     console.log({ pointer, char });
//     if (
//       char !== " " &&
//       char !== "(" &&
//       char !== ")" &&
//       char !== "+" &&
//       char !== "-"
//     ) {
//       stack.push(char);
//       //   console.log("At 1st if", { stack });
//     } else if ((char === "+" || char === "-") && char !== " ") {
//       temp = char;
//       hasOperator = true;
//       //   console.log("At else if", { stack });
//     }
//     pointer++;
//     console.log({ temp });
//     if (char === "(") hasOperator = true;
//     if (stack.length > 1 && char != " " && temp !== undefined) {
//       //   console.log({ temp, char });
//       if (stack[stack.length - 1] <= 3 * 105) stack.push(temp);
//       //   console.log("At temp", { stack });
//     }
//     console.log("loop ends", { stack });
//   }
//   console.log({ exp: stack, hasOperator });
//   return hasOperator ? evalExp(stack) : +s;
// }

// function evalExp(tokens) {
//   let stack = [];
//   let operations = {
//     "+": (x, y) => x + y,
//     "-": (x, y) => x - y,
//   };
//   for (let token of tokens) {
//     console.log({ stack });
//     if (stack.length > 0 && operations[token]) {
//       let operand_1 = stack.pop();
//       let operand_2 = stack.pop();
//       if (token === "-") {
//         if (stack.length > 0 && stack[stack.length - 1] === "-") {
//           stack.pop(); // Remove the previous '-'
//           token = "+"; // Convert '-' to '+'
//           // [operand_2, operand_1] = [operand_1, operand_2];
//         } else {
//           token = "-"; // This is a unary minus
//         }
//       }
//       //   console.log({ token, operand_1, operand_2 });
//       stack.push(operations[token](operand_1, operand_2));
//     } else {
//       console.log(token);
//       stack.push(+token);
//     }
//   }
//   return stack[0];
// }

function basicCalculator(s) {
  let stack = [],
    currentNum = 0,
    sign = 1,
    result = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // console.log({ char, currentNum });
    if (char >= "0" && char <= "9") {
      // since it is string, using this subratct
      currentNum = currentNum * 10 + (char - "0");
    } else if (char === "+" || char === "-") {
      result += sign * currentNum;
      sign = char === "+" ? 1 : -1;
      currentNum = 0;
    } else if (char === "(") {
      // Push the current result and the sign onto the stack
      stack.push(result);
      stack.push(sign);
      // Reset the result and sign for the new expression within the parenthesis
      result = 0;
      sign = 1;
    } else if (char === ")") {
      // Add the current number to the result before closing the parenthesis
      result += sign * currentNum; // result is now the evaluation result of the expression within the parenthesis
      // Multiply by the sign before the parenthesis
      result *= stack.pop();
      // Add onto the result before the parenthesis
      result += stack.pop();
      // Reset currentNum
      currentNum = 0;
    }

    // Spaces and other non-relevant characters are ignored
    // console.log({ stack, result, currentNum, sign });
  }

  // Add the last number outside the loop
  result += sign * currentNum;

  return result;
}

console.log(basicCalculator("1 + 1")); // 2
console.log(basicCalculator(" 2-1 + 2 ")); // 3
console.log(basicCalculator("(1+(4+5+2)-3)+(6+8)")); //23
console.log(basicCalculator("2147483647")); //2147483647
console.log(basicCalculator("(1)")); // 1
console.log(basicCalculator("1-(     -2)")); // 3
