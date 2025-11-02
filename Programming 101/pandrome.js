// Input  121 // true
// Input  123 // false
// console.log(121%10); // Output-> 1
// console.log(121/10); // Output-> 12.1

/* 
Corner Case:
Input: 121 // Output: true;
Input: -121 // Output: (121 -) false
Input: 10 // Output: (01) false
*/

function isPalindrome(x){
    let xCopy = x;
    let rev = 0;
    while(x>0){
        if(x<0) return false;
       let rem = x%10
        rev = (rev*10)+rem;
        x = Math.floor(x/10);
    }
    return xCopy == rev;
    
}
console.log( isPalindrome(123));

