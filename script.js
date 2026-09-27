//   ======================== CallBack Function =================
//  Asa function jo ki c function ko argument k tor par pass kia jay 

function Message() {
    console.log("Hello Everyone");
    console.log("My Name is Fiza Rani");
}

function greet(message) {
    message();
}
greet(Message);

//   ================= Function 2 ===============
function message(a, b) {
    let sum = a + b;
    return sum;
}

function result(Sum) {
    console.log(Sum(2, 4));
}

result(message);

//   ===================== Function 3 ===============
function mess() {
    console.log("Hello , I'm Fiza");
    console.log("I'm a Passionate Frontend Developer");
}

function call(results) {
    results();
}
call(mess);

// ================= Higher Order Function =================
// asa function jo kic dusre function ko argument me recieve kare 


function Mess() {
    console.log("I'm a Passionate Frontend Developer");
}
function messages(message) {
    message();  //Higher Order Function
}
messages(Mess);  //CallBack function

//  ================= Clousers =====================

//  jb iner function outer function k variable ko yad rky to wo 
// clouser kehlata ha 
function outer() {
    let name = "Fiza";
    function inner() {
        console.log(name);
    }
    inner();
}
outer();

function Sum(a, b) {
    let sum = a + b;
    function calc() {
        console.log(sum);
    }
    calc();
}
Sum( 2 , 5);


 function Sub( a , b){
    let sub = a - b;
    function calc(){
        console.log(sub);
    }
    calc();
 }
 Sub(10 , 6);

 function Multiply(a , b){
    let multiply = a*b;

    function calc(){
    console.log(multiply);
    }
    Multiply();
 }

//   ====================First Class Function ========================
// JavaScript mein first-class function ka matlab hai ke functions ko bilkul 
// aam variables ya values ki tarah treat kiya jata hai. Is feature ki wajah 
// se JavaScript mein functions ko"first-class citizens" bhi kaha jata hai.


 const greeting = ()=>{
    document.write("Hello Everyone" + "<br>");
 }
 greeting();


 const intro = ()=>{
    document.write("My Name is Fiza Rani");
 }
 intro();

 function welcome(username){
    console.log(`Hello${username}`);
 }

 function goodby(username){
    console.log(`Hello ${username}`);
 }

//   Main function 

 function main(username, action) {
     action(username);
 }
 main("Ali" , welcome);


 function greet(user){
    console.log(`Hi ${user}`);
 }
 function message(user){
 console.log(`have a nice day${user}`);
 }

//  main 
 function Main( username , messages){
    messages(username);
 }
 Main(`Ahmed` ,greet)