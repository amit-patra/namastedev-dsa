/**
 * Largest Odd Number in String
 * URL: https://leetcode.com/problems/largest-odd-number-in-string/description/
 
Example 1:
Input: num = "52"
Output: "5"
Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

Example 2:
Input: num = "4206"
Output: ""
Explanation: There are no odd numbers in "4206".

Example 3:
Input: num = "35427"
Output: "35427"
Explanation: "35427" is already an odd number.
 */

// 1st Approach
var largestOddNumber = function (num) {
  for (let i = num.length; i > 0; i--) {
    if (num[i - 1] % 2 !== 0) {
      return num.substring(0, i);
    }
  }
  return "";
};

// 2nd Approach
var largestOddNumber = function (num) {
  let len = num.length;
  while (len >= 0) {
    if (Number(num[len]) % 2 == 1) {
      return num.substring(0, len + 1);
    }
    len--;
  }
  return "";
};
