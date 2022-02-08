/* 

ДЗ 23. сделать todo

*/



const input = document.querySelector('input.value');
const addButton = document.querySelector('.add');
const listBlock = document.querySelector('.list-block');


function addList() {

	const inputValue = input.value;


	const p = document.createElement('div');
	p.classList.add('list-block__item');



	p.innerHTML = `
				<div class="list-block__item-text">${inputValue}</div>
				<div class="list-block__btns">
					<button name="ckeck" title="выполнено"><img src="img/check.svg" alt=""></button>
					<button name="cross" title="удалить"><img src="img/cross.svg" alt=""></button>
			
				</div>`

	listBlock.append(p);

	input.value = '';
}


addButton.addEventListener('click', () => {

	input.value === '' ? input.required = true : addList();
});