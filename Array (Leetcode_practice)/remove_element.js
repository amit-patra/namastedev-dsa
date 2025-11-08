// https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {
    let x=0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] != val){
            nums[x] = nums[i];
            x =x+1;
        }
    }
    return x;
};

let arr = [3,1,3,4,3,3,3,7];
const delArrayIndex = removeElement(arr, 3);
arr.length = delArrayIndex;
console.log(arr);
