/**
 * Sum of all Odd number in an array
 * arr = [5,3,2,0,1] // output 5+3+1 = 9
 */

let arr = [5, 3, 2, 0, 1];
function sumOfOdd(n) {
  const isOdd = arr[n] % 2 != 0 ? true : false;
  if (n == 0) return isOdd ? arr[n] : 0;

  return isOdd ? arr[n] + sumOfOdd(n - 1) : 0 + sumOfOdd(n - 1);
}
const result = sumOfOdd(arr.length - 1);
console.log(result);

// Smiplify the logic bellow
function Smiplify() {
  let arr = [5, 3, 2, 0, 1];
  function sumOfOdd(n) {
    const isOdd = arr[n] % 2 != 0;
    if (n == 0) return isOdd ? arr[n] : 0;

    return (isOdd ? arr[n] : 0) + sumOfOdd(n - 1);
  }
  const result = sumOfOdd(arr.length - 1);
  console.log(result);
}
