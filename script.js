console.log("hello world");


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
let secondNumber = "";
let operator = "";


// function for perform operation

function operate(operator, a, b){
    if(operator === "+") return add(a,b)
    if(operator === "-") return subtract(a,b)
    if(operator === "*") return multiply(a,b)
    if(operator === "/") return divide(a,b)
}


//    selection
const displayNumber = document.querySelector(".h3-number");
const displayResult = document.querySelector(".h3-result");
const numberButton = document.querySelectorAll(".btn");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");
const equal = document.querySelector(".equal")

//logic
numberButton.forEach(button => {
    button.addEventListener("click", () => {
        if(operator === ""){
            firstNumber += button.value;         
        } else{
            secondNumber += button.value;          
        }
        displayNumber.textContent =
    firstNumber +
    (operator ? " " + operator : "") +
    (secondNumber ? " " + secondNumber : "");
    })
    
});


//operator logic
operators.forEach(btn => {
    btn.addEventListener("click", () =>{
        if(firstNumber === "") return;

        //logic for chain 
        if( operator !== "" && secondNumber !== ""){
             let result = operate(operator, Number(firstNumber), Number(secondNumber));
             
            firstNumber = result.toString()
            secondNumber = "";
            displayNumber.textContent = result
        }

        operator = btn.textContent;
        displayNumber.textContent = firstNumber+ " "+operator;
    });
    
});

//equal buton logic
equal.addEventListener("click", () => {
    if(firstNumber === "" || operator === "" || secondNumber === "") return;
    let result = operate(operator, Number(firstNumber), Number(secondNumber));
    displayResult.textContent = result;

    firstNumber = result.toString();
    operator = "";
    secondNumber = "";

    displayNumber.textContent = firstNumber;
})