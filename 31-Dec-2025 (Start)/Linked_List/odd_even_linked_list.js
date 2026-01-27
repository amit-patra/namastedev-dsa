/**
 * Odd Even Linked List
 * URL: https://leetcode.com/problems/odd-even-linked-list/description/
 * Example-1
Input: head = [1,2,3,4,5]
Output: [1,3,5,2,4]
 * Example-2
Input: head = [2,1,3,5,6,4,7]
Output: [2,3,6,7,1,5,4]
 */
var oddEvenList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  let odd = head;
  let even = head.next;
  let evenStart = even;
  while (odd.next && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;
    odd = odd.next;
    even = even.next;
  }
  odd.next = evenStart;
  return head;
};
