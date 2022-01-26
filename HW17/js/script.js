/* 

ДЗ 17. Секундомер

На странице после загрузки идет отсчет секунд

* сделать старт секундомера по клику на кнопку

*/
const fieldSec = document.querySelector('.stopwatch');

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < 100; i++) {
		(function sec(i) {
			setTimeout(function () {
				fieldSec.innerHTML = i;
			}, 1000 * i)
		})(i);
	}
});