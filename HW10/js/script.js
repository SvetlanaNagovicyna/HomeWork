/*
ДЗ 10. 3 простенькие функции

1. Написать функцию заполнения двумерного массива случайными числами. Имя произвольное.
2. написать функцию, которая примет как аргумент(параметр) два массива и сравнит суммы всех ЧИСЛОВЫХ элементов. Тот массив, сумма которого большая - должен вернутся функцией.
3. Написать функцию `doMath(x, znak, y)`, которая получает 3 аргумента: числа `x` и `y`, строку `znak`. В переменной знак может быть: `+, -, *, /, %, ^`. Вывести результат математического действия, указанного в переменной `znak`.
*/


//-------------------------------Задание 1 -------------------------------------
const myArr = [];

function array(arr) {
	for (let i = 0; i < 5; i++) {
		arr[i] = [];
		for (let j = 0; j < 2; j++) {
			const a = Math.round(Math.random() * 100);
			arr[i].push(a);
		}
	}

	return arr;

}

console.log(array(myArr));

//-------------------------------Задание 2 -------------------------------------

function mas(arr1, arr2) {
	let sum1 = 0;

	for (let i = 0; i < arr1.length; i++) {
		sum1 += arr1[i];
	}

	let sum2 = 0;

	for (let j = 0; j < arr2.length; j++) {
		sum2 += arr2[j];
	}

	if (sum1 > sum2) {
		return arr1;
	} else {
		return arr2;
	}

}

console.log(mas([4, 5, 6, 1, 1], [30, 32, 54]))

//------------------------------Задание 3--------------------------------------

function doMath(x, znak, y) {

	switch (znak) {
		case '+': {
			return x + y;
		};
	case '-': {
		return x - y;
	};
	case '*': {
		return x * y;
	};
	case '/': {
		return x / y;
	};
	case '%': {
		return x % y;
	};
	case '^': {
		return x ^ y;
	};

	default:
		return 'Sorry, sing not defined';
	}

}


console.log(doMath(100, '/', 20))