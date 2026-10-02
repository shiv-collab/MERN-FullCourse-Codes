// scope and closure , HOF(higher order function)
// Global scope --> Accessible to everyone
// Functional scope --> Accessible only to that function
// Block level scope --> Accessible only to that block
// var jo hai esme accessible only to that block other me nhi 
// let a = 10; // Inka scope hai global scope jo ki sabko accessible hai 
// const b = 20;//Inka scope hai global 

// block scope hai yha se 
// if(true){
//     let d = 40;
//      console.log(d);
// }


// Functional scope hai
// function greet(){
//     let c = 30;
//     console.log(c);
// }
 
// greet();


// let global = 30;


// function greet(){
//     let global = 40;
//     // console.log(global);

//     function meet(){
//         let global = 50;
//         console.log(global);
//     }

//     meet();
// }

// greet();
// function outer() {
//   let count = 0;
//   return function inner() {
//     count++;
//     return count;
//   }
// }

// const counter = outer();
// console.log(counter());
// console.log(counter());



// function greet(name,age){
//     console.log("shivam"+name);
//     age();
// }



// function meet(){
//     console.log("hiiiii jiiiii");
// }

// greet(555,meet);




// // Step 1: Callback function define करो
// function greet(name) {
//   console.log("Hello " + name);
// }

// // Step 2: Higher Order Function (जो callback लेता है)
// function processUserInput(callback) {
//   let userName = "Shivam";
//   // callback को call करो
//   callback(userName);
// }

// // Step 3: Call higher order function और callback pass करो
// processUserInput(greet);
//  let a = 10;
//  let b = 20;

// function addNumber(num1,num2){
    
//     console.log(typeof num1);
//     num2();
// }

// function mutNumber(){
//     console.log("1334346234");
// }

// addNumber( "",mutNumber);

// Callback function 
let a = 23;
let b = 34;

function greet(num1,num2){
    console.log(num1);
    num2();
    
}

function preet(){
    console.log("Singh");
}
greet("Singh",preet);
