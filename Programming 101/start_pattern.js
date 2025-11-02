 /** 
  -> Write a program to print the following pattern:
    * * * *
    * * * *
    * * * *
    * * * *
-> Using Function with parameter for number of rows and columns
*/

function printPattern() {
    let n = 4;
    for (let i = 0; i < n; i++) {
        let row = ""
        for (let j = 0; j < n; j++) {
            row = row + " *";
        }
        console.log(row)
    }

}
// printPattern();

 /** 
  -> Write a program to print the following pattern:
    *
    * *
    * * *
    * * * *
-> Using Function with parameter for number of rows and columns
*/
function printPattern1() {
    let n = 4;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + " *";
        }
        console.log(row);
    }
}
// printPattern1();

 /** 
  -> Write a program to print the following pattern:
    1
    1 2
    1 2 3
    1 2 3 4
    1 2 3 4 5
-> Using Function with parameter for number of rows and columns
*/
function printPattern2() {
    let n = 5;
    for (let i = 0; i < n; i++) {
        let row = "";
        for (let j = 0; j <= i; j++) {
            row = row + " " + (j + 1);
        }
        console.log(row);
    }
}
// printPattern2();
 /** 
  -> Write a program to print the following pattern:
    1
    2 2
    3 3 3
    4 4 4 4
    5 5 5 5 5
-> Using Function with parameter for number of rows and columns
*/
function printPattern3() {
    let n = 5;
    for(let i=0; i<n; i++){
        let row = "";
        for(let j=0; j<=i; j++){
            row = row + " " + (i+1);
        }
        console.log(row);
    }
}
// printPattern3();
 /** 
  -> Write a program to print the following pattern:
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
-> Using Function with parameter for number of rows and columns
*/
/*function printPattern4(){
    let n=5;
    for(let i=n;i>0; i--){
        let row = "";
        for(let j=0; j<i; j++){
            row = row + " " + (j+1);
        }
        console.log(row);
        
    }
} */
function printPattern4(){
    let n=5;
    for(let i=0; i<n; i++){
        let row = "";
        for (let j=0; j<(n-i); j++){
            row = row + " "+ (j+1)
        }
        console.log(row);
    }
  }
printPattern4();

