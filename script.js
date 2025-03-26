const display = document.getElementById("display");
let currentInput = "";
let operator = "";
let operand = "";

const updateDisplay = (value) => {
  if (display.innerText === "0") {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
};

document.querySelectorAll(".digit").forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.innerText;
    updateDisplay(button.innerText);
  });
});

document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", () => {
    operator = button.innerText;
    operand = currentInput;
    currentInput = "";
    display.innerText += " " + operator + " ";
  });
});

document.getElementById("equals").addEventListener("click", () => {
  let result;
  switch (operator) {
    case "+":
      result = parseFloat(operand) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(operand) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(operand) * parseFloat(currentInput);
      break;
    case "/":
      result = parseFloat(operand) / parseFloat(currentInput);
      break;
  }
  display.innerText = result;
  currentInput = result;
});

document.getElementById("clear").addEventListener("click", () => {
  display.innerText = "0";
  currentInput = "";
  operator = "";
  operand = "";
});
