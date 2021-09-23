const slideContainer = document.querySelector('.slider-container')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const slidesLength = rightSlide.querySelectorAll('div').length


let activeSlide = 0

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`


upButton.addEventListener('click', () => SlideChange('up'))
downButton.addEventListener('click',() => SlideChange('down'))

function SlideChange(direction) {
	const slideHeight = slideContainer.clientHeight
	if(direction === 'up') {
			activeSlide++

			if(activeSlide > slidesLength - 1){
				activeSlide = 0
		}
	} else if(direction === 'down') {
			activeSlide--
	 if(activeSlide < 0) {
		activeSlide = slidesLength - 1
		}
	}

	rightSlide.style.transform = `translateY(-${activeSlide * slideHeight}px)`
  leftSlide.style.transform = `translateY(${activeSlide * slideHeight}px)`
}
