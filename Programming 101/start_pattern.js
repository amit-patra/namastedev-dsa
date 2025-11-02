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
Both have same output
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
// printPattern4();
 /** 
  -> Write a program to print the following pattern:
    * * * * *
    * * * *
    * * *
    * *
    * 
-> Using Function with parameter for number of rows and columns
*/

function printPattern5(){
    let n=5;
    for(let i=0; i<n; i++){
        let row = "";
        for (let j=0; j<(n-i); j++){
           row = row +" *";
            
        }
         console.log(row);
    }
}
// printPattern5();

 /** 
  -> Write a program to print the following pattern:
-> Using Function with parameter for number of rows and columns
            *        
          * *
        * * *
      * * * *
    * * * * * 
*/

/* function printPattern6(){
    n=5;
    for(let i=0; i<n; i++){
        let row = "";
        let count = 0;
        for(let j=0; j<=i; j++){
            row = row+" *";
            count = count+1;
      
        }
        for(let k=0; k<(n-count); k++){
            row="  "+row;
        }
       
        console.log(row);
    }
} */
// Another example
function printPattern6(){
    n=5;
for(let i=0; i<n;i++){
    let row = "";
    // Adding Empty Space
    for(let j=0; j<n-(i+1); j++){
        row = row+"  ";
    }
    // Adding Stars
    for(let k=0; k<i+1; k++){
        row = row+"* "
    }
    console.log(row);
}
}
// printPattern6();
 /** 
  -> Write a program to print the following pattern:
-> Using Function with parameter for number of rows and columns
   1
   1 0
   1 0 1 0
   1 0 1 0 1
   1 0 1 0 1 0
*/

function printPattern7(){
    let n=6;
    for(let i=0; i<n; i++){
        let row = "";
       let  toggle = 1;
        for(let j=0; j<=i; j++){
            row = row+ " "+ toggle;
            toggle = toggle==1? "0" : "1";

        }
        console.log(row);
        
    }
}
// printPattern7();
 /** 
  -> Write a program to print the following pattern:
-> Using Function with parameter for number of rows and columns
   1
   0 1
   0 1 0 
   1 0 1 0 
   1 0 1 0 1
*/
function printPattern8(){
    let n=5;
    let toggle = 1;
    for(let i=0; i<n;i++){
        let row = "";
        for(let j=0; j<=i; j++){
            row = row + " "+toggle;
            toggle = toggle==1? 0: 1;
        }
        console.log(row);
        
    }
}
printPattern8();
