//prototype and classes 
//  const obj ={
//     name:"Shivam",
//     age:20,
//     greet:function(){
//         console.log(obj.name)
//     }
//  }

// console.log(obj.greet());
// obj.greet()

// console.log(obj.hasOwnProperty("names"))
// console.log(obj.toString());

// console.log(arr.length);


// const obj2 = {
//     account:30
// }

// obj2.__proto__= obj;
// console.log(obj.hasOwnProperty("names"))
// // console.log(obj2.name)

// const obj1 = {
//     name:"Shivam",
//     age:20,
//     greet:function(){
//         console.log(`hello${this.name}`);
//     }
// }

// const obj2 = {
//     name:"Kumar",
//     age:20,
//     greet:function(){
//         console.log(`hello${this.name}`);
//     }
// }

// const obj3 = {
//     name:"Singh",
//     age:20,
//     greet:function(){
//         console.log(`hello${this.name}`);
//     }
// }



// ----------------- Class -------------------------

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        console.log(`Hi ${this.name}`);

    }
}

const person1 = new Person("Shivam",20);
const person2 = new Person("Singh",21);

console.log(person1);