/*console.log(Math.round(10.5)); //11
console.log(Math.round(10.1)); //10
console.log(Math.floor(10.1)); // Alawasy ingonre fraction part //Output-> 10
console.log(Math.ceil(10.1)); //Always increase by 1 // Output-> 11
console.log(Math.abs(-678)); // Output -> 678
*/
// --------------------------------
// Input 259
// Output : 3
/* 
Corner Case:
1. If num is 0 (Zero);
2. If the number is negetive number (-678)
*/
function countDigit(){
    let num = 678;
    let count = 0;
    if(num == 0 ){
        count++;
    } else if(num<0){
        num = Math.abs(num)
    }
    while (num>0){
        num =Math.floor(num/10) ;
        // console.log(num);
        count++
    }
   console.log(count);
    
}
countDigit();

