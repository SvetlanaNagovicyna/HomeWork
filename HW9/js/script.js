/*
ДЗ 9. Еще одна странная функция

Дана функция:

function f (a, b, c) {
function sum (a, b) {
return a + b;
}
}

Перепишите её следующим образом:
1. Если агрументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
2. Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
4. Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.

*/


function f(a = 2, b = 3, c) {
	function sum(a, b) {
		return a + b;
	}

	const sum2 = sum(a, b);

	if (typeof c === 'function' && c() !== undefined) {
		return c();
	} else {
		return sum2;
	}
}

const result = f(7, 41);
console.log(result);


const result = f(7, 41, function с() {
	const d = 3;
	const e = 5;
	return d * e;
});
console.log(result);