/*
ДЗ 11. Рекурсия

Создаем именованное функциональное выражение, аргументом передаем число. Функция возвращает "1", если это число является точной степенью двойки, и "0" — если не является. Операцией возведения в степень пользоваться нельзя => используем рекурсию.

Точная степень двойки — 1, 2, 4, 8, 16, 32...
*/

function recurs(n) {

	const pow = n / 2;
	if (pow === 1) {
		return 1;
	} else {
		if (pow > 1) {
			return recurs(pow);
		} else {
			return 0;
		}
	}
}
console.log(recurs(16));
console.log(recurs(32));
console.log(recurs(33));
console.log(recurs(7));