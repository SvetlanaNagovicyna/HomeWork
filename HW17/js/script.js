/* 

ДЗ 17. Секундомер

На странице после загрузки идет отсчет секунд

* сделать старт секундомера по клику на кнопку

*/


let milliseconds = 0;
let timer;
const time = document.querySelector('.time');
const hours = document.querySelector('#hours');
const minute = document.querySelector('#minute');
const sec = document.querySelector('#sec');
const ms = document.querySelector('#ms');


const startTimer = () => {
	time.classList.remove('paused');
	clearInterval(timer);
	timer = setInterval(() => {
		milliseconds += 10;
		let newTimer = new Date(milliseconds);
		hours.innerHTML = ('0' + newTimer.getUTCHours()).slice(-2);
		minute.innerHTML = ('0' + newTimer.getUTCMinutes()).slice(-2);
		sec.innerHTML = ('0' + newTimer.getUTCSeconds()).slice(-2);
		ms.innerHTML = ('0' + newTimer.getUTCMilliseconds()).slice(-3, -1);

	}, 10);

};

const stopTimer = () => {
	time.classList.add('stop');
	clearInterval(timer);
};

const resetTimer = () => {
	time.classList.remove('stop');
	clearInterval(timer);
	milliseconds = 0;
	hours.innerHTML = '00';
	minute.innerHTML = '00';
	sec.innerHTML = '00';
	ms.innerHTML = '00';
};

document.addEventListener('click', (e) => {
	const elem = e.target;
	if (elem.id === 'start') {
		startTimer();
	}
	if (elem.id === 'stop') {
		stopTimer();
	}
	if (elem.id === 'reset') {
		resetTimer();
	}
})