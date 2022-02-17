/* 

функція яка приймаєє рядок, до прикладу "aabbta" і вона має вернути об'єкт {a: 3, b: 2, t: 1} скільки раз зустрічається буква в рядку то таке і число має бути)

*/

function createObject(str) {

	// ForEach

	// const arr2 = {};

	// str.split('').forEach(element => {
	// 	arr2[element] ? arr2[element] += 1 : arr2[element] = 1;
	// });

	// return arr2;

	// Reduce

	return str.split('').reduce(function (prev, item) {

		prev[item] ? prev[item] += 1 : prev[item] = 1;

		return prev;

	}, {})
}

console.log(createObject('aabbta'));