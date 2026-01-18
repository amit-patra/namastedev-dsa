/**
 * Check Palindrome of an array
 * 
console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 4]));    // false
console.log(isPalindrome([1]));             // true
console.log(isPalindrome([]));              // true
 */

// 1st Approch
function isPalindrome(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// 2nd Approch
function isPalindrome(arr) {
  const len = arr.length;

  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome([1, 2, 3, 2, 1])); // true
console.log(isPalindrome([1, 2, 3, 4])); // false
console.log(isPalindrome([1])); // true
console.log(isPalindrome([])); // true
