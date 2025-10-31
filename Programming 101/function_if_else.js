
function elegibleToVote(age){
    if(age<0){
     console.log("Invalid Input");
    }
    else if(age<18){
     console.log("Not elegable");
    } else{
     console.log("Elegable");
     
    }
 }
 
 // elegibleToVote(10);
 // elegibleToVote(20);
 // elegibleToVote(30);
 // elegibleToVote(-1);
 
 // Check the number even or Odd
 
 function isEvenNumber(num){
     if(num%2 == 0){
         return true;
     } else{
         return false
     }
 }
 const isEven = isEvenNumber(5)
 console.log(isEven)