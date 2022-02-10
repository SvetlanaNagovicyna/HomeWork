/*


1. Написать функцию "глубокого" копировния.
Функция принимает один параметр и возвращает его копию "по значению".
В функцию можно передать параметр любого типа.

	а) Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты и массивы.
	b) Если передали масиив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
	с) Если передали примитив - вернуть его

*/



// function clone(par) {

// 	let newPar;

// 	if (par instanceof Object && !Array.isArray(par)) {
// 		newPar = {};
// 		for (let key in par) {
// 			if (key instanceof Object && !Array.isArray(par[key])) {
// 				newPar[key] = clone(par[key]);
// 			} else {
// 				newPar[key] = par[key];
// 			}
// 		}
// 	} else {
// 		if (Array.isArray(par)) {
// 			newPar = [];
// 			par.forEach(function (item, index) {
// 				if (!Array.isArray(item)) {
// 					newPar[index] = item;
// 				} else {
// 					newPar[index] = clone(item);
// 				}
// 			})
// 		} else {
// 			newPar = par;
// 		}
// 	}
// 	return newPar;
// }







function clone(par) {

	let newPar;

	if (!Array.isArray(par)) {
		if (par instanceof Object) {

			newPar = {};
			for (let key in par) {
				if (!Array.isArray(key)) {
					if (key instanceof Object) {
						newPar = clone(key);
					} else {
						newPar[key] = key;
					}
				} else {
					key.forEach(function (item, index) {
						newPar2 = [];
						if (!Array.isArray(item)) {
							newPar2[index] = item;
						} else {
							newPar2[index] = clone(item);
						}
					})
				}
			}
		} else {
			newPar = par;
		}

	} else {
		newPar = [];
		par.forEach(function (item, index) {
			if (!Array.isArray(item)) {
				if (par instanceof Object) {
					newPar[index] = clone(item);
				} else {
					newPar[index] = item;
				}
			} else {
				newPar = par;
			}
		})
	}

	return newPar;
}



const oj = [324, {
	't': 12
}, 451]
const result = clone(oj);

oj[1].t = 66
console.log(oj);
console.log(result);
console.log(JSON.stringify(oj) === JSON.stringify(result));