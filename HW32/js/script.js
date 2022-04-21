/*

ДЗ 32. Гамбургер)

Сеть фастфудов предлагает несколько видов гамбургеров:

маленький (50 тугриков, 20 калорий)
большой (100 тугриков, 40 калорий)


Гамбургер может быть с одним из нескольких видов начинок:

сыром (+ 10 тугриков, + 20 калорий)
салатом (+ 20 тугриков, + 5 калорий)
картофелем (+ 15 тугриков, + 10 калорий)
Можно добавить добавки:



посыпать приправой (+ 15 тугриков, 0 калорий)
полить майонезом (+ 20 тугриков, + 5 калорий).

Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

Пример работы кода:

// маленький гамбургер с начинкой из сыра

var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза

hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий

console.log(“Calories: “ + hamburger.calculateCalories());

// сколько стоит

console.log("Price: “ + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу

hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?

console.log("Price with sauce: “ + hamburger.calculatePrice()); */

//мне кажется тут опечатка Hamburger.TOPPING_SAUCE

// моя изначальная реализация первое что в голову пришло это массив.
// Hamburger.SIZE_SMALL = [50, 20];
// Hamburger.SIZE_BIG = [100, 40];
// Hamburger.STUFFING_CHEESE = [10, 20];
// Hamburger.STUFFING_SALAD = [20, 5];
// Hamburger.STUFFING_POTATO = [15, 10];
// Hamburger.TOPPING_MAYO = [20, 5];
// Hamburger.TOPPING_SPICE = [15, 0];

// function Hamburger(size, stuffing) {
// 	this.size = size;
// 	this.stuffing = stuffing;
// 	this.topping = [];

// }

// Hamburger.prototype.calculatePrice = function () {
// 	const priceTopping = this.topping.reduce(function (prev, item) {
// 		return prev + item[0];
// 	}, 0)
// 	return this.size[0] + this.stuffing[0] + priceTopping
// }
// Hamburger.prototype.calculateCalories = function () {
// 	const priceTopping = this.topping.reduce(function (prev, item) {
// 		return prev + item[1];
// 	}, 0)
// 	return this.size[1] + this.stuffing[1] + priceTopping
// }

// Hamburger.prototype.addTopping = function (topping) {
// 	return this.topping.push(topping)
// }




// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);



// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // спросим сколько там калорий
// console.log("Calories: " + hamburger.calculateCalories());

// // сколько стоит
// console.log("Price: " + hamburger.calculatePrice());

// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// // А сколько теперь стоит?

// console.log("Price with spice: " + hamburger.calculatePrice())

//-----------------------------------------------------------------------------------------------------------------
// следующая реализация после объяснения Юрой про константы.

// Hamburger.SIZE_SMALL = {
// 	price: 50,
// 	calories: 20
// };
// Hamburger.SIZE_BIG = {
// 	price: 100,
// 	calories: 40
// };
// Hamburger.STUFFING_CHEESE = {
// 	price: 10,
// 	calories: 20
// };
// Hamburger.STUFFING_SALAD = {
// 	price: 20,
// 	calories: 5
// };
// Hamburger.STUFFING_POTATO = {
// 	price: 15,
// 	calories: 10
// };
// Hamburger.TOPPING_MAYO = {
// 	price: 20,
// 	calories: 5
// };
// Hamburger.TOPPING_SPICE = {
// 	price: 15,
// 	calories: 0
// };


// function Hamburger(size, stuffing) {
// 	this.size = size;
// 	this.stuffing = stuffing;
// 	this.topping = [];

// }

// Hamburger.prototype.calculatePrice = function () {
// 	const priceTopping = this.topping.reduce(function (prev, item) {
// 		return prev + item.price;
// 	}, 0)
// 	return this.size.price + this.stuffing.price + priceTopping
// }
// Hamburger.prototype.calculateCalories = function () {
// 	const priceTopping = this.topping.reduce(function (prev, item) {
// 		return prev + item.calories;
// 	}, 0)
// 	return this.size.calories + this.stuffing.calories + priceTopping
// }

// Hamburger.prototype.addTopping = function (topping) {
// 	return this.topping.push(topping)
// }

// // маленький гамбургер с начинкой из сыра
// var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
// console.log(hamburger)


// // добавка из майонеза
// hamburger.addTopping(Hamburger.TOPPING_MAYO);

// // спросим сколько там калорий
// console.log("Calories: " + hamburger.calculateCalories());

// // сколько стоит
// console.log("Price: " + hamburger.calculatePrice());

// // я тут передумал и решил добавить еще приправу
// hamburger.addTopping(Hamburger.TOPPING_SPICE);

// // А сколько теперь стоит?

// console.log("Price with spice: " + hamburger.calculatePrice())


//---------------------------------------------------------------------
// ES6 + И в чате увидела вопрос Лёни, а если добавить сразу две добавки, а не одну - оставила как конечный вариант


class Hamburger {
	constructor(...components) {
		this.components = components;
	}
	static SIZE_SMALL = {
		price: 50,
		calories: 20
	};
	static SIZE_BIG = {
		price: 100,
		calories: 40
	};
	static STUFFING_CHEESE = {
		price: 10,
		calories: 20
	};
	static STUFFING_SALAD = {
		price: 20,
		calories: 5
	};
	static STUFFING_POTATO = {
		price: 15,
		calories: 10
	};
	static TOPPING_MAYO = {
		price: 20,
		calories: 5
	};
	static TOPPING_SPICE = {
		price: 15,
		calories: 0
	}
	calculatePrice() {
		return this.components.reduce(function (prev, item) {
			return prev + item.price;
		}, 0)
	}
	calculateCalories() {
		return this.components.reduce(function (prev, item) {
			return prev + item.calories;
		}, 0)
	}

	addTopping(...topping) {
		return this.components.concat(topping)
	}

}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_SALAD);

console.log(hamburger)

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log("Calories: " + hamburger.calculateCalories());

// сколько стоит
console.log("Price: " + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// А сколько теперь стоит?

console.log("Price with spice: " + hamburger.calculatePrice())