function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if(b != 0) {
        return a / b;
    } else {
        return "Error";
    }
}

function operate(operator, a, b) {
    let answer;
    switch(operator) {
        case "+": 
            answer = add(a, b);
            break;
        case "-":
            answer = subtract(a, b);
            break;
        case "*": 
            answer = multiply(a, b);
            break;
        case "/":
            answer = divide(a, b);
            if(b == 0) {
                return "Huh?"
            }
            break;
    }
    if (String(answer).length > 12) {
        answer = String(answer).substring(0, 12);
    }
    return String(answer);
}

let displayValue = '0';
let firstOperand = "";
let secondOperand = "";
let operator = null;
let secondOperator = null;
let result = null;
const display = document.querySelector("#display");
display.textContent = displayValue;

const buttons = document.querySelectorAll("button");

for(let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    // console.log(buttons[i].classList);
    switch(button.classList[0]){
        case 'operand':
            button.addEventListener("click", inputOperand);
            break;
        case 'clear': 
            button.addEventListener("click", displayClear);
            break;
        case 'operator':
            button.addEventListener("click", inputOperator);
            break;
        case 'equals':
            button.addEventListener("click", resultEquals);
            break;
        case 'decimal':
            button.addEventListener("click", inputDecimal);
            break;
        case 'percent':
            button.addEventListener("click", percent);
            break;
    }
    
};

function inputOperand() {
    if(result != null) {
        secondOperand = "";
        result = null;
    }
    
    if (operator == null) {
        firstOperand = String(Number(firstOperand.concat(this.id).substring(0, 12)));
        displayValue = firstOperand;
        console.log("first operand: " + firstOperand);
    } else if (operator != null) {
        secondOperand = String(Number(secondOperand.concat(this.id).substring(0, 12)));
        displayValue = secondOperand;
        console.log("second operand: " + secondOperand);
    }
    updateDisplay();
    
}

function displayClear() {
    firstOperand = "";
    secondOperand = "";
    operator = null;
    displayValue = 0;
    display.textContent = displayValue;
    return;
}

function inputOperator() {

    // operator = this.id;
    console.log(operator);
    if(operator != null) {
        if(result == null) {
            result = operate(operator, Number(firstOperand), Number(secondOperand));
            firstOperand = result;
            displayValue = result;
            console.log("first operand: " + firstOperand);
            console.log("second operand: " + secondOperand);
        }
    }
    operator = this.id;
    updateDisplay();
    
}

function updateDisplay() {
    display.textContent = displayValue;
}


function resultEquals() {
    if(secondOperand == "") {
        secondOperand = firstOperand;
    }
    if(operator == null) {
        return
    }
    result = operate(operator, Number(firstOperand), Number(secondOperand));
    // secondOperand = "";
    displayValue = result;
    firstOperand = result;
    console.log("first operand: " + firstOperand);
    console.log("second operand: " + secondOperand);
    updateDisplay();
}

function inputDecimal() {
    if(!display.textContent.includes(".")) {
        if (operator == null) {
            firstOperand = firstOperand.concat(".").substring(0, 12);
            displayValue = firstOperand;
            console.log("first operand: " + firstOperand);
        } else if (operator != null) {
            secondOperand = secondOperand.concat(".").substring(0, 12);
            displayValue = secondOperand;
            console.log("second operand: " + secondOperand);
        }
        updateDisplay();
    }
}

function percent() {
    if (operator == null) {
        firstOperand = operate("/", Number(firstOperand), 100);
        // secondOperand = "";
        displayValue = firstOperand;
    } else if (operator != null) {
        secondOperand = operate("/", Number(secondOperand), 100);
        // secondOperand = "";
        displayValue = secondOperand;
    }
    updateDisplay();
}