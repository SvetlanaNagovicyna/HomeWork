/* 

ДЗ 38. Есть список с десятком элементов, над ним находится инпут, в него можно вписать текст, по мере ввода в списке должны оставаться только пункты которые содержат то что ввели, остальные скрываются
Большие/маленькие буквы игнорируются

*/


const $input = document.querySelector('input');
const $list = document.querySelectorAll('li');


$input.addEventListener('input', () => {
	$list.forEach(el => {
		el.textContent.toLowerCase().includes($input.value.toLowerCase()) ?
			el.style.display = "block" :
			el.style.display = "none";
	})
});