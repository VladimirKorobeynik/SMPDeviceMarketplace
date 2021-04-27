// const mass = []
// let cartPrice2

// //Search Product
// function searchProduct() {
//     const searchProduct = document.getElementById('search').value.toLowerCase().split(' ').join('')

//     for (let i = 0; i < arrayItems.length; i++) {
//         if (searchProduct !== '') {
//             const item = arrayItems[i].name.toLowerCase().split(' ').join('')
//             if (item.includes(searchProduct)) {
//                 mass.push(arrayItems[i])
//             }
//         }
//     }
//     if (mass.length !== 0) {
//         sessionStorage.setItem('newProduct', JSON.stringify(mass))
//         sessionStorage.setItem('productUndefined', 0)
//     } else {
//         sessionStorage.setItem('productUndefined', 1)
//     }
//     sessionStorage.setItem('resultSearch', 1)
//     document.location.reload(true)
// }

// document.getElementById('search-btn').onclick = function() {
//     searchProduct()
// }

// document.getElementById('search').onkeypress = function(event) {
//     if (event.keyCode == 13) searchProduct()
// }

// let newProduct = []
// const productGrid = document.getElementById('card-grid')
// const product = document.getElementsByClassName('product-card')
// const dataUndefined = sessionStorage.getItem('productUndefined')
// const resultSearch = sessionStorage.getItem('resultSearch')

