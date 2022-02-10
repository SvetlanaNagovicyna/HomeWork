/* 

ДЗ 21. Реализовать map, filter, every, some

* reduce

*/


// map

// function map(arr, fn) {

// 	let newArr = [];

// 	for (let i = 0; i < arr.length; i++) {

// 		newArr[i] = fn(arr[i], i, arr);
// 	}

// 	return newArr;
// }

// let fnMap = map([23, 4, 2, 34, 24, 2], function (item, i, arr) {
// 	return item * 2;
// })

// console.log(fnMap);


// // // filter


// function filter(arr, fn) {

// 	let newArr = [];

// 	for (let i = 0; i < arr.length; i++) {


// 		if (fn(arr[i], i, arr)) {

// 			newArr.push(arr[i]);
// 		}

// 	}
// 	return newArr;
// }

// let fnFilter = filter([23, 4, 2, 34, 24, 2], function (item) {
// 	return item > 4;
// })

// console.log(fnFilter);


// every

function every(arr, fn) {

	for (let i = 0; i < arr.length; i++) {

		if (!fn(arr[i], i, arr)) {
			return false
		}
	}
	return true;

}

let fnEvery = every([23, 4, 2, 34, 24, 3], function (item) {
	return item >= 3;
})

// console.log(fnEvery);


// some

function some(arr, fn) {

	for (let i = 0; i < arr.length; i++) {

		if (fn(arr[i], i, arr)) {
			return true
		}
	}
	return false

}

let fnSome = some([23, 4, 2, 34, 24, 2], function (item) {
	return item === 40;
})

// console.log(fnSome);


// reduce

// function reduce(arr, fn, acc) {

// 	for (let i = 0; i < arr.length; i++) {
// 		acc += fn(acc, arr[i]);
// 	}
// 	return acc;
// }

// let fnReduce = reduce([23, 4, 2, 34, 24, 2], function (acc, currentValue, index, array) {
// 	return acc += currentValue;
// }, 0);

// console.log(fnReduce);



//reduce 


const array = [23, 4, 2, 34, 24, 2];


let re = array.reduce(function (previousValue, currentValue, index) {

	previousValue[`${index}`] = currentValue;


	return previousValue;

}, {})

console.log(re)

//reduce 2

function reduce(arr, fn, acc = 0) {

	for (let i = 0; i < arr.length; i++) {
		acc = fn(acc, arr[i], i);
	}

	return acc;

}

let fnReduce = reduce([23, 4, 2, 34, 24, 2], function (acc, currentValue, index) {
	acc[`${index}`] = currentValue;
	return acc;
}, {});


/** Ещё одна проверка */

let fnReduce1 = reduce([23, 4, 2, 34, 24, 2], function (acc, currentValue, index) {
	return acc += currentValue;
}, 0);


console.log(fnReduce);
console.log(fnReduce1);