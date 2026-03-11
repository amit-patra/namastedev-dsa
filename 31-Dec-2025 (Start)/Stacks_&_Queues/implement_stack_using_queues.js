/**
 * Implement Stack using Queues
 * URL: https://leetcode.com/problems/implement-stack-using-queues/description/
 * 
 Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]
 */

/**
 * !Code using two queue
 */

var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  let len = this.q1.length;
  for (let i = 0; i < len - 1; i++) {
    this.q2.push(this.q1.shift());
  }

  let ans = this.q1.shift();
  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;
  return ans;
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  let len = this.q1.length;
  for (let i = 0; i < len - 1; i++) {
    this.q2.push(this.q1.shift());
  }
  let front = this.q1[0];

  this.q2.push(this.q1.shift());

  let temp = this.q1;
  this.q1 = this.q2;
  this.q2 = temp;

  return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};
