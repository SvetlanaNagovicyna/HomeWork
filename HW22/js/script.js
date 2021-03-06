/* 

ДЗ 22. Валютный калькулятор

*/


const input = document.querySelector('.value');
const total = document.querySelector('.total');
const option = document.querySelectorAll('#currency option');
const select = document.querySelector('#currency');


function calc() {

	const inputValue = input.value;

	option.forEach(el => {
		if (el.selected === true) {
			const totalValue = el.value * inputValue;
			total.textContent = totalValue.toFixed(2) + ' ₴';
		}
	})
}

calc();


input.addEventListener('input', () => {

	calc()

});

select.addEventListener('change', () => {

	calc()

});