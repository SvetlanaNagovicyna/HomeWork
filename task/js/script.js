/*


1. Написать функцию "глубокого" копировния.
Функция принимает один параметр и возвращает его копию "по значению".
В функцию можно передать параметр любого типа.

	а) Если передали объект, то предусмотреть ситуацию, когда свойствами этого объекта будут объекты и массивы.
	b) Если передали масиив, то предусмотреть ситуацию, когда элементами этого массива будут объекты или массивы.
	с) Если передали примитив - вернуть его

*/


//// большое моё 1

// function clone(par) {

// 	let newPar;

// 	if (!Array.isArray(par)) {
// 		newPar = {};
// 		if (par instanceof Object) {
// 			for (let key in par) {
// 				if (!Array.isArray(par[key])) {
// 					if (par[key] instanceof Object) {
// 						newPar[key] = clone(par[key]);
// 					} else {
// 						newPar[key] = par[key];
// 					}
// 				} else {
// 					newPar[key] = clone(par[key]);
// 				}
// 			}
// 		} else {
// 			newPar = par;
// 		}

// 	} else {
// 		newPar = [];
// 		par.forEach(function (item, index) {
// 			if (!Array.isArray(item)) {
// 				if (par instanceof Object) {
// 					newPar[index] = clone(item);
// 				} else {
// 					newPar[index] = item;
// 				}
// 			} else {
// 				newPar[index] = clone(item);
// 			}
// 		})
// 	}

// 	return newPar;
// }



// большое моё 2



// function clone(par) {

// 	let newPar;

// 	if (par instanceof Object) {
// 		if (!Array.isArray(par)) {
// 			newPar = {};
// 			for (let key in par) {
// 				if (par[key] instanceof Object) {
// 					newPar[key] = clone(par[key]);
// 				} else {
// 					newPar[key] = par[key];
// 				}
// 			}
// 		} else {
// 			newPar = [];
// 			par.forEach(function (item, index) {
// 				if (item instanceof Object) {
// 					newPar[index] = clone(item);
// 				} else {
// 					newPar[index] = item;
// 				}
// 			})
// 		}
// 	} else {
// 		newPar = par;
// 	}
// 	return newPar;
// }


// большое моё 3

function clone(par) {

	let newPar = par;

	if (par instanceof Object) {
		if (!Array.isArray(par)) {
			newPar = {};
			for (let key in par) {
				newPar[key] = clone(par[key]);
			}
		} else {
			newPar = [];
			par.forEach(function (item, index) {
				newPar[index] = clone(item);
			})
		}
	}

	return newPar;
}


// большое моё 4
//   function clone(par) {

// 	let newPar = par;

// 	if (par instanceof Object) {
// 	  newPar = Array.isArray(par) ? [] : {};
// 	  if (!Array.isArray(par)) {
// 		for (let key in par) {
// 		  newPar[key] = clone(par[key]);
// 		}
// 	  } else {
// 		par.forEach(function (item, index) {
// 		  newPar[index] = clone(item);
// 		})
// 	  }
// 	}

// 	return newPar;
//   }


// вариант Лёни
// function clone(data) {

// 	let newAny = data;

// 	if (data instanceof Object) {
// 		newAny = Array.isArray(data) ? [] : {};

// 		for (let key in data) {
// 			newAny[key] = clone(data[key]);
// 		}
// 	}

// 	return newAny;
// }




const ob = {
	a: 15,
	b: {
		c: [1, 2, 3],
		d: 'sds'
	},
	k: [
		1,
		2,
		{
			v: {
				g: 2
			},
			t: 'eee',
			n: [2, 0, 3],
			c: {
				g: 2
			}
		},
		null
	]
};
const ar = [
	[11, 22],
	[
		[3, 3], null
	], 4, 5, {
		g: 5,
		y: 'dft'
	}
];
const tr = clone(ar);
tr[0][0] = 66;
tr[4].g = 66;
console.log(ar);
console.log(tr);

const tf = clone(ob)

console.log(JSON.stringify(ob) === JSON.stringify(tf));
tf.b.c[0] = 66;
tf.k[2].n[0] = 66;
tf.k[2].t = 66;
console.log(ob);
console.log(tf);
console.log(JSON.stringify(ob) === JSON.stringify(tf));
console.log(clone(4));
console.log(clone(null));
console.log(clone('fdgd'));