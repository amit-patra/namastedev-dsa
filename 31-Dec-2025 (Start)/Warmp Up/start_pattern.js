/* 
1. Pattern Like 
    * * * *
    * * * *
    * * * *
    * * * *
*/
function patter1() {
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row = row + " " + "*";
    }
    console.log(row);
  }
}

/* 
2. Pattern Like 
    * 
    * * 
    * * * 
    * * * *
*/
function pattern2() {
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " " + "*";
    }
    console.log(row);
  }
}

/* 
2. Pattern Like 
    1 
    1 2 
    1 2 3 
    1 2 3 4
*/
function patter3() {
  let n = 4;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " " + (j + 1);
    }
    console.log(row);
  }
}

/* 
3. Pattern Like 
    1 
    2 2 
    3 3 3 
    4 4 4 4
*/
function patter4() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row = row + " " + (i + 1);
    }
    console.log(row);
  }
}

/* 
3. Pattern Like 
    1 2 3 4 5
    1 2 3 4
    1 2 3
    1 2
    1
*/
function patter5() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + " " + (j + 1);
    }
    console.log(row);
  }
}

/* 
4. Pattern Like 
    * * * * *
    * * * *
    * * *
    * * *
    * *
    *  
*/
function patter6() {
  let n = 5;
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row = row + " " + "*";
    }
    console.log(row);
  }
}

/* 
4. Pattern Like 
          *
        * *
      * * *
    * * * *
  * * * * *
  
*/

function patter7() {
  let n = 5;

  for (let i = 0; i < n; i++) {
    let row = "";
    // Adding Empty Space
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + " ";
    }
    // Adding Star (*)
    for (let k = 0; k < i + 1; k++) {
      row = row + "*";
    }
    console.log(row);
  }
  // Another Pattern
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = n - 1; j >= 0; j--) {
      if (i >= j) {
        row = row + " " + "*";
      } else {
        row = row + " " + " ";
      }
    }
    console.log(row);
  }
}

/* 
4. Pattern Like 
    1 
    1 0
    1 0 1
    1 0 1 0
    1 0 1 0 1
    1 0 1 0 1 0
*/
function patter8() {
  let n = 6;
  for (let i = 0; i < n; i++) {
    let row = "";
    let toggle = 1;
    // For Number
    for (let j = 0; j < i + 1; j++) {
      row = row + " " + toggle;
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(row);
  }
}

/* 
4. Pattern Like 
    1 
    0 1
    0 1 0
    1 0 1 0
    0 1 0 1 0
*/
function patter8() {
  let n = 6;
  let toggle = 1;
  for (let i = 0; i < n; i++) {
    let row = "";

    // For Number
    for (let j = 0; j < i + 1; j++) {
      row = row + " " + toggle;
      toggle = toggle == 1 ? 0 : 1;
    }
    console.log(row);
  }
}
