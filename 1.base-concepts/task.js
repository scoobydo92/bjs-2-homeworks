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
		let per = parseInt(percent) / 100 / 12;
		let con = parseInt(contribution);
		let am = parseInt(amount);
		if (isNaN(per) || per < 0) {
			return `false`;
		} else {
				let s = am - con;
				let n = countMonths;
				let pay = s * (per + per / (((1 + per) ** n) - 1));
				let totalAmount = (pay * n).toFixed(2);
				console.log(totalAmount);
				return +totalAmount;
	   }
	}

