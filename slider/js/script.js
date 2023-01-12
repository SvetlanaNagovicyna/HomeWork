class Slider {

	constructor(selector, settings) {
		this.defaultSettings = {
			dots: true,
			arrows: true,
			multiSlide: true,
			autoPlay: false,
			autoPlaySpeed: 5000,
			arrowNext: '', // Next or html <span>Next</span>
			arrowPrev: '', // Prev or html <span>Prev</span>
			infinity: true,
			clone: false,
			swipe: true
		};
		if (settings) {
			for (var key in settings) {
				this.defaultSettings[key] = settings[key];
			}
		}
		this.slider = document.querySelector(selector);

		this.sliderArr = [];

		const _self = this;

		if (this.defaultSettings.clone) {
			let sliderBox = this.slider.querySelector('.slider_box');
			let sliderInner = sliderBox.innerHTML;
			sliderBox.innerHTML += sliderInner;
		}

		for (let i = 0; i < this.slider.children.length; i++) {
			let sliderChild = this.slider.children[i];
			if (sliderChild.classList.contains('slider_box')) {
				this.sliderArr = this.slider.children[i].children;
			}
		}

		if (this.defaultSettings.multiSlide) {
			this.sliderArr[0].classList.add('slide--active');
			this.sliderArr[this.sliderArr.length - 1].classList.add('slide--prev');
			this.sliderArr[0].nextElementSibling.classList.add('slide--next');
		} else {
			this.sliderArr[0].classList.add('slide--active');
		}

		if (this.defaultSettings.autoPlay) {
			this.interval = this.intervalStart();
		}

		if (this.defaultSettings.dots) {
			const ul = document.createElement('ul');
			ul.classList.add('slider_dots');

			for (let i = 0; i < this.sliderArr.length; i++) {
				let li = document.createElement('li');
				li.classList.add('pagination')
				ul.appendChild(li)
			}

			this.slider.appendChild(ul);
			ul.firstChild.classList.add('slide--active');

			this.dotsArr = ul.children;

		}

		if (this.defaultSettings.arrows) {
			const buttonPrev = document.createElement('div');
			const buttonNext = document.createElement('div');

			buttonPrev.classList.add('slider_arrow', 'slider_arrow--prev', 'disabled');
			buttonPrev.innerHTML = this.defaultSettings.arrowPrev;

			buttonNext.classList.add('slider_arrow', 'slider_arrow--next');
			buttonNext.innerHTML = this.defaultSettings.arrowNext;

			this.slider.appendChild(buttonPrev);
			this.slider.appendChild(buttonNext);
		}

		let clX1;
		let clX2;
		const SWIPE_LENGTH = 20;


		this.slider.addEventListener('mousedown', function (event) {
			clX1 = event.clientX;
		});

		this.slider.addEventListener('click', function (event) {
			let target = event.target;


			if (target.closest('.slide--prev') || target.closest('.slider_arrow--prev')) {


				_self.slidePrev();

				_self.autoPlayStart();


			}

			if (target.closest('.slide--next') || target.closest('.slider_arrow--next')) {


				_self.slideNext();

				_self.autoPlayStart();

			}

			if (target.classList.contains('pagination') && !target.classList.contains('slide--active')) {

				document.querySelectorAll('.slider_dots li').forEach((el) => {
					el.classList.remove('slide--active')
				})
				target.classList.add('slide--active');

				let currentIndexDots = _self.currentIndex(_self.dotsArr);

				if (currentIndexDots === 0) {
					_self.removeSlideClass(_self.sliderArr);
					_self.sliderArr[currentIndexDots].classList.add('slide--active');
					_self.sliderArr[_self.sliderArr.length - 1].classList.add('slide--prev');
					_self.sliderArr[currentIndexDots + 1].classList.add('slide--next');
				} else if (currentIndexDots === _self.currentIndex(_self.sliderArr)) {
					_self.removeSlideClass(_self.sliderArr);
					_self.sliderArr[currentIndexDots].classList.add('slide--active');
					_self.sliderArr[currentIndexDots - 1].classList.add('slide--prev');
					_self.sliderArr[0].classList.add('slide--next');
				} else {
					_self.removeSlideClass(_self.sliderArr);
					_self.sliderArr[currentIndexDots].classList.add('slide--active');
					_self.sliderArr[currentIndexDots - 1].classList.add('slide--prev');
					_self.sliderArr[currentIndexDots + 1].classList.add('slide--next');
				}
			}



			if (_self.defaultSettings.swipe) {
				clX2 = event.clientX;
				let res = clX1 - clX2;

				if (res < -SWIPE_LENGTH && !('ontouchstart' in window)) {


					_self.slidePrev();

					_self.autoPlayStart();

				}
				if (res > SWIPE_LENGTH && !('ontouchstart' in window)) {

					_self.slideNext();

					_self.autoPlayStart();
				}
			}

		});

		if (_self.defaultSettings.swipe) {
			let touchX1;
			let touchX2;

			this.slider.addEventListener('touchstart', function (event) {
				touchX1 = event.changedTouches[0].clientX;
			});

			this.slider.addEventListener('touchend', function (event) {
				touchX2 = event.changedTouches[0].clientX;

				let res = touchX1 - touchX2;

				if (res < -SWIPE_LENGTH && ('ontouchstart' in window)) {

					_self.slidePrev();

					_self.autoPlayStart();
				}
				if (res > SWIPE_LENGTH && ('ontouchstart' in window)) {

					_self.slideNext();

					_self.autoPlayStart();
				}
			});
		}

	}

	intervalStart() {
		const _self = this;
		return setInterval(function () {
			_self.slideNext();
		}, 3000)
	};
	autoPlayStart() {
		if (this.defaultSettings.autoPlay) {
			clearInterval(this.interval);
			this.interval = this.intervalStart();
		}

	};
	currentIndex(arr) {
		let index = 0;

		if (this.defaultSettings.dots) {
			for (let i = 0; i < this.dotsArr.length; i++) {
				if (this.dotsArr[i].classList.contains('slide--active')) {
					index = i;
				}
			}
			return index;

		} else {

			for (let i = 0; i < this.sliderArr.length; i++) {
				if (this.sliderArr[i].classList.contains('slide--active')) {
					index = i;
				}
			}
			return index;
		}

	};

	slideMultiPrev(index, arr) {
		if (index === 0 && !this.defaultSettings.infinity) {

		} else if (index === 0) {
			this.removeSlideClass(arr);
			arr[arr.length - 1].classList.add('slide--active');
			arr[arr.length - 2].classList.add('slide--prev');
			this.sliderArr[index].classList.add('slide--next');
		} else if (index === 1) {
			this.removeSlideClass(arr);
			arr[index - 1].classList.add('slide--active');
			arr[arr.length - 1].classList.add('slide--prev');
			arr[index].classList.add('slide--next');
		} else {
			this.removeSlideClass(arr);
			arr[index - 1].classList.add('slide--active');
			arr[index - 2].classList.add('slide--prev');
			arr[index].classList.add('slide--next');
		}
	};
	slideMultiNext(index, arr) {
		if (index === arr.length - 1 && !this.defaultSettings.infinity) {

		} else if (index === arr.length - 2) {
			this.removeSlideClass(arr);
			arr[index + 1].classList.add('slide--active');
			arr[index].classList.add('slide--prev');
			arr[0].classList.add('slide--next');
		} else if (index === arr.length - 1) {
			this.removeSlideClass(arr);
			arr[0].classList.add('slide--active');
			arr[arr.length - 1].classList.add('slide--prev');
			arr[1].classList.add('slide--next');
		} else {
			this.removeSlideClass(arr);
			arr[index + 1].classList.add('slide--active');
			arr[index].classList.add('slide--prev');
			arr[index + 2].classList.add('slide--next');
		}
	};
	removeSlideClass(arr) {
		for (let i = 0; i < arr.length; i++) {
			arr[i].classList.remove('slide--active');
			arr[i].classList.remove('slide--prev');
			arr[i].classList.remove('slide--next');
		}
	};
	slidePrevOne(index, arr) {
		if (index === 0 && !this.defaultSettings.infinity) {

		} else if (index === 0) {
			this.removeSlideClass(arr);
			arr[arr.length - 1].classList.add('slide--active');
		} else {
			this.removeSlideClass(arr);
			arr[index - 1].classList.add('slide--active');
		}
	};
	slideNextOne(index, arr) {
		if ((index === (arr.length - 1)) && !this.defaultSettings.infinity) {

		} else if (index === (arr.length - 1)) {
			this.removeSlideClass(arr);
			arr[0].classList.add('slide--active');
		} else {
			this.removeSlideClass(arr);
			arr[index + 1].classList.add('slide--active');
		}
	};
	slideNext() {
		let currentIndex = this.currentIndex();
		if (this.defaultSettings.multiSlide) {
			this.slideMultiNext(currentIndex, this.sliderArr);
		} else {
			this.slideNextOne(currentIndex, this.sliderArr);
		}
		if (this.defaultSettings.dots) {
			this.slideNextOne(currentIndex, this.dotsArr)
		}

		console.log(currentIndex)
		console.log((this.sliderArr.length - 2))

		console.log(document.querySelector('.slider_arrow.slider_arrow--next'))
		if (currentIndex === (this.sliderArr.length - 2)) {
			document.querySelector('.slider_arrow.slider_arrow--next').classList.add('disabled');
		} else {
			document.querySelector('.slider_arrow.slider_arrow--next').classList.remove('disabled');
			document.querySelector('.slider_arrow.slider_arrow--prev').classList.remove('disabled');
		}
	};
	slidePrev() {
		let currentIndex = this.currentIndex();

		if (this.defaultSettings.multiSlide) {
			this.slideMultiPrev(currentIndex, this.sliderArr);
		} else {
			this.slidePrevOne(currentIndex, this.sliderArr)
		}
		if (this.defaultSettings.dots) {
			this.slidePrevOne(currentIndex, this.dotsArr)
		}
		if (currentIndex === 1) {
			document.querySelector('.slider_arrow.slider_arrow--prev').classList.add('disabled');
		} else {
			document.querySelector('.slider_arrow.slider_arrow--next').classList.remove('disabled');
			document.querySelector('.slider_arrow.slider_arrow--prev').classList.remove('disabled');
		}

	}

};






