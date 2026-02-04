/**
 * Merge Two Sorted Lists
 * URL: https://leetcode.com/problems/merge-two-sorted-lists/description/
 * 
You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]
 */

var mergeTwoLists = function (l1, l2) {
  let dummyNode = new ListNode();
  let curr = dummyNode;
  while (l1 && l2) {
    if (l2.val > l1.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  if (!l2) {
    curr.next = l1;
  }
  if (!l1) {
    curr.next = l2;
  }
  return dummyNode.next;
};
