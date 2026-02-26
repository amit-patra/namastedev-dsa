/**
Longest Common Prefix
URL: https://leetcode.com/problems/longest-common-prefix/description/

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function (strs) {
  let x = 0;
  while (strs[0].length > x) {
    let ch = strs[0][x];
    for (let i = 1; i < strs.length; i++) {
      if (ch !== strs[i][x] || strs[i].length == x) {
        return strs[0].substring(0, x);
      }
    }
    x++;
  }
  return strs[0];
};

/**
 * Time Complexity: O(s)
 * sum of length of all string
 * Space Complexity: O(1)
 */