// function Slider(selector, settings) {

// 	this.defaultSettings = {
// 		dots: true,
// 		arrows: true,
// 		multiSlide: true,
// 		autoPlay: false,
// 		autoPlaySpeed: 5000,
// 		arrowNext: '', // Next or html <span>Next</span>
// 		arrowPrev: '', // Prev or html <span>Prev</span>
// 		infinity: true,
// 		clone: false,
// 		swipe: true
// 	};

// 	if (settings) {
// 		for (var key in settings) {
// 			this.defaultSettings[key] = settings[key];
// 		}
// 	}

// 	this.slider = document.querySelector(selector);

// 	this.sliderArr = [];

// 	const _self = this;

// 	if (this.defaultSettings.clone) {
// 		let sliderBox = this.slider.querySelector('.slider_box');
// 		let sliderInner = sliderBox.innerHTML;
// 		sliderBox.innerHTML += sliderInner;
// 	}

// 	for (let i = 0; i < this.slider.children.length; i++) {
// 		let sliderChild = this.slider.children[i];
// 		if (sliderChild.classList.contains('slider_box')) {
// 			this.sliderArr = this.slider.children[i].children;
// 		}
// 	}

// 	if (this.defaultSettings.multiSlide) {
// 		this.sliderArr[0].classList.add('slide--active');
// 		this.sliderArr[this.sliderArr.length - 1].classList.add('slide--prev');
// 		this.sliderArr[0].nextElementSibling.classList.add('slide--next');
// 	} else {
// 		this.sliderArr[0].classList.add('slide--active');
// 	}

