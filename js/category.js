'use strict'

let categoryContainer = document.querySelector('.category__catalog-content');

// fetch(/categoryData.json)
// 	.then(response => response.json())
// 	.then(data => {
// 	const bags = data.bags; 
// 	console.log(bags);
// 	})
// 	.catch(error => console.error('Error:', error));

// console.log(categoryContainer);




const urlParams = new URLSearchParams(window.location.search);
console.log(urlParams);
const categoryId = urlParams.get('id');


let category;
for (let item of categories){
	if(item[0].id === categoryId ){
		category = item;
	}
};


if(category === tshirts){
	category[0].id = "t-shirts";
}



let categoryTitle = document.querySelector('.category__title');
categoryTitle.textContent = `${category[0].id}`;


	
		category.forEach(product => {
			if(!(product === category[0])){
			let item = document.createElement('a');
			item.classList.add('category__item');
			item.setAttribute('href', `product.html?id=${product.id}`);

			item.innerHTML = `
					<div class="category__item-content">
						<div class="category__item-content-black"></div>
						<img src="${product.images[0]}" alt="" class="category__item-content-img">
						<div class="category__item-content-price">
							<div class="price"><span>${product.price} USD</span></div>
						</div>
						<div class="category__item-content-button">
							<span>read more</span> <div class="category__item-content-button-arrow"><svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox=""><path d="M12 3.7v-.1-.1-.1c0-.1-.1-.1-.1-.2l-3-3C8.7 0 8.3 0 8.1.1s-.1.6 0 .8L10.3 3H.5c-.3 0-.5.2-.5.5s.2.5.5.5h9.8L8.1 6.1c-.1.2-.1.6 0 .8.2.1.6.1.8 0l3-3c0-.1 0-.1.1-.2z"></path></svg></div>
						</div>
					</div>
					<div class="category__item-name">
						<span>${product.name}</span>		
					</div>`;
				
				categoryContainer.appendChild(item);
		}})




