// Function to get the values from input fields
function getValues() {
    let firstNumber = parseFloat(document.getElementById("first_number").value);
    let secondNumber = parseFloat(document.getElementById("second_number").value);
    
    return { firstNumber, secondNumber };
}

// Addition function
function addition() {
    const { firstNumber, secondNumber } = getValues();
    const result = firstNumber + secondNumber;
    displayResult(result);
}

// Minus function
function minus() {
    const { firstNumber, secondNumber } = getValues();
    const result = firstNumber - secondNumber;
    displayResult(result);
}

// Multiply function
function multiply() {
    const { firstNumber, secondNumber } = getValues();
    const result = firstNumber * secondNumber;
    displayResult(result);
}

// Divide function
function divide() {
    const { firstNumber, secondNumber } = getValues();
    if (secondNumber !== 0) {
        const result = firstNumber / secondNumber;
        displayResult(result);
    } else {
        displayResult("Error: Division by zero");
    }
}

// Power function using for loop
function power() {
    const { firstNumber, secondNumber } = getValues();
    let result = 1;

    for (let i = 0; i < secondNumber; i++) {
        result *= firstNumber;
    }

    displayResult(result);
}

// Clear function
function clear_function() {
    document.getElementById("first_number").value = "";
    document.getElementById("second_number").value = "";
    document.getElementById("output").innerHTML = "";
}

function displayResult(result) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = String(result);

    // Check if the result is negative and apply the red color for negative results
    if (typeof result === 'number' && result < 0) {
        outputElement.classList.add("negative");
    } else {
        outputElement.classList.remove("negative");
    }
}