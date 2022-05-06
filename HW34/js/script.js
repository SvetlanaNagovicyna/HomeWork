// window.addEventListener('DOMContentLoaded', () => {

class Slider {
	constructor(nameSlider, ...param) {
		this.nameSlider = document.querySelector(nameSlider);
		this._indexSlide = 1;
		this.$slides = this.nameSlider.childNodes[1].querySelectorAll('div');
		this.param = param;
		this.currentPosition = this.nameSlider.childNodes[1];

		this.changeElem = (index) => {
			if (index > this.$slides.length) {
				this._indexSlide = 1
			}
			if (index < 1) {
				this._indexSlide = this.$slides.length
			}
			for (let i = 0; i < this.$slides.length; i++) {
				this.$slides[i].classList.remove('active')
			}
			this.$slides[this._indexSlide - 1].classList.add('active');

			this.param.forEach((el) => {
				if (el === 'fade') {
					this.$slides.forEach((e) => {
						e.animate([{
								opacity: .4
							},
							{
								opacity: 1
							}
						], {
							duration: 1500
						})
					})
				}

			});
		};

	}


	showSlide() {

		this.nameSlider.addEventListener('click', (btn) => {
			if (btn.target.closest('.next')) {
				this.changeElem(this._indexSlide += 1)
			}
			if (btn.target.closest('.prev')) {
				this.changeElem(this._indexSlide -= 1)
			}
		})


	}

}


const slider = new Slider('.slider', 'fade');
slider.showSlide()
console.log(slider)