// Bubble Sort
/**
 * isSwapped = false  -> is used for improve the performance
 * if first time iteration its false so that means it alreay shorted so no need to execute the loop once again.
 * So its fine to break the loop.
 */

let arr = [5, 2, 3, -1, 0, -2];

function bubbleShort(nums) {
  let len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    let isSwapped = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
        isSwapped = true;
      }
    }
    if (!isSwapped) break;
  }
  console.log(nums);
}

bubbleShort(arr);

// Output [-2, -1, 0, 2, 3, 4, 5]
