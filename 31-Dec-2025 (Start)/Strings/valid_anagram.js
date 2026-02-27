/**
 * Valid Anagram
 * URL: https://leetcode.com/problems/valid-anagram/description/
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

// 1st Approach (But Not recomand)

var isAnagram = function (s, t) {
  let arr = s.split("");
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  let a = t.split("");
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j + 1] < a[j]) {
        let temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
      }
    }
  }
  if (arr.join("") === a.join("")) {
    return true;
  } else {
    return false;
  }
};

// 2nd Approach (But Not recomand)
var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

/**
 * Time Complexity O(log n)
 * Space Complexity O(n)
 */

// 3rd Approach (Recomand)
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();
  for (let ch of s) {
    map = map.set(ch, (map.get(ch) || 0) + 1);
  }
  for (let ch of t) {
    if (!map.get(ch) || map.get(ch) < 0) {
      return false;
    } else {
      map = map.set(ch, (map.get(ch) || 0) - 1);
    }
  }
  return true;
};

/**
 * Time Complexity O(n) + O(n) => O(n)
 * Space Complexity: O(1) // Because this is string so it will contain (a-z)// Which is static
 */
