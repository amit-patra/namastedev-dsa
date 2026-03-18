/**
 * Implement Queue using Stacks
 * URL: https://leetcode.com/problems/implement-queue-using-stacks/description/
Example 1:
Input
["MyQueue", "push", "push", "peek", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 1, 1, false]
 */

/**
 * Apprach -1
 */

var MyQueue = function () {
  this.st1 = [];
  this.st2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.st1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  let len = this.st1.length;

  for (let i = 0; i < len - 1; i++) {
    this.st2.unshift(this.st1.pop());
  }

  let ans = this.st1.pop();
  let temp = this.st1;
  this.st1 = this.st2;
  this.st2 = temp;
  return ans;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  let len = this.st1.length;
  for (let i = 0; i < len - 1; i++) {
    this.st2.unshift(this.st1.pop());
  }
  let ans = this.st1[0];
  this.st2.unshift(this.st1.pop());
  let temp = this.st1;
  this.st1 = this.st2;
  this.st2 = temp;
  return ans;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.st1.length == 0;
};

/**
 * * Apprach -2
 */

var MyQueue = function () {
  this.st1 = [];
  this.st2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.st1.push(x);
};

/**
 * @return {number}
 */

/**
 * Big O - wors case - O(n)
 * Avarage Case = O(1)
 */
MyQueue.prototype.pop = function () {
  if (this.st2.length == 0) {
    while (this.st1.length) {
      this.st2.push(this.st1.pop());
    }
  }
  return this.st2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  if (this.st2.length == 0) {
    while (this.st1.length) {
      this.st2.push(this.st1.pop());
    }
  }
  let len = this.st2.length;
  return this.st2[len - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.st1.length == 0 && this.st2.length == 0;
};
