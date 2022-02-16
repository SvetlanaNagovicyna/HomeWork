///////////////////////////////////////////////////////


const inputText = document.querySelector('#new-text');
const addButton = document.querySelector('#add');
const listBlock = document.querySelector('.list-block');
const buttonHide = document.querySelector('.block-hide');


addButton.addEventListener('click', function () {
	if (inputText.value !== '') {


		const inputValue = inputText.value;

		const $listBlockItem = document.createElement('div');
		$listBlockItem.classList.add('list-block__item');

		const $listBlockText = document.createElement('div')
		$listBlockText.classList.add('list-block__item-text');

		const $listBlockBtns = document.createElement('div');
		$listBlockBtns.classList.add('list-block__btns');


		document.querySelector('.list-block').appendChild($listBlockItem);

		const appendBlockText = document.querySelector('.list-block').lastElementChild.appendChild($listBlockText);
		appendBlockText.textContent = inputValue;
		document.querySelector('.list-block').lastElementChild.appendChild($listBlockBtns);

		inputText.value = '';
		inputText.focus();
		createButtonEdit();
		createButtonDone();
		createButtonRemove();
		inputText.classList.remove('input-error');

	} else {
		inputText.focus();
		inputText.classList.add('input-error');
	}


})


function createButtonEdit() {
	const $buttonEdit = document.createElement('button');
	$buttonEdit.classList.add('edit');

	const $imgBtnEdit = document.createElement('img');
	$imgBtnEdit.setAttribute('src', 'img/pencil.svg');
	$imgBtnEdit.setAttribute('alt', '');
	$imgBtnEdit.classList.add('edit-img');

	const appendButtonEdit = document.querySelector('.list-block').lastElementChild;
	const buttonEdit = appendButtonEdit.querySelector('.list-block__btns').appendChild($buttonEdit)
	buttonEdit.appendChild($imgBtnEdit);
}

function createButtonDone() {
	const $buttonDone = document.createElement('button');
	$buttonDone.classList.add('done');

	const $imgBtnDone = document.createElement('img');
	$imgBtnDone.setAttribute('src', 'img/check.svg');
	$imgBtnDone.setAttribute('alt', '');
	$imgBtnDone.classList.add('check-img');

	const appendButtonDone = document.querySelector('.list-block').lastElementChild;
	const buttonDone = appendButtonDone.querySelector('.list-block__btns').appendChild($buttonDone)
	buttonDone.appendChild($imgBtnDone);
}

function createButtonRemove() {
	const $buttonRemove = document.createElement('button');
	$buttonRemove.classList.add('remove');

	const $imgBtnRemove = document.createElement('img');
	$imgBtnRemove.setAttribute('src', 'img/cross.svg');
	$imgBtnRemove.setAttribute('alt', '');
	$imgBtnRemove.classList.add('remove-img');

	const appendButtonRemove = document.querySelector('.list-block').lastElementChild;
	const buttonRemove = appendButtonRemove.querySelector('.list-block__btns').appendChild($buttonRemove)
	buttonRemove.appendChild($imgBtnRemove);
}


listBlock.addEventListener('click', function (event) {
	const target = event.target;

	if (target.classList.contains('done') || target.classList.contains('check-img')) {
		const parentItem = target.closest('.list-block__item');
		parentItem.classList.toggle('check');
		if (buttonHide.classList.contains('hide')) {
			parentItem.classList.add('hidden');
		}
	}

	if (target.classList.contains('remove') || target.classList.contains('remove-img')) {
		target.closest('.list-block__item').remove()
	}


	const $blockItem = target.closest('.list-block__item');
	const $blockBtns = $blockItem.querySelector('.list-block__btns');



	if (target.classList.contains('edit') || target.classList.contains('edit-img')) {
		const $createInput = document.createElement('input');
		$createInput.setAttribute('type', 'text');
		$createInput.setAttribute('id', 'item-input');

		const getTextItem = target.closest('.list-block__item').querySelector('.list-block__item-text').textContent;
		$createInput.value = getTextItem;

		const $createText = document.createElement('span');
		$createText.classList.add('btn-save');
		$createText.textContent = 'save';

		$blockItem.prepend($createInput);
		$blockBtns.prepend($createText);


		$blockItem.querySelector('.list-block__item-text').classList.add('hidden');
		$blockItem.querySelector('.list-block__btns .edit').classList.add('hidden');
		$createInput.focus();
	}

	if (target.classList.contains('btn-save')) {
		const getValueInput = $blockItem.querySelector('#item-input').value;
		$blockItem.querySelector('.list-block__item-text').textContent = getValueInput;

		$blockItem.querySelector('#item-input').remove();
		$blockItem.querySelector('.list-block__item-text').classList.remove('hidden')

		$blockItem.querySelector('.list-block__btns .edit').classList.remove('hidden');
		$blockItem.querySelector('.list-block__btns span').remove();
	}
})


buttonHide.addEventListener('click', function () {
	const toggleHide = buttonHide.classList.toggle('hide');
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