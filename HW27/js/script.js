/* 

ДЗ 27. Упражнения с объектами и массивами

1) С помощью метода reduce необходимо перебрать массив и составить объект, у которого ключ — уникальный элемент массива, значение — сколько раз он встречается в массиве. Например, перебирая массив ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'] мы получим {ololo: 3, anna: 2, red: 1, qwe: 1]

2) Создать функцию, которая принимает объект, меняет местами ключ и значение и возвращает новый объект. {name: 'mykola', age: 56} -> {mykola: 'name', 56: 'age'}
*/

// 1)

function createObject(arr) {

	return arr.reduce(function (prev, item) {

		prev[item] ? prev[item] += 1 : prev[item] = 1;

		return prev;

	}, {})
}
console.log(createObject(['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo']));

// 2)

function createNewObject(obj) {

	newObj = {};

	for (let key in obj) {
		newObj[obj[key]] = key;
	}
	// Object.entries(obj).forEach(([key, value]) => {
	// 	newObj[value] = key
	// })

	return newObj;
}
console.log(createNewObject({
	name: 'mykola',
	age: 56
}));