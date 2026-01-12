/** Factorail of number
 * Input 5
 * Output 120 (5*4*3*2*1)
 */

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

const result = factorial(5);
console.log(result);
