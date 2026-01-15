/**
 * Missing Number
 * https://leetcode.com/problems/missing-number/description/
 Input: nums = [3,0,1]
Output: 2

Input: nums = [0,1]
Output: 2

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
 */
var missingNumber = function (nums) {
  let partialSum = 0;
  let len = nums.length;
  // n * (n+1) / 2 -----> this formula bascially sum of all number from 0 to n sequence
  const totalSum = (len * (len + 1)) / 2;
  for (let i = 0; i < len; i++) {
    partialSum = partialSum + nums[i];
  }
  return totalSum - partialSum;
};
