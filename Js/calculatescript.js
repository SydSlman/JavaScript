alert("Welcome to My Website! ❣❣❣");     

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
    result = "This operater can't in my calculation history";
}

console.log("Result = " + result);
