/**
 * Remove Nth Node From End of List
 * URL: https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 Given the head of a linked list, remove the nth node from the end of the list and return its head.
Example 1:
    Input: head = [1,2,3,4,5], n = 2
    Output: [1,2,3,5]

Example 2:
    Input: head = [1], n = 1
    Output: []

Example 3:
Input: head = [1,2], n = 1
Output: [1]
 */
// 1st Approch (Two Pass)
var removeNthFromEnd = function (head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let length = 0;
  while (head) {
    head = head.next;
    length++;
  }
  let prevPos = length - n;
  let prev = sentinal;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinal.next;
};

// 2nd Approch (One Execution) (One Pass)
var removeNthFromEnd = function (head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let second = sentinal;
  let first = sentinal;
  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  while (first.next) {
    second = second.next;
    first = first.next;
  }
  second.next = second.next.next;
  return sentinal.next;
};

/**
 * Time Complexity: O(n)+O(n)= O(2n) ---> O(n)
 * Space Complexity: O(1)
 */
