 /*   Corner Cases:
    1. Array is empty
    2. Array is negetive number
    3. Array has duplicate number
****/
// Write a function that return a second largest number
function secondLargest() {
    let arr = [4, 9, 0, 2, 8, 7, 1]; // 8
    // let arr = [-1, -2, -3]; // -2
    // let arr = [];
    // let arr = [10, 20]; // 10
    // let arr = [10, 20, 20] // Op-> 10
    if (arr.length <2) { 
        return null
    }
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i <= arr.length; i++) { 
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) { 
            secondLargest = arr[i]
        }
    }
    return secondLargest;
}

console.log(secondLargest());