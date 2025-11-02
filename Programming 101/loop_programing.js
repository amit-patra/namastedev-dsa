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
/*function searchSmallestNumber(){
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
console.log("Smallest Number of an array:: ", searchSmallestNumber()); */

// Second Largest number of an array
/* 
    Corner Cases:
    1. Array is empty
    2. Array is negetive number
    3. Array has duplicate number
****/
function secondLargestNumber(){
    // let arr = [];
    // let arr = [30]
    // let arr = [35,0,10,8,-17,30];
    // let arr = [-35,-0,-10,-8,-17,-30];
    let arr = [10,3,5,10, 20,20];
    if(arr.length<2){
        return "Array have atleast 2 elements";
    }
    let max1 = -Infinity;
    let max2 = -Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max1){
            max2 = max1;
            max1 = arr[i]
        } 
        else if(arr[i]>max2 && arr[i] !== max1){
            max2 = arr[i]
        }
    }
    return max2;
}

console.log("2nd Largest number is: ", secondLargestNumber());

