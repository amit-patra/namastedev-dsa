/**
 * Isomorphic Strings
 * URL: https://leetcode.com/problems/isomorphic-strings/description/

Example 1:
Input: s = "egg", t = "add"
Output: true

Example 2:
Input: s = "f11", t = "b23"
Output: false

Example 3:
Input: s = "paper", t = "title"
Output: true
 */

var isIsomorphic = function (s, t) {
  let mapStoT = new Map();
  let mapTtoS = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!mapStoT.has(s[i]) && !mapTtoS.has(t[i])) {
      mapStoT.set(s[i], t[i]);
      mapTtoS.set(t[i], s[i]);
    } else if (mapStoT.get(s[i]) !== t[i] || mapTtoS.get(t[i]) !== s[i]) {
      return false;
    }
  }
  return true;
};
