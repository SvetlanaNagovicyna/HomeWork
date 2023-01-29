/* 

ДЗ 37. Валютный калькулятор Ajax

*/


const input = document.querySelector('.value');
const total = document.querySelector('.total');
const select = document.querySelector('#currency');
const btns = document.querySelectorAll('button');
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'



// fetch(url)
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log(data)
// 		data.forEach(el => {
// 			const $option = document.createElement('option');
// 			$option.innerHTML = el.cc + ' (' + el.txt + ')'
// 			$option.value = el.rate;
// 			select.appendChild($option);
// 			calc();
// 		})
// 	});




// $.get(url, data => {
// 	data.forEach(el => {
// 		const $option = document.createElement('option');
// 		$option.innerHTML = el.cc + ' (' + el.txt + ')'
// 		$option.value = el.rate;
// 		select.appendChild($option);
// 		calc();
// 	})
// });



const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();
xhr.onload = function () {
	if (xhr.status === 200) {
		const data = JSON.parse(xhr.responseText);
		data.forEach(el => {
			const $option = document.createElement('option');
			$option.innerHTML = el.cc + ' (' + el.txt + ')'
			$option.value = el.rate;
			select.appendChild($option);
			calc();
		})
	}
}


function calc() {
	const option = document.querySelectorAll('#currency option');
	const inputValue = input.value;
	let totalValue;

	option.forEach(el => {
		if (el.selected === true) {
			totalValue = el.value * inputValue;
			total.textContent = totalValue.toFixed(2) + ' ₴';
		}
	})

	btns.forEach(btn => {
		btn.addEventListener('click', elem => {
			option.forEach(el => {
				if (el.selected === true) {
					let totalValue;
					if (elem.target.id === 'purchase') {
						totalValue = el.value * inputValue;
					} else {
						totalValue = (Number(el.value) + el.value / 100 * 7) * inputValue;
					}
					total.textContent = totalValue.toFixed(2) + ' ₴';
				}
			})
		})
	})
}
calc();


input.addEventListener('input', () => {
	calc();
});

select.addEventListener('change', () => {
	calc();
});