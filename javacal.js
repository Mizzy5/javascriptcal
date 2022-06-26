let add = (number1, number2) => {
    return number1 + number2
}

let subtract = (number1, number2) => {
    return number1 - number2
}

let multiply = (number1, number2) => {
    return number1 * number2
}

let divide = (number1, number2) => {
    return number1 / number2
}


number1 = parseFloat(prompt("Enter the first number"));

operation = prompt("Enter operation type: +, -, * or /");
number2 = parseFloat(prompt("Enter the Second number"));


let result;

if (operation == "+") {
    result = add(number1, number2)

} else if (operation == "-") {
    result = subtract(number1, number2)

} else if (operation == "*") {
    result = multiply(number1, number2)

} else if (operation == "/") {
    result = divide(number1, number2)
}

//print to console

console.log(`${number1} ${operation} ${number2}`)
console.log(`Result: ${result}`)
alert(`${number1} ${operation} ${number2} \n Result: ${result}`);