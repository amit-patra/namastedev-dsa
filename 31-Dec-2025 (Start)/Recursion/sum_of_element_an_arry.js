/**
 * Sum of all element in an Array
 * arr = [ 5, 3, 2, 0, 1]
 * output: 11
 */

let arr = [5, 4, 2, 0, 1];
function sum(n) {
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}

const result = sum(arr.length - 1);
console.log(result);
