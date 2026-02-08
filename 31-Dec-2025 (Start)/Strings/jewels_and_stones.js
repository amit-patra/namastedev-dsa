/**
 * Jewels and Stones
 * URL: https://leetcode.com/problems/jewels-and-stones/description/

Example 1:
Input: jewels = "aA", stones = "aAAbbbb"
Output: 3

Example 2:
Input: jewels = "z", stones = "ZZ"
Output: 0
 */
// 1st Aproach but not recommended
// Brute Force Approach
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    let stoneWord = stones[i];
    for (let j = 0; j < jewels.length; j++) {
      let jewelWord = jewels[j];
      if (jewelWord === stoneWord) {
        count++;
        break;
      }
    }
  }
  return count;
};

// 2nd Approach (Optimized solution)

var numJewelsInStones = function (jewels, stones) {
  let jSet = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jSet.add(jewels[i]);
  }

  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    // if(jewels.includes(stones[j])){} // Time Complexity O(n)
    if (jSet.has(stones[j])) {
      // Time Complexity O(1)
      // Space Complexity O(1) because set size will be at max 52 (a-z , A-Z)
      count++;
    }
  }
  return count;
};
