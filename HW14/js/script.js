/*
ДЗ 14. методы примитивов

Написать функцию isSymbolPresentInString(str,symbol) - возврает true если символ найден в строке и false если нет.

isSymbolPresentInString("abc","a") // true
isSymbolPresentInString("abc","e") // false

Написать функцию getSymbolIndex(str,symbol) - возвращает индекс первого найденного символа в строк, или -1 если символ не найден

getSymbolIndex("hello lol","h") // 0
getSymbolIndex("hello lol","l") // 2
getSymbolIndex("hello lol","v") // -1

Написать функцию getNumberOfEven(n) - получить количество четных цифр в числе

getNumberOfEven(223344) // 4
getNumberOfEven(111) // 0
*/

function isSymbolPresentInString(str, symbol) {

	return str.includes(symbol);
}

function getSymbolIndex(str, symbol) {

	return str.indexOf(symbol)
}

// function getNumberOfEven(n) {

// 	return n.toString().split('').reduce(function (count, current) {

// 		if (!(current % 2)) {
// 			count++;
// 			}

// 		return count;

// 	}, 0);
// }



function getNumberOfEven(n) {
	let count = 0;
	const str = n.toString();

	for (let i = 0; i < str.length; i++) {

		if (!(str[i] % 2)) {
			count++;
		}
	}
	return count;
}


console.log(isSymbolPresentInString('привввввет', 'в')) // true
console.log(isSymbolPresentInString('привввввет', 'й')) // false

console.log(getSymbolIndex("hello lol", "h")) // 0
console.log(getSymbolIndex("hello lol", "l")) // 2
console.log(getSymbolIndex("hello lol", "v")) // -1

console.log(getNumberOfEven(223344)) // 4
console.log(getNumberOfEven(111)) // 0