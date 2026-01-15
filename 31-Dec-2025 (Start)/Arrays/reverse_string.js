/**
 *
 * Reverse String
URL: https://leetcode.com/problems/reverse-string/description/
 
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

var reverseString = function (s) {
  let temp;
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // swap (i, n-i-1);
    temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
};
