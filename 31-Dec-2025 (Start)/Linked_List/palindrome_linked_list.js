/**
 * Palindrome Linked List
 * URL: https://leetcode.com/problems/palindrome-linked-list/description/
 * Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

Example -1
Input: head = [1,2,2,1]
Output: true

Example-2
Input: head = [1,2]
Output: false
 */
/**
 * 1st Approch Time and Sapce complexity is O(n)
 * ! Not Recomandable (Because sapce complexity is also O(n))
 */
var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - i - 1]) {
      return false;
    }
  }
  return true;
};

/**
 * 2nd Approch
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Middle of Node
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // Reverse a value
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  // Check for Palndrome
  let first = head;
  let second = prev;
  while (second) {
    if (first.val !== second.val) {
      return false;
    }
    first = first.next;
    second = second.next;
  }
  return true;
};
