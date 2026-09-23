//   ======================== CallBack Function =================
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

// ================= Higher Order Function =================
// asa function jo kic dusre function ko argument me recieve kare 


 function Mess(){
    console.log("I'm a Passionate Frontend Developer"); 
 }
 function messages(message){
     message();  //Higher Order Function
 }
 messages(Mess);  //CallBack function

//  ================= Clousers =====================

//  jb iner function outer function k variable ko yad rky to wo 
// clouser kehlata ha 
function outer(){
    let name = "Fiza";
    function inner(){
        console.log(name);
    }
    inner();
}
outer();