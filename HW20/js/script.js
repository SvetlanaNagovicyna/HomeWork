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
	wrap.addEventListener('click', () => {
		if (wrap.classList.contains('open')) {
			wrap.classList.remove('open')
		}
	})
})