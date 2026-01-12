// 1. Loop in a loop
let count=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) { 
        count += 1;
        // console.log("*")
        console.log("i="+i,"j="+ j)
    }
 }

 // 2. Loop in a loop
for (let i = 0; i < 3; i++) { 
    for (let j = 0; j < i; j++) { 
        console.log(i, j);
    }
}

/* Output
1 0
2 0
2 1
*/

// 3. Loop in a loop
for (let i = 0; i < 5; i++) { 
    for (let j = 0; j <= i; j++) { 
        console.log(i, j);
    }
}

/* Output

*/

// 4. Loop in a loop
for (let i = 0; i < 3; i++) { 
    for (let j = i; j>0; j--) { 
        console.log(i, j);
    }
}

// 5. Loop in a loop
for (let i = 0; i < 3; i++) { 
    for (let j = i; j>=0; j--) { 
        console.log(i, j);
    }
}

// 6. Loop in a loop
for (let i = 5; i > 0; i--) { 
    for (let j = 0; j < i; j++) { 
        console.log(i,j)
    }
}