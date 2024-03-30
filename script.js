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
            break;
    }
    return answer;
}

