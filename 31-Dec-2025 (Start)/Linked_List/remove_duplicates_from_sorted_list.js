/**
 * Remove Duplicates from Sorted List
 * URL: https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
 * Example 1:
Input: head = [1,1,2]
Output: [1,2]
 * Example 1:
Input: head = [1,1,2,3,3]
Output: [1,2,3]
 */
var deleteDuplicates = function (head) {
  let curr = head;
  while (curr && curr.next) {
    if (curr.val == curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
