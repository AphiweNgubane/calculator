const add = function (num1, num2){
    return num1 + num2;
};

const subtract = function (num1, num2){
    return num1 - num2;
};

const multiply = function (num1, num2){
    return num1 * num2;
};

const divide = function (num1, num2){
    return num1 / num2;
};

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
};

let currentNumber = "";

const updateDisplay = function () {
    const display = document.querySelector("#display");
    display.textContent = currentNumber;
};

const handleDigitClick = function (digit){
    currentNumber += digit;
    updateDisplay();
};

const handleOperatorClick = function (op) {
    if (currentNumber !== "") {
        num1 = parseFloat(currentNumber);

        if (op === "×") {
            operator = "*"
        } else if (op === "÷") {
            operator = "/";
        } else {
            operator = op;
        }
        
        currentNumber = "";
        updateDisplay();
    }
};

const handleEqualsClick = function () {
    if (num1 !== null && operator !== null && currentNumber !== "") {
        const num2 = parseFloat (currentNumber);
        const result = operate(num1, operator, num2);

        if (result % 1 !== 0 && result.toString().split(".")[1].length > 5) {
            currentNumber = result.toFixed(5);
        } else {
            currentNumber = result;
        }
        
        updateDisplay();

        num1 = null;
        operator = null;
    }
};

const handlePercentageClick = function () {
    if (currentNumber !== "") {
        currentNumber = parseFloat(currentNumber / 100).toString();
        updateDisplay();
    }
};

const handleDecimalClick = function() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        updateDisplay();
    }
};

const digitButtons = document.querySelectorAll(".digits");
digitButtons.forEach(button => {
    button.addEventListener("click", () => handleDigitClick(button.textContent));
});

const operatorButtons = document.querySelectorAll(".signs");
operatorButtons.forEach(button => {
    button.addEventListener("click", () => handleOperatorClick(button.textContent));
});

const equalsButton = document.querySelector("#equalsKey");
equalsButton.addEventListener("click", handleEqualsClick);

const percentageButton = document.querySelector("#percent");
percentageButton.addEventListener("click", handlePercentageClick);

const decimalButton = document.querySelector("#point");
decimalButton.addEventListener("click", handleDecimalClick);