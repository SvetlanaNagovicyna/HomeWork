/* 

ДЗ 26. На странице есть изображение.

Сделать, чтобы при наведении указателя мыши на изображение это изображение переворачивалось вверх ногами

Не использовать hover, сделать на событиях js
*/



const $img = document.querySelector('.image img');


$img.addEventListener('mousemove', () => {
	$img.style.transform = 'rotate(180deg)';
})

$img.addEventListener('mouseout', () => {
	$img.style.transform = 'rotate(0deg)';
})