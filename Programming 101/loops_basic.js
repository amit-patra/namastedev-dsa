// for(let i=0; i<5;i++){
//     console.log("Execute the cycle", i+1);
    
// }

for(i=3; i<5; i++){
    // console.log("Execute: ", i);
}

for(i=2; i<9; i=i+2){
    // console.log("Execute: ", i);
}

for(i=5; i>0; i--){
    // console.log("Execute: ", i); 
}

for(i=5; i<4; i++){
    // console.log("Execute: ", i); 
}

// Infinit Loop
// 0

// Function call inside the loop
function greet(i){
    // console.log("Hello Javascript ", i);  
}

for(let i=0;i<5;i++){
    greet(i+1);
}

// Array wtih loop concept
let arr = [10,31,23,50]

// for(let i=0; i<arr.length; i++){
//     console.log("Array Element: ", arr[i]);  
// }

// Even Number in consloe
for(let i=0; i<arr.length; i++){
    if(arr[i]%2 ==0){
        //  console.log("Even Element: ", arr[i]); 
    }
     if(arr[i]%2 ==1){
        //  console.log("Odd Element: ", arr[i]); 
    }
}

// While loop Example
let x=0;
while(x<5){
    console.log(x);
    x++
}