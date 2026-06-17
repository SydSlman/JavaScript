// =====Primitive Data Type in 7 Form===== //
// 1. String 
// 2. Number 
// 3. Boolean
// 4. Undefined 
// 5. Null
// 6. BigInt
// 7. Symbol

let fullName = "Abdullah Salman"
// console.log(fullName);
let isAge = 17;
let isNumber = 17.6;
// console.log(isNumber);
let isBoolean = true;
// console.log(isBoolean);
let isUn;
// console.log(isUn);
let isNull = null;
// console.log(isNull);
let isInt = BigInt(123333);
// console.log(isInt);
let isSymbol = Symbol ("Hello!");
// console.log(isSymbol);

// =====Object===== //

// let Student = {
//    name: "Salman",
//    age: 19,
//    CPGa: 3.5,
//    isPass: true,
// };
// console.log(Student ["age"]);

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

let operator = prompt("Select Operator (+, -, *, /):");

let result;

if (operator == "+") {
    result = num1 + num2;
}
else if (operator == "-") {
    result = num1 - num2;
}
else if (operator == "*") {
    result = num1 * num2;
}
else if (operator == "/") {
    result = num1 / num2;
}
else {
    result = "Invalid Operator";
}

console.log("Result = " + result);
