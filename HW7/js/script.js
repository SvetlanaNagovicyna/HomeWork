/*

реализовать функцию clone которая бы работала следующим образом:

var arr = [1,2,3,4,5,6];
var brr = clone(arr);
console.log(brr); // [1,2,3,4,5,6]

brr[0] = 42;
console.log(brr); // [42,2,3,4,5,6]
console.log(arr); // [1,2,3,4,5,6]

* сдалать для любого уровня вложенности, например:

var arr = [[11,22],2,3,4,5,6];
var brr = clone(arr);
console.log(brr); // [[11,22],2,3,4,5,6]

brr[0][0] = 42;
console.log(brr); // [[42, 22],2,3,4,5,6]
console.log(arr); // [[11, 22],2,3,4,5,6]

*/



const arr = [1, 2, 3, 4, 5, 6];

function clone(array) {

	var newArr = [];

	array.forEach(function (item, index) {

		if (!Array.isArray(item)) {
			newArr[index] = item;
		} else {
			newArr[index] = clone(item);
		}
	})

	return newArr;
}
const brr = clone(arr);

brr[0] = 42;

console.log(arr);
console.log(brr);




/* Любой уровнь вложенности */



// var arr = [
// 	[11, 22], 2, 3, 4, 5, 6
// ];

// function clone(array) {

// 	var newArr = [];

// 	array.forEach(function (item, index) {

// 		if (!Array.isArray(item)) {
// 			newArr[index] = item;
// 		} else {
// 			newArr[index] = clone(item);
// 		}
// 	})

// 	return newArr;
// }
// const brr = clone(arr);

// brr[0][0] = 42;

// console.log(arr);
// console.log(brr);