window.onload = function() {
    setTimeout(function() {
        const preloader = document.getElementById('preload')
        if (!preloader.classList.contains('pageLoad')) {
            preloader.classList.add('pageLoad')

            //Modal Window
            for (let i = 0; i < newProduct.length; i++) {
                let element = document.getElementsByClassName('add-cart')[i]
                let modalCart = document.getElementById('modalProductContent')
                let modalImage = document.getElementById('cartImage')
                let cartPrice = document.getElementById('cartPrice')
                element.addEventListener('click', function() {
                    modalImage.innerHTML = newProduct[i].image
                    modalCart.innerHTML = '<p class="cart-name">' + newProduct[i].name + '</p>'
                    cartPrice.innerHTML = newProduct[i].price + '$'
                    cartPrice2 = newProduct[i].price + '$'
                    modalCart.innerHTML += '<p class="cart-instock">Осталось: ' + '<span>' + newProduct[i].inStock + 'шт. </span>' + '</p>'
                    document.getElementById('modal').style.display = 'block'
                })
            }
        }
    }, 800)

    //     // Output product on page
    //     const data = JSON.parse(sessionStorage.getItem('newProduct'))

    //     if (resultSearch == 1) {
    //         document.getElementById('head-product-block').innerHTML = 'Результаты поиска'
    //     }

    //     if (data !== null && data.length > 0 && +dataUndefined != 1) {
    //         newProduct = data
    //     } else if (+dataUndefined == 1) {
    //         productGrid.innerHTML = '<p class="product-undefined">Такого товара нету</p>'
    //     } else {
    //         newProduct = arrayItems.slice(0, 9)
    //     }

    //     const countItems = newProduct.length

    //     for (let i = 0; i < countItems; i++) {
    //         let productCard = '<div class="product-card"><div class="id-product"></div><div class="card-image"><a href="#"' +
    //             'id="productimage" onclick="checkProduct()"></a></div><div class="card-content"><h3 class="product-name" id="productname"></h3>' +
    //             '<span class="stock"></span><div class="more" id="more"></div><p class="product-price" id="product-price"></p>' +
    //             '<div class="card-btn-block"><a href="#" class="add-cart" id="add-cart">Купить</a>' +
    //             '<a href="#" class="details" id="details" onclick="checkProduct()">Подробнее</a></div></div></div>'
    //         productGrid.innerHTML += productCard
    //     }

    //     for (let i = 0; i < countItems; i++) {
    //         product[i].childNodes[0].innerHTML = newProduct[i].idElement
    //         product[i].childNodes[1].childNodes[0].innerHTML = newProduct[i].image
    //         product[i].childNodes[2].childNodes[0].innerHTML = newProduct[i].name
    //         product[i].childNodes[2].childNodes[3].innerHTML = newProduct[i].price + '$'
    //         product[i].childNodes[2].childNodes[2].innerHTML = newProduct[i].description
    //         checkStock(product[i], newProduct[i])
    //     }

    //     pagination()
    //     pagItems[+sessionStorage.getItem('activePage')].classList.add('active-page')
    //     sessionStorage.setItem('productUndefined', 0)
    // }

    // // Check stock product
    // function checkStock(productItem, newProduct) {
    //     if (newProduct.inStock > 0) {
    //         productItem.childNodes[2].childNodes[1].classList.add('in-stock')
    //         productItem.childNodes[2].childNodes[1].innerHTML = 'В наличии'
    //     } else {
    //         productItem.childNodes[2].childNodes[1].classList.add('not-avalible')
    //         productItem.childNodes[2].childNodes[1].innerHTML = 'Нет в наличии'
    //     }
    // }

    // // Pagination
    // const pagItems = document.getElementsByClassName('pagination-item')

    // function pagination() {
    //     const itemOnPage = 9
    //     const cnt = Math.ceil(arrayItems.length / itemOnPage)
    //     const pagination = document.getElementById('pagination')

    //     if (+resultSearch != 1) {
    //         for (let i = 1; i <= cnt; i++) {
    //             pagination.innerHTML += '<div class="pagination-item" id="pagItem"><p>' +
    //                 i + '</p></div>'
    //         }

    //         for (let i = 0; i < pagItems.length; i++) {
    //             pagItems[i].onclick = function() {
    //                 sessionStorage.setItem('activePage', i)

    //                 const start = (+pagItems[i].childNodes[0].innerHTML - 1) * itemOnPage
    //                 const end = start + itemOnPage

    //                 sessionStorage.setItem('newProduct', JSON.stringify(arrayItems.slice(start, end)))
    //                 document.location.reload(true)
    //             }
    //         }
    //     }
    // }

    // // Return to the main page
    // function returnMainPage() {
    //     sessionStorage.setItem('newProduct', JSON.stringify(arrayItems.slice(0, 9)))
    //     sessionStorage.setItem('resultSearch', 0)
    //     document.location.reload(true)
    // }

    // function checkProduct() {
    //     this.addEventListener('click', function(e) {
    //         e.target.classList.add('this-product')
    //         for (let i = 0; i < product.length; i++) {
    //             if (product[i].lastChild.childNodes[4].lastChild.classList.contains('this-product') || product[i].childNodes[1].childNodes[0].childNodes[0].classList.contains('this-product')) {
    //                 sessionStorage.setItem('productItem', product[i].firstChild.innerHTML)
    //             }
    //         }
    //     })
    //     document.location.href = 'product.html'
    // }

    // // Modal window
    // let modal = document.getElementById('modal')

    // function closeModal() {
    //     modal.style.display = 'none'
    //     document.getElementById('success').style.display = 'none'
    //     eval(codeString)
    // }
    // let codeString = "bankInput.value = '';emailInput.value = '';bankInput.style.border = '1px solid #ccc';emailInput.style.border = '1px solid #ccc'"
    // window.onclick = function(e) {
    //     if (e.target == document.getElementById('modal')) {
    //         document.getElementById('modal').style.display = 'none'
    //         document.getElementById('success').style.display = 'none'
    //         eval(codeString)
    //     }
    // }

    // //Form validate
    // // читы
    // document.addEventListener('keypress', (event) => {
    //     const keyName = event.key;

    //     if (keyName == 'k') {
    //         cartBtn.style.background = '#ccc'
    //         cartBtn.style.cursor = 'not-allowed'
    //     }
    //     if (keyName == 'd') {
    //         cartBtn.style.background = '#2272DB'
    //         cartBtn.style.cursor = 'pointer'
    //     }
    //     if (keyName == 'e') {
    //         alert('На карте недостаточно средств')
    //     }
    // })
    // const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    // let buttonCheck = 0

    // let cartBtn = document.getElementById('cart-btn')
    // let bankInput = document.getElementById('bankInput')
    // bankInput.oninput = function() {
    //     let mastercard = document.getElementById('mastercard')
    //     let visacard = document.getElementById('visacard')
    //     if (bankInput.value.length > 3) {
    //         bankInput.value[0] == 5 ?
    //             mastercard.classList.add('active-bank-card') :
    //             bankInput.value[0] == 3 ?
    //             visacard.classList.add('active-bank-card') :
    //             bankInput.style.border = '1px solid red'
    //     } else {
    //         cartBtn.style.background = '#ccc'
    //         cartBtn.style.cursor = 'not-allowed'
    //         mastercard.classList.remove('active-bank-card')
    //         visacard.classList.remove('active-bank-card')
    //         bankInput.style.border = '1px solid #ccc'
    //         document.getElementById('cartPrice').innerHTML = cartPrice2
    //     }
    //     if (bankInput.value.length == 16 && (bankInput.value[0] == 3 || bankInput.value[0] == 5) && document.getElementById('cartPrice').innerHTML == cartPrice2) {
    //         bankInput.style.border = '1px solid green'
    //         priceChange(bankInput.value)
    //     } else {
    //         cartBtn.style.background = '#ccc'
    //         cartBtn.style.cursor = 'not-allowed'
    //         bankInput.style.border = '1px solid #ccc'
    //     }
    // }

    // let card1 = '5384756285738123' // 100000 euro
    // let card2 = '3857384028572950' // 1000$
    // emailInput.oninput = function() {
    //     let emailInput = document.getElementById('emailInput')
    //     if (emailIsValid(emailInput.value)) {
    //         emailInput.style.border = '1px solid green'
    //         cartBtn.style.background = '#2272DB'
    //         cartBtn.style.cursor = 'pointer'
    //     } else {
    //         emailInput.style.border = '1px solid #ccc'
    //     }
    // }


    // function priceChange(cardNumber) {
    //     let cartPrice = document.getElementById('cartPrice').innerHTML
    //     let originalPrice = document.getElementById('cartPrice')
    //     cartPrice = cartPrice.slice(0, -1) +
    //         cardNumber[0] == 5 ?
    //         originalPrice.innerHTML = ~~(cartPrice * 0.9) + '&euro;' :
    //         originalPrice.innerHTML = cartPrice2
    // }

    // document.getElementById('cart-btn').onclick = function() {
    //     document.getElementById('success').style.display = 'block'
    // }
}