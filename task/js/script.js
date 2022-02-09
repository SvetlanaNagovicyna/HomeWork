/*


1. Написать функцию "глубокого" копировния.
Функция принимает один параметр и возвращает его копию "по значению".
В функцию можно передать параметр любого типа.

	а) Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты и массивы.
	b) Если передали масиив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
	с) Если передали примитив - вернуть его

*/



function copy(par) {

	let newPar;

	if (par instanceof Object && !Array.isArray(par)) {
		for (let key in par) {
			if (key instanceof Object && !Array.isArray(par)) {
				newPar = copy(par)
			} else {
				newPar = par;
			}
		}
	} else {
		if (Array.isArray(par)) {
			newPar = [];
			par.forEach(function (item, index) {
				if (!Array.isArray(item)) {
					newPar[index] = item;
				} else {
					newPar[index] = copy(item);
				}
			})
		} else {
			newPar = par;
		}
	}
	return newPar;
}
var result = copy([324, {
	't': 12
}, 451]);
console.log(result);