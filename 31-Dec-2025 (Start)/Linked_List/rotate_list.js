/**
 * Rotate List
 * URL: https://leetcode.com/problems/rotate-list/description/
Example 1:
    Input: head = [1,2,3,4,5], k = 2
    Output: [4,5,1,2,3]
Example 2:
    Input: head = [0,1,2], k = 4
    Output: [2,0,1]
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let f = head;
  let s = head;
  let curr = head;
  let length = 0;

  // Calculate the length of node
  while (curr) {
    curr = curr.next;
    length++;
  }
  // To Avoid un-necessery rotations
  k = k % length;

  // move f pointer k steps ahead
  for (let i = 0; i < k; i++) {
    f = f.next;
  }

  // Reaching the end of the list
  while (f.next) {
    f = f.next;
    s = s.next;
  }

  f.next = head;
  let newHead = s.next;
  s.next = null;
  return newHead;
};

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
