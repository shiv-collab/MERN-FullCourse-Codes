// Start 
// GEC : Global Execution Context
// Code run --> Execution context
// During code run create Execution context and divide two phase 
//  Phase 1 : Memory allocation (Hoisting) -- stack(primitive data) or heap(Non Primitive data) me store hota hai 
//      - Variables को undefined assign होता है
//      - Functions का पूरा code memory में चला जाता है

//  Phase 2 : Execution Phase (Line by Line)
//     - Variables को actual values मिलती हैं
//     - Functions call होते हैं
//     - हर function के लिए नया Execution Context बनता है
//     - Execution Context stack में push होता है
//     - Function खत्म होते ही stack से pop हो जाता है






//  function 

setTimeout(function greeting(){
    console.log("Hello coder army, Strike is coming on 18 may");

});

greeting();


function addNumber(num1,num2){
    const sum = num1 + num2;
    console.log(sum);
}

addNumber(2,3);
addNumber(6,3);
addNumber(2,5);
greeting(12345);

