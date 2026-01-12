// 1. write a function that searches for an element in an array and return an index and if element is not present retun (-1)

const searchElement = (elm) => {
  const arr = [5, 10, 20, 30, 15];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == elm) {
      return i;
    }
  }
  return -1;
};

console.log(searchElement(50)); // -1
console.log(searchElement(20)); // 2

// 2.  Write a function that returns number of negetive  numbers in an array;

function countNegetives() { 
    const arr = [10, 20, -1, -3, 20, -12];
    let count = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < 0) { 
            count += 1;
        }
    }
    return count;
}

console.log(countNegetives()) // 3

// 3 Write a function that return a largest number inside array

function findLargestNumber() {
    const arr = [10, 20, 5, 30, 7];
    // const arr = [-9, -3, -7];
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] > largest) { 
            largest = arr[i]
        }
    }
    return largest;
}

console.log(findLargestNumber());

// 4
// Write a function that return a Smallest  number inside array

function findSmallestNumber() {
    const arr = [10, 20, 5, 30, 7];
    // const arr = [-9, -3, -7];
    let smallest = Infinity;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < smallest) { 
            smallest = arr[i]
        }
    }
    return smallest;
}

console.log(findSmallestNumber()); // 5

// 5
