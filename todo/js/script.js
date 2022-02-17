///////////////////////////////////////////////////////


const inputText = document.querySelector('#new-text');
const addButton = document.querySelector('#add');
const listBlock = document.querySelector('.list-block');
const buttonHide = document.querySelector('.block-hide');


function createButton(classBtn, scrImg) {
	const $button = document.createElement('button');
	$button.classList.add(classBtn);

	const $imgBtn = document.createElement('img');
	$imgBtn.setAttribute('src', scrImg);
	$imgBtn.setAttribute('alt', '');

	$button.appendChild($imgBtn);
	return $button;
}

function createDiv(classDiv) {
	const $listBlock = document.createElement('div');
	$listBlock.classList.add(classDiv);
	return $listBlock;
}

function createInput(typeInput) {
	const $createInput = document.createElement('input');
	$createInput.setAttribute('type', typeInput);

	return $createInput;
}


function createNewItem(text) {
	const appendBlockItem = createDiv('list-block__item');
	const appendBlockText = appendBlockItem.appendChild(createDiv('list-block__item-text'));
	const appendBlockBtns = appendBlockItem.appendChild(createDiv('list-block__btns'));

	appendBlockText.textContent = text;


	appendBlockBtns.appendChild(createButton('save', 'img/save.svg'))
	appendBlockBtns.appendChild(createButton('edit', 'img/pencil.svg'))
	appendBlockBtns.appendChild(createButton('done', 'img/check.svg'))
	appendBlockBtns.appendChild(createButton('remove', 'img/cross.svg'))


	return appendBlockItem;
}


function appendDomItem(text) {
	listBlock.appendChild(createNewItem(text));
}

function appendDomInput(elem) {
	const newInput = createInput('text');
	elem.prepend(newInput);
	return newInput;
}

addButton.addEventListener('click', function () {
	if (inputText.value !== '') {

		appendDomItem(inputText.value) // добавляет в дом

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

		if (!$blockItem.classList.contains('check')) {
			const $editInput = appendDomInput($blockItem);

			$blockItem.classList.add('saved');

			$editInput.value = $blockItemText.textContent;
			$editInput.focus();
		}

	}

	if (target.closest('.save')) {

		const $editInput = $blockItem.querySelector('input');


		if ($editInput.value !== '') {


			$blockItem.classList.remove('saved', 'input-err');
			$blockItemText.textContent = $editInput.value;
			$editInput.remove();

		} else {
			$blockItem.classList.toggle('input-err');
			$editInput.focus();
		}

	}

})

buttonHide.addEventListener('click', function () {
	buttonHide.classList.toggle('hide');
	listBlock.classList.toggle('hide');
})