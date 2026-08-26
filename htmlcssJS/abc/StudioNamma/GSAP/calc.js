const display = document.getElementById("display");

function appendValue(val) {
  // If the screen shows 0 and we aren't inputting a decimal point, replace the 0
  if (display.textContent === "0" && val !== ".") {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}

// Resets the screen back to zero
function clearDisplay() {
  display.textContent = "0";
}

// Deletes the last character typed (backspace)
function backspace() {
  let currentText = display.textContent;
  if (currentText.length > 1) {
    display.textContent = currentText.slice(0, -1);
  } else {
    display.textContent = "0";
  }
}

// Parses and executes the mathematical expression securely
function calculate() {
  try {
    // eval() processes the string expression (e.g., "7*8+2") into an answer
    let result = eval(display.textContent);
    
    // Check if user accidentally divided by zero resulting in Infinity
    if (result === Infinity || isNaN(result)) {
      display.textContent = "Error";
    } else {
      display.textContent = result;
    }
  } catch (error) {
    // If the expression is syntactically broken (e.g., "7++2"), show error
    display.textContent = "Error";
  }
}