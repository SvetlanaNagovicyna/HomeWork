/*
ДЗ 15. Генерация списка

написать функцию generateList(array) принимает массив из чисел и массивов чисел, например [1,2, [1.1,1.2,1.3] ,3] нужно сгенерировать список из елементов, * а если в массиве встречается массив то делать вложенный список Пример [1,2,3] Должен создать

1
2
3
* Пример 2 [1,2, [1.1,1.2,1.3] ,3] Должен создать

1
2
	1.1
	1.2
	1.3
3
*/


function generateList(arr) {
	const ul = document.createElement('ul');

	arr.forEach(function (item) {
		const li = document.createElement('li');
		let childEl;

		if (Array.isArray(item)) {
			childEl = generateList(item);
		} else {
			childEl = document.createTextNode(item);
		}

		li.appendChild(childEl);
		ul.appendChild(li);
	})

	return ul;

}

document.body.appendChild(generateList([1, 2, 3]))
document.body.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]))