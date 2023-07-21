let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = "";
  updateDisplay();
}

function calculateResult() {
  const display = document.getElementById("display");
  try {
    displayValue = eval(displayValue).toString();
  } catch (error) {
    displayValue = "Error";
  }
  updateDisplay();
}
