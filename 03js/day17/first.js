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
function placedorder(callback){
    console.log("Payment is in progress");

    setTimeout(()=>{
        console.log("Payment is received and order get placed");
        callback();
    },3000);
};

function preparingorder(callback){
    console.log("your food preparation is started");

    setTimeout(()=>{

        console.log("your food is now prepared");
        callback();
    },3000);
};

function pickupOrder(callback){
    console.log("Delivery boy is an on way to pickup order");
    setTimeout(()=>{
        console.log("I Have picked up the order ");
        callback();
    },3000);
};

function deliverOrder(){
    console.log("I am on way to deliver your order ");

    setTimeout(() => {
        console.log("Order deliver Successfully");
    },3000);
};

placedorder(()=>{
    preparingorder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    });
});

