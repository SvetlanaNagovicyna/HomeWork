/*
ДЗ 16. Еще одно задание на DOM

1. Вывести таблицу 10 × 10, заполненую числами от 1 до 100
2. В папке **images** есть изображения **1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg**. Вывести случайное изображение из этой папки
*/


function createTable(rowCount, colCount) {
	const table = document.createElement('table');
	const tbody = document.createElement('tbody');
	let num = 0;

	for (let i = 0; i < rowCount; i++) {
		let row = document.createElement('tr');
		for (let j = 0; j < colCount; j++) {
			num += 1;
			let col = document.createElement('td');
			let text = document.createTextNode(num);
			row.appendChild(col);
			col.appendChild(text);

		}
		tbody.appendChild(row);
	}
	table.appendChild(tbody);
	return table;

}
var tab = createTable(10, 10);
document.body.appendChild(tab);







function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
document.querySelector('#img').src = "img/" + getRandomInt(1, 10) + ".jpg";