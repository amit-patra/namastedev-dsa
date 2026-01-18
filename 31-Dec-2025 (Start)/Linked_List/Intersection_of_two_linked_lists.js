/**
 * Intersection of Two Linked Lists
 * Given the heads of two singly linked-lists headA and headB,
 * return the node at which the two lists intersect.
 * If the two linked lists have no intersection at all, return null.
 *
 * URL: https://leetcode.com/problems/intersection-of-two-linked-lists/description/
 */

var getIntersectionNode = function (headA, headB) {
  let storeNode = new Set();
  while (headB) {
    storeNode.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (storeNode.has(headA)) {
      return headA;
    }
    headA = headA.next;
  }
  return null;
};
