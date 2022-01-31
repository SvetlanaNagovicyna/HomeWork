/* 

ДЗ 18. Счетчики

5 квадратов внутри каждого из которых изначально вписана цифра 0, при клике на любой квадрат цифра в нем увеличивается на один

* сделать чтоб внутри квадратов были кнопки +/-

*/

// const btns = document.querySelectorAll('.increment, .decrement')

// btns.forEach(function (btn) {
// 	btn.addEventListener('click', function () {
// 		let count = this.closest('.square').querySelector('.count')
// 		this.classList.contains('increment') ? count.textContent++ : count.textContent--;
// 	})
// })


const wrap = document.querySelector('.wrapper')

wrap.addEventListener('click', function (event) {
	const target = event.target;
	const count = target.closest('.square').querySelector('.count')

	if (target.classList.contains('increment')) {
		count.textContent++
	} else if (target.classList.contains('decrement')) {
		count.textContent--
	}
})




let add = document.querySelector('.add')
add.addEventListener('click', function () {
	let wrapper = document.querySelector('.wrapper');

	let newDiv = document.createElement('div');
	newDiv.classList.add('square');
	newDiv.innerHTML = `<div class="count">0</div>
						<div class="btns">
							<button class="decrement">-</button>
							<button class="increment">+</button>
						</div>`
	wrapper.appendChild(newDiv);
	console.dir(newDiv);
	// console.log(btns);


})

// console.log(btns);