/**
 * Find Words Containing Character
 * URL: https://leetcode.com/problems/find-words-containing-character/description/

Example 1:
Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.

Example 2:
Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
Output: [0,2]
Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

Example 3:
Input: words = ["abc","bcd","aaaa","cbc"], x = "z"
Output: []
Explanation: "z" does not occur in any of the words. Hence, we return an empty array.
 */

/**
 * Include Inbuild functions
 * 1st Aproach (Not reomended)
 */
var findWordsContaining = function (words, x) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    return result;
};

/**
 * Without Inbuild functions
 * 2nd Approach (Recommended)
 */

var findWordsContaining = function (words, x) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
       /* let str = words[i];
        let j = str.length;
        while (j >= 0) {
            if (str[j] == x) {
                result.push(i);
                break;
            }
            j--
        } */
        let str = words[i];
        for(let j=0; j < str.length; j++) {
            if(str[j] == x) {
                result.push(i);
                break;
            }
        }
    }
    return result;
};

/**
 * Time Complexity: O(n*m) 
 * where n is the number of words and m is the average length of the words.
 * Space complexity: O(k) where k is the number of words that contain the character x.
 */