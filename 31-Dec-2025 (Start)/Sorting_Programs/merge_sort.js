/**
 * Merge Sort (Divide and Conquer Algorithm)
 * URL: https://leetcode.com/problems/sort-an-array/description/
 * Input: [5, 1, 3, 2]
 * Output: [1, 2, 3, 5]
 */

let arr = [5, 1, 3, 2];
function mergeSort(a) {
  if (a.length <= 1) return a;
  let mid = Math.floor(a.length / 2);
  let left = mergeSort(a.slice(0, mid));
  let right = mergeSort(a.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  let i = 0,
    j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] > right[j]) {
      res.push(right[j]);
      j++;
    } else if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    }
  }
  return [...res, ...left.slice(i), ...right.slice(j)];
}
const result = mergeSort(arr);
console.log(result);
