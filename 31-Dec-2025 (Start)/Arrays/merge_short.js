/**
 * Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/description/
 * 
 * Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
    Output: [1,2,2,3,5,6]

    Input: nums1 = [1], m = 1, nums2 = [], n = 0
    Output: [1]

 */

// 1st Approch
var merge = function(nums1, m, nums2, n) {
    let p1 = 0;
    let p2 = 0;
    let nCopy = nums1.slice(0,m);
    console.log(nCopy)
    for(let i=0; i<m+n; i++){
        if(p2>=n || (nCopy[p1]<nums2[p2] && p1<m)){
            nums1[i] = nCopy[p1];
            p1++
        } else {
            nums1[i] = nums2[p2];
            p2++
        }
    }
    console.log("nums1:", nums1)
};

// 2nd and Standard Approch
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) break;

        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
};