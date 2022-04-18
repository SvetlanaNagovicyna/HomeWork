/* 

ДЗ 28. Функция конструктор

Вам нужно сделать конструктор сущности Студент.

У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство. И есть возможность получить возраст студента и его средний бал — это методы.

Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите какую нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив это свойство, present и absent — методы.

Ну и последний метод: .summary(), он проверяет среднюю оценку, и среднее посещение(количество Посещений/количество Занятий), и если средняя оценка больше 90 а среднее посещение больше 0.9, то метод summary, возвращает строку "Ути какой молодчинка!", если одно из этих значений меньше, то — "Норм, но можно лучше", если оба ниже — "Редиска!".
attendance
Ну и не забудьте после того как напишите замечательный конструктор, создать пару экземпляров(конкретных студентов) и подергать методы.

*/



function Student(firstName, lastName, born) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.born = born;
	this.grade = [];
	this.visits = [];
}

Student.prototype.age = function () {
	return new Date().getFullYear() - this.born;
}

Student.prototype.gpa = function () {
	const summ = this.grade.reduce(function (prev, current) {
		return prev + current;
	}, 0)
	return Math.floor(summ / this.grade.length)
}

Student.prototype.present = function () {
	this.visits.push(true)
}
Student.prototype.absent = function () {
	this.visits.push(false)
}

Student.prototype.averageVisit = function () {
	const summ2 = this.visits.reduce(function (prev, current) {
		return current ? ++prev : prev;
	}, 0)
	return summ2 / this.visits.length;
}

Student.prototype.summary = function () {
	if (this.gpa() > 90 && this.averageVisit() > 0.9) {
		console.log(this.firstName + ' ' + this.lastName + ' : ' + "Ути какой молодчинка!")
	} else if (this.gpa() > 90 || this.averageVisit() > 0.9) {
		console.log(this.firstName + ' ' + this.lastName + ' : ' + "Норм, но можно лучше");
	} else {
		console.log(this.firstName + ' ' + this.lastName + ' : ' + "Редиска!")
	}
}

const student = new Student('Светлана', 'Наговицына', 1995);
const student2 = new Student('Светлана1', 'Наговицына2', 1996);
const student3 = new Student('Светлана3', 'Наговицына3', 1997);
const student4 = new Student('Светлана4', 'Наговицына4', 1996);
const student5 = new Student('Светлана5', 'Наговицына5', 1987);


const students = [student, student2, student3, student4, student5]


students.forEach(student => {
	for (let i = 0; i < 25; i++) {
		const rand = Math.round((Math.random() * 100))
		student.grade.push(rand);
		student[((rand > 5 ? 'present' : 'absent'))]();
	}
	student.age();
	student.gpa();
	student.averageVisit();
	student.summary();
});


console.log('-------------------------')

// console.log(student2.averageVisit());
// student.summary();
// student2.summary();


// var sum = students.reduce(function (acc, item) {
// 	return acc + item.age();
// }, 0)


// const averageAge = sum / students.length
// console.log(averageAge)


// function Group() {

// }

// Group.prototype = [];
// Group.prototype.averageAge = function () {
// 	const summ = this.reduce(function (acc, item) {
// 		return acc + item.age();
// 	}, 0)
// 	return summ / this.length
// }

// var group = new Group();

// console.log(group)
// group.push(student)
// group.push(student2)
// group.push(student3)


/*

ДЗ 31. Прототипы 2

Создать конструктор массива, который будет содержать http://lms.hillel.it/mod/assign/view.php?id=3585" target="_blank">объекты из прошлого задания на прототипы.

Массивы созданные с помощью этого конструктора должны содержать следующие методы:

.attendance — если вызывается без аргумента, то возвращает среднюю посещаемость группы за одно занятие; если с аргументом — строкой содержащей фамилию одного из студентов, то возвращает его место в рейтинге посещаемости

.performance — то же самое, но с оценками

*/



function Group() {};

Group.prototype = [];


Group.prototype.attendance = function (arg) {
	if (arg === undefined) {
		const summ = this.reduce((acc, item) => {
			return acc + item.visits[0];
		}, 0)
		return summ / this.length;
	} else {
		const sortVisits = this.sort(function (a, b) {
			return b.averageVisit() - a.averageVisit()
		})

		let indexPersonVisits;
		sortVisits.forEach(function (item, i) {
			if (arg === item.lastName) {
				return indexPersonVisits = i + 1;
			} else {
				return indexPersonVisits = 'Такого студента нет в этой группе'
			}
		})
		return indexPersonVisits;
	}
}

Group.prototype.performance = function (argPerformance) {
	if (argPerformance === undefined) {
		const summ = this.reduce((acc, item) => {
			return acc + item.grade[0];
		}, 0)
		return summ / this.length;
	} else {
		const sortMarks = this.sort(function (a, b) {
			return b.gpa() - a.gpa()
		})
		let indexPersonMarks;
		sortMarks.forEach(function (item, i) {
			if (argPerformance === item.lastName) {
				indexPersonMarks = i + 1;
				return indexPersonMarks
			} else {
				return indexPersonMarks = 'Такого студента нет в этой группе'
			}
		})
		return indexPersonMarks;
	}
}




var group = new Group();

group.push(student)
group.push(student2)
group.push(student3)
group.push(student4)
group.push(student5)

console.log(group)

console.log('Место студента в рейтинге посещаемости:  ' + group.attendance('Наговицына2'))
console.log('Cредняя посещаемость группы за одно занятие: ' + group.attendance())

console.log('Место студента в рейтинге оценок:  ' + group.performance('Наговицына'))
console.log('Cредняя оценка группы за одно занятие: ' + group.performance())