// 	if (this.defaultSettings.autoPlay) {
// 		this.interval = this.intervalStart();
// 	}

// 	if (this.defaultSettings.dots) {
// 		const ul = document.createElement('ul');
// 		ul.classList.add('slider_dots');

// 		for (let i = 0; i < this.sliderArr.length; i++) {
// 			let li = document.createElement('li');
// 			li.classList.add('pagination')
// 			ul.appendChild(li)
// 		}

// 		this.slider.appendChild(ul);
// 		ul.firstChild.classList.add('slide--active');

// 		this.dotsArr = ul.children;

// 	}

// 	if (this.defaultSettings.arrows) {
// 		const buttonPrev = document.createElement('div');
// 		const buttonNext = document.createElement('div');

// 		buttonPrev.classList.add('slider_arrow', 'slider_arrow--prev', 'disabled');
// 		buttonPrev.innerHTML = this.defaultSettings.arrowPrev;

// 		buttonNext.classList.add('slider_arrow', 'slider_arrow--next');
// 		buttonNext.innerHTML = this.defaultSettings.arrowNext;

// 		this.slider.appendChild(buttonPrev);
// 		this.slider.appendChild(buttonNext);
// 	}

// 	let clX1;
// 	let clX2;
// 	const SWIPE_LENGTH = 20;


