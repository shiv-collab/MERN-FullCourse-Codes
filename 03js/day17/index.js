// const jsonFormat = `{
//     "name":"shivam",
//     "age": 20,
//     "address": "lucknow"
// }`;
//  // convert JSON java script object

// const JsObject = JSON.parse(jsonFormat);
// console.log(JsObject);

// const orderDetail = {
//     orderId: 123123,
//     food:["Pizza","biryani","coke"],
//     cost: 620,
//     customer_name: "Shivam kumar",
//     customer_location: "Lucknow",
//     restaurant_location: "Lucknow"
// }

// function placedOrder(orderDetail){
//     console.log(`${orderDetail.cost} Payment is in progress`);
    
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
     
//       if(Math.random()>0.1){
//       console.log("Payment is received and order get placed");
//       orderDetail.status = true;
//        resolve(orderDetail);
//       }
//       else{
//         reject("Payment is failed");
//       }

//     },3000)
//     })
   
// }



// function preparingOrder(orderDetail){
//     console.log(`Your food preparation started of ${orderDetail.food}`);
    
//     return new Promise((resolve,reject)=>{
  
//      setTimeout(()=>{

//         if(Math.random()>0.05){ 
//         console.log("Your order is now prepared");
//         orderDetail.token = 123;
//         resolve(orderDetail);
//         }
//         else{
//             reject("Food item is not persent at restaurant");
//         }
        
//     },3000);
//     })
    
// }


// function pickupOrder(orderDetail){
//     console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
//     return new Promise((resolve,reject)=>{


//         setTimeout(()=>{
//          if(Math.random()>0.05){   
//         console.log("I have picked up the order");
//         orderDetail.received = true;
//         resolve(orderDetail);
//         }
//         else{
//            reject("Delivery boy Unable to reach restaurant")
//         }
//     },3000);
//     })
    
// }


// function deliverOrder(orderDetail){
//     console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
//     return new Promise((resolve,reject)=>{
//        setTimeout(()=>{
//         console.log("Order delivered succesfully");
//         orderDetail.delivery = true;
//         resolve(orderDetail);
//     },3000)
//     })
    
// }


// placedOrder(orderDetail)
// .then((orderDetail)=>preparingOrder(orderDetail))
// .then((orderDetail)=>pickupOrder(orderDetail))
// .then((orderDetail)=>deliverOrder(orderDetail))
// .then((orderDetail)=>{
//     console.log(orderDetail);
// })
// .catch((error)=>{
//     console.log("Error: ", error);
// }).
// finally(()=>{
//     console.log("I am doing cleanup");
// })


// Async await 
// async function always return a promise 
//  async function greet(){  // ye asynchronous function hai
    // return "shivam"; //ye simple value return hai 

    // return new Promise((resolve,reject)=>{
        // resolve("shivam");
    // })
// }

// const response = greet();
// console.log(response);
// response.then((data)=>console.log(data))
// .catch((error) => {
//     console.log("Error:", error);
// });

// fetch("https://api.github.com/users")
// .then((response)=>response.json())
// .then((data)=>console.log(data));    
async function github() {
    // console.log("Global context");
    try{

    const response = await fetch("https://api.github.com/users");
    if(!response.ok){
        throw new Error("Data is not present");
    }
    const data = await response.json();
    // console.log(data);
    const parent = document.getElementById("first");

    for(let user of data){

        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement('img');
        image.src = user.avatar_url;

        const userName = document.createElement('h2');
        userName.textContent = user.login;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";

        element.apppend(image,userName,anchor);
        parent.append(element);
    }

    }
    catch(error){
        console.log("error");
    }

}


github();

// console.log("Friday is good ")