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

let firstNumber = '';
let secondNumber = '';
let operator = '';

function operate(operator, firstNumber, secondNumber) {
	switch (operator) {
		case '+':
			return add(firstNumber, secondNumber)
			break;
		case '-':
			return subtract(firstNumber, secondNumber)
			break;
		case '×':
			return multiply(firstNumber, secondNumber)
			break;
		case '/':
			return divide(firstNumber, secondNumber)
			break;
	}
}

const display = document.querySelector('#display');
const allButtons = document.querySelectorAll('.btn');


allButtons.forEach(button => {
	button.addEventListener('click', () => {
		let result;
		display.value += button.textContent;

		if (button.classList.contains('clear')) {
			firstNumber = (display.value).slice(0, -1);;
			display.value = '';
			firstNumber = '';
			secondNumber = '';
		}
		
		if (button.classList.contains('operator')) {
			firstNumber = (display.value).slice(0, -1);;
			display.value = '';
			operator = button.textContent;
		}
		
		if (button.classList.contains('calculate')) {
			secondNumber = (display.value).slice(0, -1);;
			display.value = '';
			result = operate(operator, Number(firstNumber), Number(secondNumber));
			display.value = result;
		}
	});
});