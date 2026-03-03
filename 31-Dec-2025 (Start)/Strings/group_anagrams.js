/**
 * Group Anagrams
 * URL: https://leetcode.com/problems/group-anagrams/description/
 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 */
// 1st Approach
var groupAnagrams = function (strs) {
  let map = new Map();
  // n -> Times
  for (let i = 0; i < strs.length; i++) {
    // m log m -> Times
    let sortStrs = strs[i].split("").sort().join("");
    if (!map.has(sortStrs)) {
      map.set(sortStrs, [strs[i]]);
    } else {
      map.get(sortStrs).push(strs[i]);
    }
  }
  return [...map.values()];
};

/**
 * Where m is maximum length of each string
 * n is number of string
 *
 * Time Complexity: O(n*log m)
 * Space Complexity: O(n*m)
 */

// 2nd Approach

var groupAnagrams = function (strs) {
  let map = new Map();
  // n -> times
  for (let i = 0; i < strs.length; i++) {
    let freqArr = Array(26).fill(0);
    let s = strs[i];
    // m -> times
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      ++freqArr[index];
    }
    let key = "";
    // O(1) -> times
    for (let k = 0; k < 26; k++) {
      key = key + "#" + freqArr[k]; // Generate like string #1#2
      // Or
      //   key = key + String.fromCharCode(k) + freqArr[k]; // Generate Like string a1b2
    }
    if (!map.has(key)) {
      map.set(key, [s]);
    } else {
      map.get(key).push(s);
    }
  }
  return [...map.values()];
};

/**
 * Time Complexity: O(n*m)
 * Space Complexity: O(n*m)
 */
