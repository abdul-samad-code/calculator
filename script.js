console.log("hello world")


//basic math function
function add(a, b){
    return a+b;
}
function subtract(a, b){
    return a-b;
}
function multiply(a, b){
    return a*b;
}
function divide(a, b){
    if (b === 0) return "error";
    return a/b;
    
}

// variables that store value
let firstNumber = "";
let sacondNumber = ""
let operator = ""


// function for perform operation

function operate(operator, a, b){
    if(operator === "+") return add(a,b)
    if(operator === "-") return subtract(a,b)
    if(operator === "*") return multiply(a,b)
    if(operator === "/") return divide(a,b)
}
























