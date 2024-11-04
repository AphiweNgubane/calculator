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

let num1 = null;
let num2 = null;
let operator = null;

const operate = function (num1, operator, num2){
    if (operator === "+"){
        return add(num1, num2);
    }

    if (operator === "-"){
        return subtract(num1, num2);
    }

    if (operator === "*"){
        return multiply(num1, num2);
    }

    if (operator === "/"){
        return divide(num1, num2);
    }
}

let currentNumber = "";

const updateDisplay = function () {
    const display = document.querySelector("#display");
    display.textContent = currentNumber;
}

const handleDigitClick = function (digit){
    currentNumber += digit;
    updateDisplay();
}

const digitButtons = document.querySelectorAll(".digits");
digitButtons.forEach(button => {
    button.addEventListener("click", () => handleDigitClick(button.textContent));
})