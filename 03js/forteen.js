// create element in js 
// ye ek new element ko create kiya gya jo ki browser me open karte hi console me print hoga  
//  isme  hum new heading ko add karte hai 
const newElement = document.createElement("h2");
newElement.textContent = "this is my paragraph";
newElement.id = "second";

// select element
const element = document.getElementById("first");
element.after(newElement); //ye h1 ke bad print hoga newElement  
// element.before(newElement); // yha par phale print hoga newelement


const newElement2 = document.createElement("h3");
newElement2.textContent = "dussehra is coming ";
newElement2.id = "third";
// newElement2.className = "Dussehra";
// newElement2.className += " holi";
// newElement2.classList.remove("Dussehra");
newElement2.classList.add("Dussehra");
newElement2.classList.add("holi");
// newElement2.classList.remove("holi");


newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";
// newElement2.setAttribute("hello","this is my attribute");

element.before(newElement2); // ye h3 ke bad print hoga newElement2
// console.log(newElement2.getAttribute("class")); // ye h3 ke class ko print karega 
// console.log(newElement2.getAttribute("id")); // ye h3 ke id ko print karega
// /console.log(newElement2);

const listing = document.createElement("li"); // yha par ul create kiya gya hai 
listing.textContent = "this is my list"; // ye uska text content hai
const listing2 = document.createElement("li"); // yha par ul create kiya gya hai 
listing2.textContent = "this is my list2"; 

const listing3 = document.createElement("li");
listing3.textContent="panner";
const listingElement = document.getElementById("listing"); //ye listing select kiya gya hai  
listingElement.append(listing); // ye ul ke ander print hoga listing
listingElement.append(listing2);

const arr = ["milk","bread","butter","cheese"];// ye Arrray me kuch food items hai  

const  listingElement2 = document.getElementById("listing");
const fragment = document.createDocumentFragment(); 


for(let food of arr){ // ye for loop me food items ko print karega 
    const listing = document.createElement("li"); // yha par ul create kiya gya hai 
    listing.textContent = food; //ye uska text content hai 
    // listingElement.prepend(listing); // ye ul ke ander print hoga listing
    listingElement.append(listing); // ye ul ke ander print hoga listing2 and listing3 aur iska order hamesha last me rahega 
    // fragment.append(listing);
    }

    const select1 = document.getElementById("first"); //ye h1 ko select karega id ke through
    select1.remove();// ye h1 ko remove kar dega 

