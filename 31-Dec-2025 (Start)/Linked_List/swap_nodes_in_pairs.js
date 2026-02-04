/**
 * Swap Nodes in Pairs
 * URL: https://leetcode.com/problems/swap-nodes-in-pairs/description/
 * Given a linked list, swap every two adjacent nodes and return its head. 
 * You must solve the problem without modifying the values in the list's nodes 
 * (i.e., only nodes themselves may be changed.)
Example 1:
    Input: head = [1,2,3,4]
    Output: [2,1,4,3]
Example 2:
    Input: head = []
    Output: []

Example 3:
    Input: head = [1]
    Output: [1]

Example 4:
    Input: head = [1,2,3]
    Output: [2,1,3]
 */
// 1st Approach
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let dummyNode = new ListNode();
  dummyNode.next = head;
  let p = dummyNode;
  let c = head;
  let n = head.next;
  while (c && n) {
    p.next = n;
    c.next = n.next;
    n.next = c;

    p = c;
    c = p.next;
    n = c && c.next;
  }
  return dummyNode.next;
};

/**
 * Time Complexity: O(n), where n is the number of nodes in the linked list. We visit each node once.
 * Space Complexity: O(1), constant extra space is used (just a few pointers).
 */

/**
 * 2nd Approach
 ** swap-nodes-in-pair-recursive-approach
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let l = head;
  let r = head.next;

  l.next = swapPairs(r.next);
  r.next = l;

  return r;
};