// 	this.slider.addEventListener('mousedown', function (event) {
// 		clX1 = event.clientX;
// 	});

// 	this.slider.addEventListener('click', function (event) {
// 		let target = event.target;


// 		if (target.closest('.slide--prev') || target.closest('.slider_arrow--prev')) {


// 			_self.slidePrev();

// 			_self.autoPlayStart();


// 		}

// 		if (target.closest('.slide--next') || target.closest('.slider_arrow--next')) {


// 			_self.slideNext();

// 			_self.autoPlayStart();

// 		}

// 		if (target.classList.contains('pagination') && !target.classList.contains('slide--active')) {

// 			document.querySelectorAll('.slider_dots li').forEach((el) => {
// 				el.classList.remove('slide--active')
// 			})
// 			target.classList.add('slide--active');

// 			let currentIndexDots = _self.currentIndex(_self.dotsArr);

// 			if (currentIndexDots === 0) {
// 				_self.removeSlideClass(_self.sliderArr);
// 				_self.sliderArr[currentIndexDots].classList.add('slide--active');
// 				_self.sliderArr[_self.sliderArr.length - 1].classList.add('slide--prev');
// 				_self.sliderArr[currentIndexDots + 1].classList.add('slide--next');
// 			} else if (currentIndexDots === _self.currentIndex(_self.sliderArr)) {
// 				_self.removeSlideClass(_self.sliderArr);
// 				_self.sliderArr[currentIndexDots].classList.add('slide--active');
// 				_self.sliderArr[currentIndexDots - 1].classList.add('slide--prev');
// 				_self.sliderArr[0].classList.add('slide--next');
// 			} else {
// 				_self.removeSlideClass(_self.sliderArr);
// 				_self.sliderArr[currentIndexDots].classList.add('slide--active');
// 				_self.sliderArr[currentIndexDots - 1].classList.add('slide--prev');
// 				_self.sliderArr[currentIndexDots + 1].classList.add('slide--next');
// 			}
// 		}



// 		if (_self.defaultSettings.swipe) {
// 			clX2 = event.clientX;
// 			let res = clX1 - clX2;

// 			if (res < -SWIPE_LENGTH && !('ontouchstart' in window)) {


// 				_self.slidePrev();

// 				_self.autoPlayStart();

// 			}
// 			if (res > SWIPE_LENGTH && !('ontouchstart' in window)) {

// 				_self.slideNext();

// 				_self.autoPlayStart();
// 			}
// 		}

// 	});

// 	if (_self.defaultSettings.swipe) {
// 		let touchX1;
// 		let touchX2;

// 		this.slider.addEventListener('touchstart', function (event) {
// 			touchX1 = event.changedTouches[0].clientX;
// 		});

// 		this.slider.addEventListener('touchend', function (event) {
// 			touchX2 = event.changedTouches[0].clientX;

// 			let res = touchX1 - touchX2;

// 			if (res < -SWIPE_LENGTH && ('ontouchstart' in window)) {

// 				_self.slidePrev();

// 				_self.autoPlayStart();
// 			}
// 			if (res > SWIPE_LENGTH && ('ontouchstart' in window)) {

// 				_self.slideNext();

// 				_self.autoPlayStart();
// 			}
// 		});
// 	}


// }

// Slider.prototype.intervalStart = function () {
// 	const _self = this;
// 	return setInterval(function () {
// 		_self.slideNext();
// 	}, 3000)
// };

// Slider.prototype.autoPlayStart = function () {
// 	if (this.defaultSettings.autoPlay) {
// 		clearInterval(this.interval);
// 		this.interval = this.intervalStart();
// 	}

// };

// Slider.prototype.currentIndex = function (arr) {
// 	let index = 0;

// 	if (this.defaultSettings.dots) {
// 		for (let i = 0; i < this.dotsArr.length; i++) {
// 			if (this.dotsArr[i].classList.contains('slide--active')) {
// 				index = i;
// 			}
// 		}
// 		return index;

// 	} else {

// 		for (let i = 0; i < this.sliderArr.length; i++) {
// 			if (this.sliderArr[i].classList.contains('slide--active')) {
// 				index = i;
// 			}
// 		}
// 		return index;
// 	}

// };

// Slider.prototype.slideMultiPrev = function (index, arr) {
// 	if (index === 0 && !this.defaultSettings.infinity) {

