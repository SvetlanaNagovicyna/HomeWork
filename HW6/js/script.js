/* 

создать функции которые вычисляют:

1) площадь круга

2) длину окружности

3) среднее арифметическое двух чисел

4) среднее арифметическое любого массива

привести примеры их использования

*/


function square(r) {
	return Math.PI * Math.pow(r, 2);
};

console.log('Площадь круга: ' + square(4));

//---------------------------------------------------//

function circumference(d) {
	return Math.PI * d;
}

console.log('Длина окружности: ' + circumference(5));

//----------------------------------------------------//


function arithmeticalMean(a, b) {
	return (a + b) / 2;
}

console.log('Среднее арифметическое: ' + arithmeticalMean(4, 6));

//-----------------------------------------------------//


function array(arr) {
	var sum = 0;

	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum / arr.length;
}

console.log(array([5, 6, 1, 7, 9]));
console.log(array([5, 6, 1, 41, 7, 9]));
console.log(array([5, -6, 1, 41, 7, 9, 11]));