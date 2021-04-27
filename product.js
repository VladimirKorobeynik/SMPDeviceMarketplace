let itemName = document.getElementById('item-name');
let stock = document.getElementById('stock-product');

//Loading data product onto a page
window.onload = function() {
	setTimeout(function() {
		let preloader = document.getElementById('preload');
		if (!preloader.classList.contains('pageLoad')) {
			preloader.classList.add('pageLoad');
		}
	}, 800);
	let productItem = sessionStorage.getItem('productItem');
	let productImage = document.getElementById('image-item');
	let productPrice = document.getElementById('price');
	let productDescr = document.getElementById('description');

	for (let i = 0; i < arrayItems.length; i++) {
		if (arrayItems[i].idElement == productItem) {
			itemName.innerHTML = arrayItems[i].name;
			productImage.innerHTML = arrayItems[i].image;
			productPrice.innerHTML += arrayItems[i].price + '$'
			productDescr.innerHTML += arrayItems[i].fullDescription;
			if (arrayItems[i].inStock > 0) {
				stock.classList.add('in-stock');
				stock.innerHTML = 'В наличии';
			} else {
				stock.classList.add('not-avalible');
				stock.innerHTML = 'Нет в наличии';
			}
		}
	}
}