/* 

ДЗ 29. Найди клад

Сделать игру

случайным образом задаются координаты клада

при клике на карту рассчитывается расстояние от места клика до места клада

в зависимости от расстояния выводятся комментарии: горячо, тепло, холодно

если пользователь кликнул на сам клад или в непосредственной близости от него – игра завершается победой

*/


const $map = document.querySelector('img');


function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

$map.clientX = getRandom(0, $map.clientWidth);
$map.clientY = getRandom(0, $map.clientHeight);


$map.addEventListener('click', function (e) {
	const sideX = e.clientX - $map.clientX;
	const sideY = e.clientY - $map.clientY;
	const distance = Math.floor(Math.sqrt(Math.pow(sideX, 2) + Math.pow(sideY, 2)))

	if (distance > 150) {
		alert('холодно');
	} else if (distance > 90) {
		alert('тепло');
	} else if (distance > 50) {
		alert('горячо');
	} else {
		alert('ПОБЕДААА!!!!');
	}
})