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
	return a / b;
}

const firstNumber;
const secondNumber;
const operator;

function operate(operator, firstNumber, secondNumber) {
	switch (operator) {
		case '+':
			add(firstNumber, secondNumber)
			break;
		case '-':
			subtract(firstNumber, secondNumber)
			break;
		case '*':
			multiply(firstNumber, secondNumber)
			break;
		case '/':
			divide(firstNumber, secondNumber)
			break;
		default:
			break;
	}
}