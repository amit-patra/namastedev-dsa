/**
 * Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
    You must implement a solution with a linear runtime complexity and use only constant extra space.
 * https://leetcode.com/problems/single-number/description/

    Example 1:
    Input: nums = [2,2,1]
    Output: 1

    Example 2:
    Input: nums = [4,1,2,1,2]
    Output: 4

    Example 3:
    Input: nums = [1]
    Output: 1
 */
// 1st Approch (Using Hash Table)
// !** Time Complexity O(n) && Space Complexity O(n)
var singleNumber = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  console.log(hash);
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
};

// 2nd And Best Approch (Using Bitwise XOR)
// !** Always use to find single occurance
// !** Time Complexity O(n) && Space Complexity 0
/* 
    A	B	A XOR B
    0	0 ->    0
    0	1 ->  	1
    1	0 ->  	1
    1	1 ->  	0
*/
var singleNumber = function (nums) {
  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};
