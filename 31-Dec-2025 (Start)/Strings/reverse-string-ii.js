/**
 * Reverse String II
 * https://leetcode.com/problems/reverse-string-ii/description/
 * 
Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"
 */

var reverseStr = function (s, k) {
  s = s.split("");
  for (let x = 0; x < s.length; x = x + 2 * k) {
    let mid = Math.floor(k / 2);
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + k - i - 1];
      s[x + k - i - 1] = temp;
    }
  }
  return s.join("");
};

/**
 * Time Complexity : O(n)
 * Space Complexity : O(n)
 * Space Complexity : O(1) -> If nt converting to array (Like if you use some different language)
 */
