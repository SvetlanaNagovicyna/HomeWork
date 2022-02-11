/* 

ДЗ 23. сделать todo

*/



const input = document.querySelector('input.value');
const addButton = document.querySelector('.add');
const listBlock = document.querySelector('.list-block');
const wrapListBlock = document.querySelector('.list-block');
const show = document.querySelector('.eye');


function addItemList() {

	const inputValue = input.value;


	const $listBlockItem = document.createElement('div');
	$listBlockItem.classList.add('list-block__item');

	const $listBlockText = document.createElement('div')
	$listBlockText.classList.add('list-block__item-text');

	const $listBlockBtns = document.createElement('div');
	$listBlockBtns.classList.add('list-block__btns');



	const $buttonEdit = document.createElement('button');
	$buttonEdit.setAttribute('name', 'edit');
	$buttonEdit.setAttribute('title', 'редактировать');
	$buttonEdit.classList.add('edit');

	const $buttonCheck = document.createElement('button');
	$buttonCheck.setAttribute('name', 'check');
	$buttonCheck.setAttribute('title', 'выполнено');
	$buttonCheck.classList.add('check');

	const $buttonСross = document.createElement('button');
	$buttonСross.setAttribute('name', 'cross');
	$buttonСross.setAttribute('title', 'удалить');
	$buttonСross.classList.add('cross');



	const $imgBtnEdit = document.createElement('img');
	$imgBtnEdit.setAttribute('src', 'img/pencil.svg');
	$imgBtnEdit.setAttribute('alt', '');
	$imgBtnEdit.classList.add('editImg');

	const $imgBtnCheck = document.createElement('img');
	$imgBtnCheck.setAttribute('src', 'img/check.svg');
	$imgBtnCheck.setAttribute('alt', '');
	$imgBtnCheck.classList.add('checkImg');

	const $imgBtnCross = document.createElement('img');
	$imgBtnCross.setAttribute('src', 'img/cross.svg');
	$imgBtnCross.setAttribute('alt', '');
	$imgBtnCross.classList.add('crossImg');



	const appendItem = document.querySelector('.list-block').appendChild($listBlockItem);

	const appendBlockText = document.querySelector('.list-block').lastElementChild.appendChild($listBlockText);
	appendBlockText.textContent = inputValue;
	const appendBlockBtns = document.querySelector('.list-block').lastElementChild.appendChild($listBlockBtns);

	const appendButtonEdit = document.querySelector('.list-block').lastElementChild;
	const buttonEdit = appendButtonEdit.querySelector('.list-block__btns').appendChild($buttonEdit)
	const appendImgBtnEdit = buttonEdit.appendChild($imgBtnEdit);

	const appendButtonCheck = document.querySelector('.list-block').lastElementChild;
	const buttonCheck = appendButtonCheck.querySelector('.list-block__btns').appendChild($buttonCheck)
	const appendImgBtnCheck = buttonCheck.appendChild($imgBtnCheck);

	const appendButtonСross = document.querySelector('.list-block').lastElementChild;
	const buttonСross = appendButtonСross.querySelector('.list-block__btns').appendChild($buttonСross)
	const appendImgBtnСross = buttonСross.appendChild($imgBtnCross);


	input.value = '';
}


addButton.addEventListener('click', () => {
	input.value === '' ? input.required = true : addItemList();
});



wrapListBlock.addEventListener('click', function (event) {
	const target = event.target;
	const listItem = target.closest('.list-block__item');
	const check = listItem.querySelector('.list-block__item-text');

	if (target.classList.contains('check') || target.classList.contains('checkImg')) {
		listItem.classList.toggle('check');
	} else if (target.classList.contains('cross') || target.classList.contains('crossImg')) {
		listItem.classList.add('remove');
	} else if (target.classList.contains('edit') || target.classList.contains('editImg')) {
		check.contentEditable = true;
		check.focus();
	} else {
		check.contentEditable = false;
	}

})

show.addEventListener('click', function () {
	const toggleHide = show.classList.toggle('hide');
	const itemBlock = document.querySelectorAll('.list-block__item.check');

	if (toggleHide) {
		itemBlock.forEach((item) => {
			item.classList.add('hidden')
		})
	} else {
		itemBlock.forEach((item) => {
			item.classList.remove('hidden')
		})
	}
})