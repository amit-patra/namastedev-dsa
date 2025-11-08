// https://namastedev.com/learn/namaste-dsa/reverse-string

var reverseString = function(s) {
   let len = s.length;
   let halfLen = len/2;
   for(let i=0; i<halfLen; i++){
    let temp = s[i];
    s[i] = s[len-1-i];
    s[len-1-i] = temp;
   }
    return s;   
};


let arr = ["h","e","l","l","o"];
// arr.length = revString;
console.log(reverseString(arr));