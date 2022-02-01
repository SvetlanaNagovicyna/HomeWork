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

		if (eventTarg.closest('.close') || eventTarg === wrap) {
			wrap.classList.remove('open')
		}
	})
})




// document.querySelectorAll('.popup2').forEach(btn => {
// 	btn.addEventListener('click', function () {
// 		const popupBlock = document.querySelector('.popup-2');
// 		popupBlock.classList.add('open');
// 	})
// });




// document.querySelectorAll('.btn').forEach(btn => {
// 	btn.addEventListener('click', function () {
// 		const popupBlock = document.querySelector('.rules');
// 		popupBlock.classList.add('open');
// 	})
// });




// document.querySelectorAll('.popup-wrap').forEach(wrap => {
// 	wrap.addEventListener('click', event => {
// 		const eventTarg = event.target;
// 		if (eventTarg.closest('.close')) {
// 			wrap.classList.remove('open')
// 		}
// 	})
// })