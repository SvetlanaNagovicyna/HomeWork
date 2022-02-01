/* 

ДЗ 19. клики по списку

Сделать список, по клику на любой из элементов он выделяется красным цветом, если один уже выделен, а кликнули по-другому, то выделение с прошлого — снимается, и ставится на тот по котором кликнули

*/

let redItem;


document.querySelectorAll('.item').forEach(function (item) {
	item.addEventListener('click', function () {
		if (redItem) {
			redItem.classList.remove('red');
		}
		this.classList.add('red')
		redItem = this;
	})
})