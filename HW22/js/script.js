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
			total.textContent = parseInt((totalValue) * 100) / 100;
		}
	})
}

calc();


input.addEventListener('change', () => {

	calc()

});

select.addEventListener('change', () => {

	calc()

});