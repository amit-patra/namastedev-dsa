/**
 *
 * Reverse String
 */

var reverseString = function (s) {
  let temp;
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // swap (i, n-i-1);
    temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
};
