/**
 * Linked List Cycle
 * URL: https://leetcode.com/problems/linked-list-cycle/description/
 * 
Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list 
that can be reached again by continuously following the next pointer. 
Internally, pos is used to denote the index of the node that tail's next pointer is connected to. 
Note that pos is not passed as a parameter.
Return true if there is a cycle in the linked list. Otherwise, return false.

Example 1:
    Input: head = [3,2,0,-4], pos = 1
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

Example 2: 
    Input: head = [1,2], pos = 0
    Output: true
    Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

Example 3:
    Input: head = [1], pos = -1
    Output: false
    Explanation: There is no cycle in the linked list.
 */

/**
 * Hash Table
 * * This is Space complexity O(n) and Time complexity is O(n)
 * ! We need to improve it as space complexity as 0(1)
 */
var hasCycle = function (head) {
  let curr = head;
  let seenNodes = new Set();
  while (curr) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};

/**
 * * Floyd's Algorithm
 * ? So we need improve the performance as sapce complexity O(1) below
 * ! Slow and Fast Pointer approch (where some time slow and fast will match)
 */

var hasCycle = function (head) {
  if (head == null) return false;
  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
