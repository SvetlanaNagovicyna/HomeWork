/* 

Создать массив объектов. В каждом объекте должа содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10.

1) посчитать средний возраст

2) отпределить представителей какого пола больше

вывести ответы в консоль

*/



const persons = [{
		name: 'Andru',
		gender: 'male',
		born: 1990
	},
	{
		name: 'Anastasiya',
		gender: 'female',
		born: 1992
	},
	{
		name: 'Marina',
		gender: 'female',
		born: 1998
	},
	{
		name: 'Leonid',
		gender: 'male',
		born: 1995
	},
	{
		name: 'Katya',
		gender: 'female',
		born: 2000
	},
	{
		name: 'Artur',
		gender: 'male',
		born: 2004
	},
	{
		name: 'Ludmila',
		gender: 'female',
		born: 2001
	}
]

let countNew = persons.length;
let summ = 0;
let count = persons.length;
let countMale = 0;
let countFemale = 0;
let currentDate = new Date().getFullYear();

for (i = 0; i < count; i++) {

	if (persons[i].born != undefined) {
		summ += currentDate - persons[i].born;
	} else {
		countNew--;
	}
}
console.log('Средний возраст:' + (summ / countNew));


for (i = 0; i < count; i++) {
	if (persons[i].gender === 'male') {
		countMale++;
	} else {
		countFemale++;
	}
}


if (countMale > countFemale) {
	console.log('мужчин больше');
} else {
	if (countMale < countFemale) {
		console.log('женщин больше');
	} else {
		console.log('мужчин и женщин поровну');
	}
}