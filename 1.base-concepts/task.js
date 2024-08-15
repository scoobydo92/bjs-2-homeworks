'use strict'

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = b * b - 4 * a * c;
	if (discriminant > 0) {
		let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(x1, x2);
	} else if (discriminant === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	}


	return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPayment = (amount * percent * (1 + percent / 100)) / (12 * (1 - (1 + percent / 100) ** -countMonths));
	let totalPayment = monthlyPayment * countMonths;
	let totalInterest = totalPayment - amount;
	let totalDebt = amount + totalInterest;

	return {
		monthlyPayment: monthlyPayment,
		totalPayment: totalPayment,
		totalInterest: totalInterest,
		totalDebt: totalDebt
	};

}