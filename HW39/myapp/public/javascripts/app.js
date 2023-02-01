// сделать приложение на express.js

// страница с двумя инпутами и кнопкой

// в инпуты вводим числа и нажимаем кнопку

// на сервер отправляется запрос с двумя числами, а возвращается их сумма


const $firstInput = document.querySelector('#first');
const $secondInput = document.querySelector('#second');
const $res = document.querySelector('#res');



document.querySelector('#sum').addEventListener('click', () => {
	const firstInputValue = $firstInput.value;
	const secondInputValue = $secondInput.value;

	const myHeaders = new Headers({
		"Content-Type": "application/json"
	});
	fetch('task', {
			method: 'POST',
			headers: myHeaders,
			body: JSON.stringify({
				firstInputValue,
				secondInputValue
			})
		})
		.then(res => res.json())
		.then(res => {
			$res.textContent = res.data;
		});
})