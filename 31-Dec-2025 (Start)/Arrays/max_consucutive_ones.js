/**
 * Max Consecutive Ones
 * https://leetcode.com/problems/max-consecutive-ones/description/
 * 
 * 
Example 1:
Input: nums = [1,1,0,1,1,1]

Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

Example 2:
Input: nums = [1,0,1,1,0,1]
Output: 2
 */
// 1st Approch
var findMaxConsecutiveOnes = function (nums) {
  let occurance = 0;
  let max_occurance = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      occurance = occurance + 1;
      if (occurance > max_occurance) {
        max_occurance = occurance;
      }
    } else {
      occurance = 0;
    }
  }
  return max_occurance;
};
// 2nd Approch (Best ***)
var findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let maxCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(currentCount, maxCount);
      currentCount = 0;
    }
  }
  return Math.max(currentCount, maxCount);
};
