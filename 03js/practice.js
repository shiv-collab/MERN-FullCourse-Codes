// Number 

// let a = 10;
// let b= 354.2536; // ye data number hai aur number jo hai primitive hota hai jo ki immmutable hote hai
// let c = b.toFixed(1);// ye bhi string return karega & new string deta hai 
// console.log(typeof c); //method hai jo decimal ke bad ke dogit to lega & ye string return karega  

// console.log(b.toPrecision(3)); // these precision value are given roundoff value to main value ye bhi string return karta hai
// console.log(b.toString());
// let num5 = parseInt("100");     // "100" → 100 //  these are convert string to int 
// const num6 = parseFloat("99.99"); // "99.99" → 99.99 // these are convert string to float
// console.log(typeof num5);


// Second method to create Number 

// let inf = Infinity;   // Infinity inka type number return hoga 
// let notNum = NaN;     // Not a Number
// console.log( notNum);

// let str = ("123");
// let num =   Number(str);
// console.log(typeof num); // Output 123 type number 


// let value1 = parseInt("45.67");
// let value2 = parseFloat("45.67");
// console.log(typeof value1, typeof value2);

// let a = Number(true); // 1 return hoga type number 
// let b = Number(false); // 0 return hoga type number
// console.log( a, b);

// let x = Number("Hello");
// console.log(x); // NaN  // "Hello" ko number me convert nahi kiya ja sakta, isliye result NaN

// let y = 10 / 0;
// console.log(y); // Infinity // JavaScript me zero se divide karne par error nahi aata, balki Infinity return hota hai.

// let val1 = parseFloat("99.99px"); // 99.99
// let val2 = Number("100px200");   // nan
// console.log(val2)


// let a = new Number(20); //ye object ke tarike me create hoga & new keyword ka use number to object me create karne ke liye use karte hai 
// console.log( typeof a);

// Math

// console.log(Math.abs(-4)); // positive value ke liye iska use 
// console.log(Math.PI);  // pi ka value retuen hoga 
// console.log(Math.LN10); // log 10 ka value return hoga 
// console.log(Math.SQRT2);  // square root ka value return hoga 
// console.log(Math.ceil(2.4)); // ceil means upper value return hoga 
// console.log(Math.floor(2.4)); // floor means lower value return hoga 
// console.log(Math.random()); //random value generate karta hai wo bhi [0,1]  ke bich 0 is included nut 1 is not included

// /Satebaji ka game banate hai (0-9)

// console.log(Math.floor(Math.random()*6+1)); 
// console.log(Math.floor(Math.random()*10+1));   
// Math.floor(Math.random()*totalNumberofOutcome)+shift // formula hai 

// console.log(Math.floor(Math.random()*11+15)); 

// console.log(Math.floor(Math.random()*(max-min+1))+min); 
// console.log(Math.floor(Math.random()*(25-15+1))+15);

// OTP Generate 4 digit 1000- 9999

// console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
 
// 


// Global Scope
// Global Scope
var globalVar = "I am global";

function testScope() {
  // Function Scope
  var functionVar = "I am inside function";

  if (true) {
    // Block Scope
    let blockVar = "I am inside block";
    const constBlock = "I am const inside block";

    console.log(globalVar);   // ✅ Accessible
    console.log(functionVar); // ✅ Accessible
    console.log(blockVar);    // ✅ Accessible
    console.log(constBlock);  // ✅ Accessible
  }

  console.log(globalVar);   // ✅ Accessible
  console.log(functionVar); // ✅ Accessible
  console.log(blockVar);    // ❌ ReferenceError
  console.log(constBlock);  // ❌ ReferenceError
}

testScope();
