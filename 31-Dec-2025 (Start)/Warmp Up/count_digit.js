// 1. Write a funtion that return a count of a number
// Example input: 259 -> output: 3
/*
Corner Case:
 1. If number is zero (num = 0)
 2. If number is negetive number (nume = -123)
*/
  function countDigit(num) {
    let count = 0;
    num = Math.abs(num);
    if (num == 0) {
        count++;
    }
    while (num > 0) {
        num = Math.floor(num / 10);
        count++
    }
    console.log(count);
}
