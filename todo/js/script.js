///////////////////////////////////////////////////////


const inputText = document.querySelector('#new-text');
const addButton = document.querySelector('#add');
const listBlock = document.querySelector('.list-block');
const buttonHide = document.querySelector('.block-hide');


function createButton(classBtn, scrImg, classImg) {
	const $button = document.createElement('button');
	$button.classList.add(classBtn);

	const $imgBtn = document.createElement('img');
	$imgBtn.setAttribute('src', scrImg);
	$imgBtn.setAttribute('alt', '');
	$imgBtn.classList.add(classImg);

	$button.appendChild($imgBtn);
	return $button;
}

function createDiv(classDiv) {
	const $listBlock = document.createElement('div');
	$listBlock.classList.add(classDiv);
	return $listBlock;
}


function createNewItem(text) {
	const $listBlockItem = createDiv('list-block__item');
	const $listBlockText = createDiv('list-block__item-text');
	const $listBlockBtns = createDiv('list-block__btns');

	const appendBlockItem = listBlock.appendChild($listBlockItem);
	const appendBlockText = appendBlockItem.appendChild($listBlockText);
	const appendBlockBtns = appendBlockItem.appendChild($listBlockBtns);

	appendBlockText.textContent = text;

	appendBlockBtns.appendChild(createButton('edit', 'img/pencil.svg', 'check-img'))
	appendBlockBtns.appendChild(createButton('done', 'img/check.svg', 'done-img'))
	appendBlockBtns.appendChild(createButton('remove', 'img/cross.svg', 'remove-img'))

}


addButton.addEventListener('click', function () {
	if (inputText.value !== '') {

		createNewItem(inputText.value);

		inputText.value = '';
		inputText.focus();

		inputText.classList.remove('input-error');

	} else {
		inputText.focus();
		inputText.classList.add('input-error');
	}

})


listBlock.addEventListener('click', function (event) {
	const target = event.target;
	const $blockItem = target.closest('.list-block__item');
	const $blockBtns = $blockItem.querySelector('.list-block__btns');
	const $blockItemText = $blockItem.querySelector('.list-block__item-text');

	if (target.closest('.done')) {
		const parentItem = $blockItem;
		parentItem.classList.toggle('check');
		if (buttonHide.classList.contains('hide')) {
			parentItem.classList.add('hidden');
		}
	}

	if (target.closest('.remove')) {
		$blockItem.remove()
	}

	// редактирование


	if (target.closest('.edit')) {
		const $createInput = document.createElement('input');
		$createInput.setAttribute('type', 'text');
		$createInput.setAttribute('id', 'item-input');

		const $createText = document.createElement('span');
		$createText.classList.add('btn-save');
		$createText.textContent = 'save';


		const getTextItem = $blockItemText.textContent;
		$createInput.value = getTextItem;

		$blockItem.prepend($createInput);
		$blockBtns.prepend($createText);

		$blockItemText.classList.add('hidden');
		$blockItem.querySelector('.edit').classList.add('hidden');
		$createInput.focus();
	}

	if (target.closest('.btn-save')) {
		const getValueInput = $blockItem.querySelector('#item-input').value;
		$blockItemText.textContent = getValueInput;

		$blockItem.querySelector('#item-input').remove();
		$blockItemText.classList.remove('hidden')

		$blockItem.querySelector('.edit').classList.remove('hidden');
		$blockItem.querySelector('.btn-save').remove();
	}
})

buttonHide.addEventListener('click', function () {
	buttonHide.classList.toggle('hide');
	listBlock.classList.toggle('hide');
})