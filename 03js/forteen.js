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
element.before(newElement2);
console.log(newElement2); 
