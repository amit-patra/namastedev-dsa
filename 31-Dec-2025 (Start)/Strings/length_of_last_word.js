/**
 * Length of Last Word
 * URL: https://leetcode.com/problems/length-of-last-word/description/
 * 
Given a string s consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "

Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 */

// 1st Aproach (Not reomended)
var lengthOfLastWord = function(s) {
    s = s.trim();
    s = s.split(" ");
    return s[s.length-1].length;
};

// 2nd Approach (Recommended)
var lengthOfLastWord = function (s) {
    let i = s.length - 1;
    let count = 0;
    while (i >= 0) {
        if (s[i] !== " ") count++
        else if (s[i] == " " && count > 0) break;
        i--;
    }
    return count;
};