/**
 *  Find Most Frequent Vowel and Consonant
    * URL: https://leetcode.com/problems/find-most-frequent-vowel-and-consonant/description/

Example 1:
Input: s = "successes"
Output: 6

Explanation:

The vowels are: 'u' (frequency 1), 'e' (frequency 2). The maximum frequency is 2.
The consonants are: 's' (frequency 4), 'c' (frequency 2). The maximum frequency is 4.
The output is 2 + 4 = 6.

Example 2:
Input: s = "aeiaeia"
Output: 3

Explanation:
The vowels are: 'a' (frequency 3), 'e' ( frequency 2), 'i' (frequency 2). The maximum frequency is 3.
There are no consonants in s. Hence, maximum consonant frequency = 0.
The output is 3 + 0 = 3.
 */

var maxFreqSum = function (s) {
  let map = new Map();
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowel = 0;
  let maxConst = 0;
  for (ch of s) {
    map = map.set(ch, (map.get(ch) || 0) + 1);
    if (vowels.has(ch)) {
      maxVowel = Math.max(maxVowel, map.get(ch));
    } else {
      maxConst = Math.max(maxConst, map.get(ch));
    }
  }
  return maxVowel + maxConst;
};

/** (Need to verfy once)
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
