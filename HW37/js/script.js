/* 

ДЗ 37. Валютный калькулятор Ajax

*/


const input = document.querySelector('.value');
const sale = document.querySelector('.sale .value');
const purchase = document.querySelector('.purchase .value');
const select = document.querySelector('#currency');
const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';



// fetch(url)
// 	.then(response => response.json())
// 	.then(data => {
// 		data.forEach(el => {
// 			const $option = document.createElement('option');
// 			$option.innerHTML = el.cc + ' (' + el.txt + ')'
// 			$option.value = el.rate;
// 			select.appendChild($option);
// 		})
// 	});




// $.get(url, data => {
// 	data.forEach(el => {
// 		const $option = document.createElement('option');
// 		$option.innerHTML = el.cc + ' (' + el.txt + ')'
// 		$option.value = el.rate;
// 		select.appendChild($option);
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
		})
	}
}



function calc() {
	sale.textContent = (select.value * input.value).toFixed(2) + ' ₴';
	purchase.textContent = ((Number(select.value) + select.value / 100 * 7) * input.value).toFixed(2) + ' ₴';
}

select.addEventListener('change', (e) => {
	calc();
})

input.addEventListener('input', (e) => {
	calc();
});