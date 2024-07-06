// 'use strict'; 

let buttonSwitch = document.querySelectorAll('.main__slider-button-switch-item');
let playPauseButton = document.querySelector('.main__slider-button-pause');
let pauseButton = document.getElementById('pause');
let playButton = document.getElementById('play');
let isPlay = true;

let faqButtons = document.querySelectorAll('.faq__item-title');


function switchImages() {
	for (let button of buttonSwitch){
		if (button.getAttribute('active') == 'true'){
			button.setAttribute('active', 'false');
		} else if (button.getAttribute('active') == 'false') {
				button.setAttribute('active', 'true');
		}
	}
	let currentSlide = document.querySelector('.active');
	let nextSlide = document.querySelector('.hidden');

	currentSlide.classList.remove('active');

	currentSlide.classList.add('hidden');

	nextSlide.classList.remove('hidden');

	nextSlide.classList.add('active');
	
	if (isPlay) {clearInterval(sliderInteval);
	
	sliderInteval = setInterval(() => {
		switchImages();
	}, 5000);
	}
}



function pauseSwitch (){
	if (isPlay) {
		pauseButton.style.display = 'none';
		playButton.style.display = 'block';

		clearInterval(sliderInteval);
		isPlay = false;
	} else {
		pauseButton.style.display = 'block';
		playButton.style.display = 'none';

		isPlay = true;
		sliderInteval = setInterval(() => {
			switchImages();
		}, 5000);
	}
}

if (playPauseButton){
playPauseButton.addEventListener('click', pauseSwitch);
}


for (let button of buttonSwitch) {
	button.addEventListener ('click', () => {
		let targetElement = event.target;
		if (targetElement.getAttribute('active') == 'false'){
			switchImages();
		}
	});
};


let sliderInteval = setInterval(() => {
	switchImages()
}, 5000)

let faqContainers = document.querySelectorAll('.faq__item-container');
let faqContents = document.querySelectorAll('.faq__item-content');

// alert(faqContent[0].offsetWidth);
function updateContainerHeight() {
    // Проходимся по всем контейнерам faq__item-container
    faqContainers.forEach((container, index) => {
        let contentWidth = faqContents[index].offsetHeight;
        container.style.height = `${contentWidth}px`;
    });
}

window.addEventListener('load', updateContainerHeight);

// Добавляем обработчик события resize на window
window.addEventListener('resize', updateContainerHeight);

// window.addEventListener('resize', () => {
// 	faqContainer[0].style.height = `${faqContent[0].offsetWidth}px`;
// })

for (let button of faqButtons){
	button.addEventListener ('click', () =>{
		let parentElement = button.parentElement;
		if(parentElement.hasAttribute('open')){
			parentElement.removeAttribute('open');
		} else {
			parentElement.setAttribute("open", "");
		}
});
}