//1.  Print n ---- To ---- 1 using recursion;

function print(num) {
  if (num < 1) return;
  console.log(num);
  print(--num);
}
let a = 10;
print(a);

//2. Print 1 ---- To ---- n using recursion

function print(count) {
  if (count > 10) return;
  console.log(count);
  print(++count);
}
let count = 1;
print(count);
