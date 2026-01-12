/**
 * Sum of first n number
 * Example:
 * Input: 5
 *  1 + 2 + 3 + 4 + 5
 * Output: 15
 */

// logic::: 5+4+3+2+1
function sum(n) {
  if (n == 0) return 0;
  return n + sum(n - 1);
}
const result = sum(5);
console.log("Sum:", result);
