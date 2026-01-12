/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xCopy = x;
    let rev = 0;
    while(x>0){
        if(x<0) return false;
       let rem = x%10
        rev = (rev*10)+rem;
        x = Math.floor(x/10);
    }
    return xCopy == rev;
};