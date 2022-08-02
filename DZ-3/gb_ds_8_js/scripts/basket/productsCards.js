'use strict';

const pathToImages = 'images';
const pathToProductsImages = `${pathToImages}/featured`;
const featuredItemsEl = document.querySelector('.featuredItems');

/**
 * Эта функция принимает один из обьектов из массива products в файле products.js.
 * @param {ProductDTO} product обьект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */
function getProductMarkup(product) {
    return `
    <div class="featuredItem">

                <div class="featuredImgWrap">
                    <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                    <div class="featuredImgDark">
                        <button data-productId="${product.id}">
                            <img src="${pathToImages}/card.svg" alt="">
                            Add to Cart
                        </button>
                    </div>
                </div>


                <div class="featuredData">
                    <div class="featuredName">${product.name}</div>
                    <div class="featuredText">${product.description}</div>
                    <div class="featuredPrice">$${product.price}</div>
                </div>
            </div>
    `
}

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла Products.js
 * @param {HTMLDivElement} featuredItemsE1 елемент с классом .featuredItems
 */
function insertProductsIntoPage(products, featuredItemsE1) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsE1.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event 
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
    addProductIntoBasket(productId);
    // console.log(productId);
}

insertProductsIntoPage(products, featuredItemsEl);

addEventListenersForAddToCartButtons();