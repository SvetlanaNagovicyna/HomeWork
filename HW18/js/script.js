/* 

ДЗ 18. Счетчики

5 квадратов внутри каждого из которых изначально вписана цифра 0, при клике на любой квадрат цифра в нем увеличивается на один

* сделать чтоб внутри квадратов были кнопки +/-

*/

const btns = document.querySelectorAll('.increment, .decrement')

btns.forEach(function (btn) {
	btn.addEventListener('click', function () {
		let count = this.closest('.square').querySelector('.count')
		this.classList.contains('increment') ? count.textContent++ : count.textContent--;
	})
})