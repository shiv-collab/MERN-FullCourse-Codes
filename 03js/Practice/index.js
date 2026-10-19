// this call apply bind 
//this: class object method
// strict mode vs non strict mode 
// 'use strict' // ye latest js strict mode hai
// global Object: In window it is called window,in node js, it is called global
// globalThis point to global object of the environment

// normal function: non strict mode, this will point to global object
// in strict mode: It will point to undeffined

// this keyword in global scope: NodeJS(Empty Object), in browser it will point to global Object 
// arrow function take this keyword from it lexical environment

//call apply bind,this point to the invoking object

// In class costructor, this point to newly create empty{} Object


// var a=10;
// var b= 20;
// console.log(a,b);

// function greet( name1, name2 ){
//     console.log(name1,name2);
// }

// greet("Shivam","Singh");

// console.log(global); //ye global object hai jo Node.ja me accses hai

// document.getElementById("first");
// console.log(globalThis);

//Learn about this kayword
// 'use strict'
// console.log(this);

// Function 
//100 user: greet function:100*memory, code copy paste
// 'use strict'
// function greet(){
//     console.log(`hi ${this.name}`); 
// }

// function incrementAge(value,name){
//     this.age+=value;
//     this.name= name;
//     console.log(this.age);
//     console.log(this.name);
// }

// const user = {
    // name:"Shivam",
    // age:30,
    // greet: function(){
    //     console.log(`hi ${this.name}`);
//     // }
// }

// const user2 = {
//     name:"Satyam",
//     age:30,
// }
// greet();
// greet.call(user);
// greet.call(user2);

// incrementAge.call(user2,10,"mohan");
// incrementAge.apply(user2,[10,"mohan"]);
//  const incr = incrementAge.bind(user2,10,"Mohan");

//  console.log(incr);
// incr();

// this == user 
// user.greet();

// "use strict"

// function greet(){
//     console.log(this);
// }

// greet();

//class

// class Person{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// this = {name:"Mohit", age:20}

// const p1 = new Person("Mohit",20);

// console.log(p1);


// Arrow Function: this doesnt exist for arrow function, lexical environment scope
// 'use strict'

// console.log(this);

// const greet = ()=>{
//     console.log(this);
// }

// function meet(){
//     console.log(this);
// }

// greet();
// meet();

// 'use strict'

// const user = {
//     name: "Shivam",
//     greet: function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(that);
//         }
//         meet();
//     }
// }

// user.greet();



// const stopwatch={
//     second:0,
//     start: function(){

//         const that = this;
//         setInterval(function(){
//             // console.log(this);
//             that.second++;
//             console.log(that.second);
//         },1000);
//     }
// }

// stopwatch.start();




const user = {
    name:"Shivam",
    greet:()=>{
        console.log(this);
    }
}

user.greet();