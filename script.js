const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

let currentInput = "";
let currentOperator = "";
let prevInput = "";

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const clickedValue = event.target.innerText;

        if (clickedValue.match(/[0-9]/)) {
            currentInput += clickedValue;
            display.value = currentInput;
        } else if (clickedValue.match(/[\+\-\*\/]/)) {
            if (currentInput !== "") {
                prevInput = currentInput;
                currentInput = "";
                currentOperator = clickedValue;
            }
        } else if (clickedValue === "=") {
            if (currentInput !== "" && prevInput !== "" && currentOperator !== "") {
                const result = calculate(parseFloat(prevInput), parseFloat(currentInput), currentOperator);
                display.value = result;
                currentInput = result.toString();
                prevInput = "";
                currentOperator = "";
            }
        } else if (clickedValue === "C") {
            currentInput = "";
            currentOperator = "";
            prevInput = "";
            display.value = "";
        }
    });
});

function calculate(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}
