// function handleClick() { //  yha per function called handleClick() banaya gya h jo button click hone pr call hoga
//     const element = document.getElementById("title"); // yha per humne h1 elemnet ko get kiya jo id title h
//     element.textContent = "you clicked the button"; // yhe per humne h1 element ka text content change kar diya jab button click hoga to ye text change ho jayega 
// }

// const element = document.getElementById("title");
// element.onclick = function handleClick() { // yha pe humne onclick event listener lagaya h jiske humne handleclick function ko call kiya h
//     element.textContent = "you clicked the button";
//     element.style.backgroundColor = "lightblue";

// }

// element.onclick = function handleClick(){ //yha per humne re onclick event listener lagaya h jiske humne handleclick function ko call kiya hai aur yha pe over write ho jayega text change ho jayega 
//     element.textContent = "you reclicked the button";
// }

// element.addEventListener("click",()=>{ // ye sabse best way h event listener lagane ka jisme humne arrow function use kiya h aur yha pe humne text content change kar diya h  
    // element.textContent = "I am the best";
// })

// element.addEventListener("click",()=>{ //ye sabse best way h kquki multiple event listener lagane ka option deta h aur yha pe humne background color change kar diya h 
    // element.style.backgroundColor = "brown";
// })

// element.addEventListener("dblclick",()=>{ // yha per humne double click enevt listener lagaya ja jisme humne text content change kar diay 
//     element.textContent = "I am the best";
// })

// element.addEventListener("mouseenter",()=>{ // yha per humne mouseenter event listener lagaya h jisme humne text content change kar diya hai 
//     element.textContent = "I am the best";
// })

// element.addEventListener("mouseleave",()=>{
//     element.textContent = "I am the best";
// })

// const child3 = document.getElementById("child3");
// child3.addEventListener("click",()=>{
//     // child3.style.backgroundColor = "lightyellow";
//     child3.textContent = "I am the best";
// })

// const element1 = document.getElementById("container");
// console.log(container.children);

// for (let child of container.children) {
//     child.addEventListener("click", () => {
//         child.textContent = "I am the best";
//     });
// } 

// Bubbling phase 
// capture phase on hai: top se down aaoge: us time pe event ko trigger kar diya jaayega
// capture phase off hai: event hai usko down to up(Bubbling phase bolte hai ,tab trigger kiya jaayega) 
const grandParent = document.getElementById("grandparent");
grandParent.addEventListener("click",()=>{
    console.log("grandparent clicked");
},true)

const parent = document.getElementById("parent");
parent.addEventListener("click",()=>{
    console.log("parent clicked");
},false)

const child = document.getElementById("child");
child.addEventListener("click",()=>{
    console.log("child clicked");
},true)