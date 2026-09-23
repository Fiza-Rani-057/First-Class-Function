//   ========================CallBack Function =================
//  Asa function jo ki c function ko argument k tor par pass kia jay 

function Message(){
    console.log("Hello Everyone");
    console.log("My Name is Fiza Rani");
}

 function greet(message){
  message();
 }
 greet(Message);

//   ================= Function 2 ===============
 function message(a , b){ 
    let sum = a + b;
    return sum;
 }

 function result(Sum){
   console.log(Sum(2 , 4));
 } 

 result(message);

//   ===================== Function 3 ===============
 function mess(){
    console.log("Hello , I'm Fiza");
    console.log("I'm a Passionate Frontend Developer");
 }

 function call(results){
   results();
 }
 call(mess);