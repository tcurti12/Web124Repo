//Tanner Curtis, 5/5/2025, WEB124 Final//

document.getElementById("calculate").addEventListener("click", function() {
    let num = parseFloat(document.getElementById("num").value);
    if (isNaN(num)) return; // Ensures valid input

    document.getElementById("addition").textContent = addNumbers(num);
    document.getElementById("subtraction").textContent = subtractNumbers(num);
    document.getElementById("multiplication").textContent = multiplyNumbers(num);
    document.getElementById("division").textContent = divideNumbers(num);
});

//Addition function
function addNumbers(num) {
    let result = "Addition: ";
    for (let i = 1; i <= 10; i++) {
        result += `${i}+${num}= ${i + num}, `;
    }
    //remove trailing comma
    return result.slice(0, -2);
}

//Subtraction function
function subtractNumbers(num) {
    let result = `Subtraction: `;
    let i = 1;
    while (i <= 10) {
        result += `${i}-${num}= ${i - num}, `;
        i++;
    }
    //remove trailing comma
    return result.slice(0, -2);
}

//Multiplication function
function multiplyNumbers(num) {
    let result = `Multiplication: `;
    let i = 1;
    do {
        result += `${i}x${num}= ${i * num}, `;
        i++;
    } while (i <= 10);
    //remove trailing comma
    return result.slice(0, -2);
}

//Division function
function divideNumbers(num) {
    let result = "Division: ";
    for (let i = 1; i <= 10; i++) {
        result += `${num}÷${i}= ${(num / i).toFixed(2)}, `;
    }
    //remove trailing comma
    return result.slice(0, -2);
}
    