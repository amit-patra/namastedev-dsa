/**
 * Binary Search
 * https://leetcode.com/problems/binary-search/description/
 * 
Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1
 */
let nums = [-1, 0, 3, 5, 9, 12],
  target = 0;
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

console.log("Search Index", search(nums, target));
