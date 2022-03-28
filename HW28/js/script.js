/* 

ДЗ 28. Функция конструктор

Вам нужно сделать конструктор сущности Студент.

У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство. И есть возможность получить возраст студента и его средний бал — это методы.

Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив это свойство, present и absent — методы.

Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение(количество Посещений/количество Занятий), и если средняя оценка больше 90 а среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!", если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".
attendance
Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(конкретных студентов) и подергать методы.

*/

function Student(firstName, lastName, born, grade) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.born = born;
	this.grade = grade;
	this.visits = [];

}

Student.prototype.age = function () {
	return 2022 - this.born;
}
Student.prototype.gpa = function () {
	const summ = this.grade.reduce(function (prev, current) {
		return prev + current;
	}, 0)
	return Math.floor(summ / this.grade.length)
}
Student.prototype.present = function () {
	return this.visits.push(true);
}
Student.prototype.absent = function () {
	return this.visits.push(false);
}
Student.prototype.lengthVisits = function () {
	if (this.visits.length > 4) {
		this.visits.length = 4;
	}
	return this.visits;
}
Student.prototype.averageVisit = function () {
	const summ2 = this.visits.reduce(function (prev, current) {
		return current ? prev += 1 : prev += 0;
	}, 0)
	return summ2 / this.visits.length
}
Student.prototype.summary = function () {
	if (student.gpa() > 90) {
		if (student.averageVisit() > 0.9) {
			console.log("Ути какой молодчинка!")
		} else {
			console.log("Норм, но можно лучше")
		}
	} else {
		if (student.averageVisit() > 0.9) {
			console.log("Норм, но можно лучше")
		} else {
			console.log("Редиска!")
		}
	}
}

const student = new Student('Светлана', 'Наговицына', 1995, [80, 90, 100, 100, 90, 95, 80, 100]);

console.log(student);
console.log(student.age());
console.log(student.gpa());
console.log(student.present());
console.log(student.present());
console.log(student.present());
console.log(student.present());
console.log(student.averageVisit());
console.log(student.summary());