// 'use strict';


let sliderLine = document.querySelector('.product__slider-line');;
const buttonPrev = document.querySelector('.product__slider-prev');
const buttonNext = document.querySelector('.product__slider-next');
const dotsContainer = document.querySelector('.product__slider-dots');
let sliderDots = document.querySelectorAll('.product__slider-dots-item');



let colorCheck = document.querySelector('.product');
if (colorCheck.hasAttribute('black')){
	document.body.style.backgroundColor = "#111113"
}




let sliderCount = 0;
let sliderWidth;




const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');



let product;
let category;

for (let categoryArray of categories) {
	for (let productObject of categoryArray) {
	if (productObject.id == productId) {
		product = productObject;
		category = categoryArray;
		break;
	}
	}
}

console.log(category);

console.log(product);



for (let i = 0; i < product.images.length; i++){	
	let dot = document.createElement('div');
	dot.classList.add('product__slider-dots-item');
	if (i === 0){
		dot.setAttribute('active', 'true');
	}
	dotsContainer.appendChild(dot);
	sliderDots = document.querySelectorAll('.product__slider-dots-item');
};


product.images.forEach(image => {
	let slide = document.createElement('div');
	slide.classList.add('product__slider-slide');
	let img = document.createElement('img');
	img.setAttribute('src', `${image}`);
	slide.appendChild(img);
	sliderLine.appendChild(slide);
});

if (category == bags){
	let sizeBlock = document.querySelector('.product__size');
	sizeBlock.remove();
} else{
let sizeContainer = document.querySelector('.product__size-buttons');
product.sizes.forEach(button => {
	let sizeButton = document.createElement('button');
	sizeButton.textContent = `${button}`;
	sizeButton.classList.add('product__size-buttons-item');
	if (button == product.sizes[0]){
		sizeButton.setAttribute('active', 'true');
	} else {
		sizeButton.setAttribute('active', 'false')
	}
	sizeContainer.appendChild(sizeButton);
});
}
let sizeButtons = document.querySelectorAll('.product__size-buttons-item');

sizeButtons.forEach(item => {
	item.addEventListener('click', () => {
		sizeButtons.forEach(item => item.setAttribute('active', 'false'));
		item.setAttribute('active', 'true');
	})
});	





window.addEventListener('resize', showSlide);

let sliderItems = document.querySelectorAll('.product__slider-slide');

function showSlide() {

	sliderWidth = document.querySelector('.product__slider-container').offsetWidth;

	rollSlider();
}
showSlide();

buttonNext.addEventListener('click', nextSlide);
buttonPrev.addEventListener('click', prevSlide);

function nextSlide() {
	sliderLine.toggleAttribute("duration");
	sliderCount++;
	if (sliderCount >=sliderItems.length) sliderCount = 0;
	rollSlider();
	thisSlide(sliderCount);
	setTimeout(() => {sliderLine.toggleAttribute("duration");}, 350);
}

function prevSlide() {
	sliderLine.toggleAttribute("duration");
	sliderCount--;
	if (sliderCount < 0) sliderCount = sliderItems.length - 1;
	rollSlider();
	thisSlide(sliderCount);
	setTimeout(() => {sliderLine.toggleAttribute("duration");}, 350)
}

function rollSlider() {
	sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}


function thisSlide(index) {
	sliderDots.forEach(item => item.setAttribute('active', 'false'));
	sliderDots[index].setAttribute('active', 'true');
}


sliderDots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		sliderLine.toggleAttribute("duration");
		sliderCount = index;
		rollSlider();
		thisSlide(sliderCount);
		setTimeout(() => {sliderLine.toggleAttribute("duration");}, 350);
	})
});

function duration (){
	setTimeout(() => {sliderLine.toggleAttribute("duration");}, 350)
};






const productTitle = document.querySelector('.product__title');
productTitle.textContent = `${product.name}`;

const productPrice = document.querySelector('.product__price');
productPrice.innerHTML = `<span>${product.price} USD</span>`;

const productDescr = document.querySelector('.product__descr');
productDescr.innerHTML = `${product.description}`;






const inputCount = document.querySelector('.product__count-input');
const minusInputCount = document.querySelector('.product__count-minus');
const plusInputCount = document.querySelector('.product__count-plus');

plusInputCount.addEventListener('click', () => {
	if ( inputCount.value < 20){
	let currentValue = parseInt(inputCount.value);
	inputCount.value = currentValue + 1;
	}
});


