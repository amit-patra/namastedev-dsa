// Write a function to search an array element in an array 
// If Element is not present then just return -1



/*function searchArrElement(num){
    let arr = [10,20,30,40];
    for (let i=0;i<arr.length; i++){
        if(arr[i] == num){
            return i
        }
    }
    return -1;
}

console.log("Array Index Number is:: ", searchArrElement(22)) */

// Write a function to return a count of negetive number of an array
/*function searchNegetiveNumber(){
    let arr = [10,20, -4, -1, 7];
    let count = 0
    for(let i=0; i<arr.length; i++){
        if(arr[i]<0){
            count += 1;
        }
    }
    return count;
}

console.log("Negetive Number List:: ", searchNegetiveNumber());*/

// Large number of an array
/* function searchLargestNumber(){
    // let maxNum= Number.NEGATIVE_INFINITY;
    let maxNum= -Infinity;
    let arr = [5,0,10,8,17,500];
    for(let i=0; i<arr.length; i++){
        if(maxNum<arr[i]){
        maxNum = arr[i]
        }
    }
    return maxNum;
}
console.log("Largest Number of an array:: ", searchLargestNumber()); */

// Smallest number of an array
function searchSmallestNumber(){
    // let maxNum= Number.NEGATIVE_INFINITY;
    let maxNum= Infinity;
    let arr = [5,0,10,8,-17,500];
    for(let i=0; i<arr.length; i++){
        if(maxNum>arr[i]){
        maxNum = arr[i]
        }
    }
    return maxNum;
}
console.log("Smallest Number of an array:: ", searchSmallestNumber());
