/*
ДЗ 13. Методы массивов

Внимание, это задание нужно выполнить используя методы массива (никаких for)

дан массив

var arr = [-246,753,-468,475,-683,476,-583,746,-581];

1) найти сумму элементов массива

2) получить массив который состоит из отрицательных элементов из исходного массива

3) отсортировать массив по возрастанию

4) получить массив из тех же элементов, только они должны быть в обратном порядке

5) получить массив из элементов деленных на два (например, если был массив [4, 3, 8] то получим [2,1.5,4])
*/


const arr = [-246, 753, -468, 475, -683, 476, -583, 746, -581];

let sum = 0;

const sum = arr.reduce(function (a, b) {
	return a + b;
});

console.log("Сумма:" + sum);

//-----------------------------------------------------------

const res = arr.filter(function (item) {
	return item <= 0;
});

console.log(res);

//-----------------------------------------------------------

arr.sort(function (a, b) {
	return a - b;
});

console.log(arr);

//------------------------------------------------------------

arr.reverse();

console.log(arr);

//------------------------------------------------------------

var newArr = arr.map(function (item) {
	return item / 2;
})

console.log(newArr);