/**
 * Move Zeroes
 * https://leetcode.com/problems/move-zeroes/description/
 * Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */
// 1st Approch
var moveZeroes = function (nums) {
  let p = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      temp = nums[p];
      nums[p] = nums[i];
      nums[i] = temp;
      p = p + 1;
    }
  }
};

// 2nd Approch
var moveZeroes = function (nums) {
  let p = 0;
  let temp;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[p] = nums[i];
      p++;
    }
  }
  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }
};