// 	} else if (index === 0) {
// 		this.removeSlideClass(arr);
// 		arr[arr.length - 1].classList.add('slide--active');
// 		arr[arr.length - 2].classList.add('slide--prev');
// 		this.sliderArr[index].classList.add('slide--next');
// 	} else if (index === 1) {
// 		this.removeSlideClass(arr);
// 		arr[index - 1].classList.add('slide--active');
// 		arr[arr.length - 1].classList.add('slide--prev');
// 		arr[index].classList.add('slide--next');
// 	} else {
// 		this.removeSlideClass(arr);
// 		arr[index - 1].classList.add('slide--active');
// 		arr[index - 2].classList.add('slide--prev');
// 		arr[index].classList.add('slide--next');
// 	}
// };

// Slider.prototype.slideMultiNext = function (index, arr) {
// 	if (index === arr.length - 1 && !this.defaultSettings.infinity) {

// 	} else if (index === arr.length - 2) {
// 		this.removeSlideClass(arr);
// 		arr[index + 1].classList.add('slide--active');
// 		arr[index].classList.add('slide--prev');
// 		arr[0].classList.add('slide--next');
// 	} else if (index === arr.length - 1) {
// 		this.removeSlideClass(arr);
// 		arr[0].classList.add('slide--active');
// 		arr[arr.length - 1].classList.add('slide--prev');
// 		arr[1].classList.add('slide--next');
// 	} else {
// 		this.removeSlideClass(arr);
// 		arr[index + 1].classList.add('slide--active');
// 		arr[index].classList.add('slide--prev');
// 		arr[index + 2].classList.add('slide--next');
// 	}
// };

// Slider.prototype.removeSlideClass = function (arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i].classList.remove('slide--active');
// 		arr[i].classList.remove('slide--prev');
// 		arr[i].classList.remove('slide--next');
// 	}
// };

// Slider.prototype.slidePrevOne = function (index, arr) {
// 	if (index === 0 && !this.defaultSettings.infinity) {

// 	} else if (index === 0) {
// 		this.removeSlideClass(arr);
// 		arr[arr.length - 1].classList.add('slide--active');
// 	} else {
// 		this.removeSlideClass(arr);
// 		arr[index - 1].classList.add('slide--active');
// 	}
// };

// Slider.prototype.slideNextOne = function (index, arr) {
// 	if ((index === (arr.length - 1)) && !this.defaultSettings.infinity) {

// 	} else if (index === (arr.length - 1)) {
// 		this.removeSlideClass(arr);
// 		arr[0].classList.add('slide--active');
// 	} else {
// 		this.removeSlideClass(arr);
// 		arr[index + 1].classList.add('slide--active');
// 	}
// };


// Slider.prototype.slideNext = function () {
// 	let currentIndex = this.currentIndex();
// 	if (this.defaultSettings.multiSlide) {
// 		this.slideMultiNext(currentIndex, this.sliderArr);
// 	} else {
// 		this.slideNextOne(currentIndex, this.sliderArr);
// 	}
// 	if (this.defaultSettings.dots) {
// 		this.slideNextOne(currentIndex, this.dotsArr)
// 	}

// 	console.log(currentIndex)
// 	console.log((this.sliderArr.length - 2))

// 	console.log(document.querySelector('.slider_arrow.slider_arrow--next'))
// 	if (currentIndex === (this.sliderArr.length - 2)) {
// 		document.querySelector('.slider_arrow.slider_arrow--next').classList.add('disabled');
// 	} else {
// 		document.querySelector('.slider_arrow.slider_arrow--next').classList.remove('disabled');
// 		document.querySelector('.slider_arrow.slider_arrow--prev').classList.remove('disabled');
// 	}
// };

// Slider.prototype.slidePrev = function () {
// 	let currentIndex = this.currentIndex();

// 	if (this.defaultSettings.multiSlide) {
// 		this.slideMultiPrev(currentIndex, this.sliderArr);
// 	} else {
// 		this.slidePrevOne(currentIndex, this.sliderArr)
// 	}
// 	if (this.defaultSettings.dots) {
// 		this.slidePrevOne(currentIndex, this.dotsArr)
// 	}
// 	if (currentIndex === 1) {
// 		document.querySelector('.slider_arrow.slider_arrow--prev').classList.add('disabled');
// 	} else {
// 		document.querySelector('.slider_arrow.slider_arrow--next').classList.remove('disabled');
// 		document.querySelector('.slider_arrow.slider_arrow--prev').classList.remove('disabled');
// 	}

// };