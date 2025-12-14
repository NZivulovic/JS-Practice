number1Element = document.getElementById("number1Element");
operatorElement = document.getElementById("operatorElement");
number2Element = document.getElementById("number2Element");

let enteredNum1 = '';
let enteredNum2 = '';
let enteredOperator = '';

let operatorCheck = false;

let resultCalculation = 0;

numberButtons = document.querySelectorAll(".calculatorButtonNumber")
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        buttonsID = button.id;
        if (operatorCheck === false) {
            if (resultCalculation > 0) {
                number1Element.innerText = '';
                enteredNum1 = '';
                enteredNum1 += buttonsID;
                number1Element.innerText = enteredNum1;
            }
            else {
                enteredNum1 += buttonsID;
                number1Element.innerText = enteredNum1;
            }
            resultCalculation = 0;
        }
        else {
            enteredNum2 += buttonsID;
            number2Element.innerText = enteredNum2;
        }
    });
});


operatorButtons = document.querySelectorAll(".calculatorButtonOperator")
operatorButtons.forEach(operator => {
    operator.addEventListener('click', () => {
        operatorCheck = true;
        operatorsID = operator.id;
        if (enteredOperator !== operatorsID) {
            enteredOperator = operatorsID;
            operatorElement.innerText = enteredOperator;
        }

    });
});

function clear() {
    enteredNum1 = '';
    number1Element.innerText = '';
    enteredNum2 = '';
    number2Element.innerText = '';
    enteredOperator = '';
    operatorElement.innerText = '';
    operatorCheck = false;
}

clearButton = document.querySelector("#clear")
clearButton.addEventListener('click', () => {
    clear();
});

equalButton = document.querySelector("#equal")
equalButton.addEventListener('click', () => {
    if (!(enteredNum1 === '' || enteredNum2 === '' || enteredOperator === '')) {
        function calc() {
            let calculation = 0;
            const num1 = Number(enteredNum1)
            const num2 = Number(enteredNum2)
            if (enteredOperator === '+') {
                calculation = num1 + num2;F
            }
            if (enteredOperator === '-') {
                calculation = num1 - num2;
            }
            if (enteredOperator === 'x') {
                calculation = num1 * num2;
            }
            if (enteredOperator === '/') {
                calculation = num1 / num2;
            }
            return resultCalculation = +calculation.toFixed(4)
        }
        calc();
        if (resultCalculation > 0) {
            clear();

            number1Element.innerText = `${resultCalculation}`
            enteredNum1 = `${resultCalculation}`
        }

    }
    else {
        clear();
        number1Element.innerText = `ERROR`
    }
});
