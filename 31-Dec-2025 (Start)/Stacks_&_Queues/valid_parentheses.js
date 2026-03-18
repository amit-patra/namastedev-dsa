/**
 * Valid Parentheses
 * URL: https://leetcode.com/problems/valid-parentheses/description/
 
Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
 */

// Approach -1
var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (
        !top ||
        (top !== "[" && s[i] == "]") ||
        (top !== "{" && s[i] == "}") ||
        (top !== "(" && s[i] == ")")
      ) {
        return false;
      }
    }
  }
  return stack.length == 0;
};

// Approach -2
var isValid = function (s) {
  let map = new Map([
    ["{", "}"],
    ["[", "]"],
    ["(", ")"],
  ]);
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      stack.push(s[i]);
    } else {
      let top = stack.pop();
      if (!top || map.get(top) !== s[i]) {
        return false;
      }
    }
  }
  return stack.length == 0;
};
