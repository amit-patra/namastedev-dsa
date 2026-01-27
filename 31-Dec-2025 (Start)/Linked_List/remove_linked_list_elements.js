/**
 * Remove Linked List Elements
 * URL: https://leetcode.com/problems/remove-linked-list-elements/description/
 * 
Example 2: 
    Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5]

Example 2:
    Input: head = [], val = 1
    Output: []

Example 3:
    Input: head = [7,7,7,7], val = 7
    Output: []
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let prev = sentinal;

  while (prev && prev.next) {
    if (prev.next.val === val) {
      prev.next = prev.next.next;
    } else {
      prev = prev.next;
    }
  }
  return sentinal.next;
};
