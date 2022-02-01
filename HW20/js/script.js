/* 

ДЗ 20. Сделать попап

*/



document.querySelectorAll('.popup-btn').forEach(btn => {
	btn.addEventListener('click', function () {
		const popupBlock = document.querySelector('#' + btn.dataset.popup);
		popupBlock.classList.add('open');
	})
});

document.querySelectorAll('.popup-wrap').forEach(wrap => {
	wrap.addEventListener('click', event => {

		const eventTarg = event.target;
		console.log(eventTarg);

		if (eventTarg.classList.contains('close') || eventTarg.parentElement.classList.contains('close')) {
			wrap.classList.remove('open')
		}
	})
})