minusInputCount.addEventListener('click', () => {
	if ( inputCount.value > 1){
	let currentValue = parseInt(inputCount.value);
	inputCount.value = currentValue - 1;
	}
});



const gridButton = document.querySelector('.product__grid');

let popup = function(content) {
	let modalsContainer = document.querySelector('.modals');
	modalsContainer.innerHTML = `${content}`;
	
	let modalSizeGrid = document.querySelector('.modal-sizecare');
	
	let black = document.querySelector('.modal-black');
	let closeSizeCare = document.querySelector('.modal-sizecare-icon');

	let modal = document.querySelector('.modal-container')

	setTimeout(() => {
		modalSizeGrid.classList.add('open');
	}, 100);
	document.body.style.overflow = 'hidden';

	function closePopup (){
		black.style.opacity = '0';
		modalSizeGrid.classList.remove('open');
		modalSizeGrid.classList.add('close');
		setTimeout(() => {
		modalsContainer.innerHTML = ``;
		document.body.style.overflow = 'auto';
	}, 500);
	}
	
	setTimeout( () => {

	modal.addEventListener('click',function(event) {
		if (event.target.classList.contains('modal-container')) {
			closePopup();
		}
	})
	}, 350);


	closeSizeCare.addEventListener('click', () => {
	closePopup();
	})
};


gridButton.addEventListener('click', () => {
	if (category == bags){
		popup(product.sizeGrid)
	} else {popup(category[0].sizeGrid)}
});

let careButton = document.querySelector('.product__care');
careButton.addEventListener('click', () => {
	if (category == bags){
		popup(product.care)
	} else {popup(category[0].sizeGrid)}
});


let addToCartButton = document.querySelector('.product__add-to-cart');

addToCartButton.addEventListener('click', () => {

		let productSizeButtons = document.querySelectorAll('.product__size-buttons-item');
		// console.log(typeof(productSizeButtons));
		let active;
		productSizeButtons.forEach((item, index) => {
			if(item.getAttribute("active") == "true"){
				active = index;
			}
		});
		console.log(active);
		console.log(inputCount.value);
		console.log(product.id);
		console.log(product.price);
		addProduct(product.id, inputCount.value, active, product.price);
		openCart();


})


let recLine = document.querySelector('.rec__slider-line');


category.forEach(item => {
	if(!(item === category[0])){
		if(!(item.id == productId)){
	let recSlide = document.createElement('a');
	recSlide.classList.add('rec__slider-slide');
	recSlide.setAttribute('href', `/product.html?id=${item.id}`);

	recSlide.innerHTML = `
			<div class="rec__slider-slide-img"><img src="${item.images[0]}" alt=""></div>
							<div class="rec__slider-slide-price"><span></span> ${item.price} USD</div>
							<div class="rec__slider-slide-name">${item.name}</div>`;
		
		recLine.appendChild(recSlide);
		}
}})


let recLeftButton = document.querySelector('.rec__button-left-arrow')
let recRightButton = document.querySelector('.rec__button-right-arrow')

let recSlider = document.querySelector('.rec__slider');

const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
        if (entry.target === recSlider) {
			recLine.style.transform = `translateX(0px)`;
			recRightButton.style.visibility = "visible";
			recLeftButton.style.visibility = "hidden";
			transformX = 0;
		}
	}
});

resizeObserver.observe(recSlider);


let transformX = 0;
recLeftButton.style.visibility = "hidden";
recRightButton.addEventListener('click', () => {
	let recSliderLength = 246 * document.querySelectorAll('.rec__slider-slide').length - document.querySelector('.rec__slider').offsetWidth;

	transformX = transformX - 246;

	recLine.style.transform = `translateX(${transformX}px)`;

	if(transformX == -recSliderLength){
		recRightButton.style.visibility = "hidden";
	}
	if (transformX < 0){
		recLeftButton.style.visibility = "visible";
	}
})

recLeftButton.addEventListener('click', () => {
	if (transformX < 0){
	transformX += 246;
	// console.log(transformX);
	recLine.style.transform = `translateX(${transformX}px)`;
	if (transformX == 0) recLeftButton.style.visibility = "hidden";
	}
	if(transformX > -recSliderLength){
		recRightButton.style.visibility = "visible";
	}
})