const add = function (num1, num2){
    return num1 + num2;
}

const subtract = function (num1, num2){
    return num1 - num2;
}

const multiply = function (num1, num2){
    return num1 * num2;
}

const divide = function (num1, num2){
    return num1 / num2;
}

let num1;
let num2;
let operator;

const operate = function (num1, operator, num2){
    if (operator === "add"){
        add(num1, num2);
    }

    if (operator === "minus"){
        subtract(num1, num2);
    }

    if (operator === "multiply"){
        multiply(num1, num2);
    }

    if (operator === "divide"){
        divide(num1, num2);
    }
}

console.log(operate(5, "add", 2))