/* 

ДЗ 21. Реализовать map, filter, every, some

* reduce

*/


// map

function map(arr, fn) {

	let newArr = [];

	for (let i = 0; i < arr.length; i++) {

		newArr[i] = fn(arr[i]);
	}

	return newArr;
}

let fnMap = map([23, 4, 2, 34, 24, 2], function (item) {
	return item * 2;
})

console.log(fnMap);


// // filter


function filter(arr, fn) {

	let newArr = [];

	for (let i = 0; i < arr.length; i++) {


		if (fn(arr[i])) {

			newArr.push(arr[i]);
		}

	}
	return newArr;
}

let fnFilter = filter([23, 4, 2, 34, 24, 2], function (item) {
	return item > 4;
})

console.log(fnFilter);


// every

function every(arr, fn) {

	let element;

	for (let i = 0; i < arr.length; i++) {
		element = fn(arr[i]);
	}

	if (element === true) {
		return true
	} else {
		return false
	}

}

let fnEvery = every([23, 4, 2, 34, 24, 2], function (item) {
	return item >= 4;
})

console.log(fnEvery);


// some

function some(arr, fn) {

	let element;

	for (let i = 0; i < arr.length; i++) {
		element = fn(arr[i]);

		if (element === true) {
			return true
		} else {
			return false
		}
	}

}

let fnSome = some([23, 4, 2, 34, 24, 2], function (item) {
	return item >= 4;
})

console.log(fnSome);


// reduce

function reduce(arr, acc) {

	for (let i = 0; i < arr.length; i++) {
		acc += arr[i];
	}
	return acc;
}

let fnReduce = reduce([23, 4, 2, 34, 24, 2], 0);

console.log(fnReduce);