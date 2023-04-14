

function operate(x, operator, y) {
    switch (operator) {
        case "x":
            isResult = true
            return x * y;
        case "+":
            isResult = true
            return x + y;
        case "-":
            isResult = true
            return x - y;
        case "/":
            if (y === 0) {
                return "can't do that"
            }
            isResult = true
            return x / y;

    }

}


const display = document.querySelector(".display")
display.textContent = "0"

let output = display.textContent
let firstNum = null
let secondNum = null
let operator = null
let isResult = false


const calc = document.querySelector(".calc")
calc.addEventListener('click', function(e) {
  if (!(e.target.dataset.action)) {
    if (display.textContent === '0'|| isResult === true || operator !== null) {
       display.textContent = e.target.textContent;
       isResult = false;
    }
    else {
        display.textContent += e.target.textContent;
    }
  }
  if (e.target.dataset.action === "decimal") {
    if (display.textContent.includes('.') || isResult === true) {
        return;
    }
    else {
        display.textContent += e.target.textContent;
    }
  }
  if (e.target.dataset.action === "operator") {
    if (operator === null) {
        firstNum = parseFloat(display.textContent);
        operator = e.target.textContent;
    }
    else {
        secondNum = parseFloat(display.textContent);
        result = operate(firstNum, operator, secondNum);
        display.textContent = result;
        result = firstNum;
        operator = e.target.textContent;
    }
  }
  if (e.target.dataset.action === "equals") {
    if (firstNum === null) {
        return
    }
    else {
        secondNum = parseFloat(display.textContent);
        result = operate(firstNum, operator, secondNum);
        display.textContent = result;
        operator = null;
        firstNum = null;
        secondNum = null;
    }
  }
  if (e.target.dataset.action === "delete") {
    if (display.textContent === '0') {
        return
    }
    else if (display.textContent.length === 1) {
        display.textContent = 0;
    }
    else {
        display.textContent = display.textContent.slice(0, display.textContent.length -1)
    }
  }
  if (e.target.dataset.action === "clear") {
    firstNum = null
    secondNum = null
    operator = null
    display.textContent = '0'
    isResult = false
  }
})
