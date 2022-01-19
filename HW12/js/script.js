/*
ДЗ 12. снова рекурсия

нужно написать функции каждая из которых будет принимать число, и возвращать результат указаный в задании

нужно вычислить двумя способами обычным циклом и рекурсивно:

найти разницу натуральных чисел до заданного числа, то есть если вы передали число 3, то результат будет -4, потому что 1-2-3=-4
*/


function simple(num) {
	let res = 1;
	if (num === 1) {
		res = 1;
	} else {
		for (let i = 2; i <= num; i++) {
			res = res - i;
		}
	}

	return res;
}
console.log(simple(6));
console.log(simple(7));
console.log(simple(1));



// Рекурсия

function recurs(num) {

	if (num === 1) {
		return 1;
	}
	return -num + recurs(num - 1);
}

console.log(recurs(6));
console.log(recurs(7));
console.log(recurs(1));