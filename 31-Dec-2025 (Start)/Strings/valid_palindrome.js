/**
 * Valid Palindrome
 * URL: https://leetcode.com/problems/valid-palindrome/description/
 * 
Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
 */

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let revStr = "";
  let filterString = "";
  for (let ch of s) {
    if (ch.match(/[a-z0-9]/g)) {
      filterString += ch;
      revStr = ch + revStr;
    }
  }
  return filterString === revStr;
};

/**
 * Time Complexity: o(n)
 * Space Complexity: O(n)
 */

/**
 * 2nd Aproch
 */

var isPalindrome = function (s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/g, "");
  let len = s.length - 1;
  let x = 0;
  while (len > x) {
    if (s[len] !== s[x]) {
      return false;
    }
    len--;
    x++;
  }
  return true;
};

/**
 * 3rd Aproch
 */
var isPalindrome = function (s) {
  s = s.toLowerCase();
  let j = s.length - 1;
  let i = 0;
  while (j > i) {
    if (s[j].match(/[^a-z0-9]/g)) {
      j--;
    } else if (s[i].match(/[^a-z0-9]/g)) {
      i++;
    } else if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }
  return true;
};
/**
 * Time Complexity: o(n)
 * Space Complexity: O(1)
 */
