// Event loops in javascript
// javascript is a single threaded and synchronous but still asychronous task perform in web APIs task is Async task  

// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");



// callstack hai jo noramal line by line code exectution hoga 
// console.log("start");
// ye web APIs me iske helper hote hai jaise setTimeout, fetch, DOM events .
// ye callback queue hao jo call stack empty hone ke bad hi callback queue se callback lega aur execute hoga 
// setTimeout(() => {
//     console.log("settimeout");

// });
// // ye microtask queue hai jo high priority hota  hai ye callback queue se phale execute hoga 
// Promise.resolve().then(() =>{
//     console.log("promises done");
//});

// console.log("task1");
// console.log("task2");
// console.log("task3");

// Zomato Application
// Callback hell function 
function placedorder(orderDetail){
    console.log(`${orderDetail.cost}Payment is in progress`);

    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        orderDetail.status = true ;
    },3000);
};

function preparingorder(orderDetail){
    console.log(`${orderDetail}your food preparation is started`);

    setTimeout(()=>{

        console.log("your food is now prepared");
        orderDetail.status  = true;
    },3000);
};

function pickupOrder(){
    console.log("Delivery boy is an on way to pickup order");
    setTimeout(()=>{
        console.log("I Have picked up the order ");
        
    },3000);
};

function deliverOrder(){
    console.log("I am on way to deliver your order ");

    setTimeout(() => {
        console.log("Order deliver Successfully");
    },3000);
};



// Promises : 

// console.log("Hello World Start");
//code 

// const p1 = fetch("https://api.github.com/users");
// // console.log(p1);
// // Fullfilled , Reject

// const p2 = p1.then((Response)=>{  // Read the promises variable
//     return Response.json(); // response.json jo hai wo java script me jo data bit me hoga wo  convert hoga object me karta hai  
// })

// p2.then((Response)=>{
//     console.log(Response);

// })

// fetch("https://api.github.com/users")
// .then((response)=>{
//     return response.json();

// })
// .then((data)=>{
//     console.log(data);

//     const parent = document.getElementById("first");
//     for (let i= 0;i<data.length;i++){
//     const image = document.createElement('img');
//     image.src= data[i].avatar_url;
//     image.style.height = "40px";
//     image.style.width = "40px";

//     parent.append(image);
//     }
// })
// .catch((error)=>{
//     const parent = document.getElementById("first");
//     parent.textContent = error.message;
// })

// How to Create promise 

// const p1 = new Promise((resolve,reject)=>{
//     resolve({
//         name:"shivam",
//         age: 30,

//     });
// })

// p1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);
// })
// const j1 = {
//     name: "shivam kumar",
//     age: 30,
//     address: "lucknow",
//     // c : undefined,
// }
// // convert to json

// const jsonformat  = JSON.stringify(j1);
// console.log(jsonformat);

// const jsonformat = `{
//     "name":"shivam",
//     "age" : 20,
//     "address": "lucknow"
// }`;
//  // convert JSON java script object

// const jsObject = JSON.parse(jsonformat);
// console.log(jsObject);
