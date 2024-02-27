/*

==> Min Stack -- https://leetcode.com/problems/min-stack/

Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
 

Constraints:

-231 <= val <= 231 - 1
Methods pop, top and getMin operations will always be called on non-empty stacks.
At most 3 * 104 calls will be made to push, pop, top, and getMin.

*/

var MinStack = function () {
  this.items = [];
  this.min = [];
  this.poped = null;
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.items[this.items.length === 0 ? 0 : this.items.length] = val;
  if (this.items.length === 0) {
    this.min.push(val);
  } else {
    this.min.push(
      Math.min(this.min.length > 0 ? this.min[this.min.length - 1] : val, val)
    );
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.poped = this.items[this.items.length - 1];
  this.items.length = this.items.length - 1;
  this.min.length = this.min.length - 1;
  return this.poped;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.items.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(5);
obj.push(4);
obj.push(6);
obj.push(1);
console.log(obj);
var param_3 = obj.top();
console.log(param_3);
const poped = obj.pop();
console.log(poped);
console.log(obj);
var param_4 = obj.getMin();
console.log(param_4);