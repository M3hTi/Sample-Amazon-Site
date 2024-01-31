import{cart, addedToCart} from '/data/cart.js'
import {productList} from '/data/products.js';

let allElement = document.querySelector('.js-all-link');
let subAllElement = document.querySelector('.js-sub-all');
let closeElement = document.querySelector('.js-close');
// console.log(allElement);


allElement.onclick = function(e){
    e.preventDefault();
    subAllElement.classList.remove('none');
}

closeElement.onclick = function(e){
    e.preventDefault();
    subAllElement.classList.add('none');
}

// NOTE: baraye menu hamburger baraye size mobile
let hamBurgerElement = document.querySelector('.js-hamburger-menu');
let dropDownElement = document.querySelector('.js-ham-menu');


hamBurgerElement.onclick = function(e){
    e.preventDefault();

    dropDownElement.classList.toggle('none');
   
}
console.log(productList);


/* BUG: ostad to khate 46 chejor mitonm producutList ro export konm?! vaghti k  file product.js
to file data, product.json bashe nmizare qable productList export benevism
*/

// NOTE: fetch data
// let productList = []
// fetch('/data/products.json')
//     .then((Response) => {
//         if(!Response.ok){
//             throw new Error("failed the fetch resources 💀");
//         }
//         return Response.json();
//     })
//     .then((result) => {
//         // console.log(result);
//         productList = result;
//         // console.log(productList);
//         // REVIEW: baraye render(neshon dadane)krdne productlist
//         showProductList(productList);
//         addedProduct();
//     })
//     .catch((error) => {
//         console.error(error);
//      })

const showProductList = function(productList){
    let htmlElement = ``;
    for (const product of productList) {
        let html = `<div class="product-container">
        <div class="product-image-container">
            <img src="${product.image}" alt="">
        </div>
        <div class="product-name">
            <p>${product.name}</p>
        </div>
        <div class="product-rating-container">
            <img src="images/rating-${product.rating.stars}.png" alt="" class="product-rating-stars">
            <p class="product-rating-count">${product.rating.count}</p>
        </div>
        <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>
        <div class="product-quantity">
            <select name="" id="" class="js-quantity-selector-${product.id}">
                <option  selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
            </select>
        </div>
        <div class="product-space"></div>
        <div class="added-to-cart-message js-added-to-cart">
                    <img src="images/checkmark.png" alt="" class="none">
        </div>
        <button class="add-to-cart-button js-add-to-cart" data-product-id="${product.id}">Add to Cart</button>        
    </div>`
    htmlElement += html;
    }
    // console.log(htmlElement);
    document.querySelector('.js-products-row').innerHTML = htmlElement;
}
// NOTE: call krdne showProductList function
showProductList(productList);






const addedProduct = function(){
    let addButtonElement = document.querySelectorAll('.js-add-to-cart');
    console.log(addButtonElement);


    for (const addButton of addButtonElement) {
        addButton.onclick = function(){
            // console.log("added product");

            // NOTE: in 2 ravesh paynin mese hm mibashand az nazar karkard
            // const productId = addButton.dataset.productId;
            // console.log(produtName);
            const {productId} = addButton.dataset;
            // console.log(productId);

            addedToCart(productId);
            

            //  NOTE: update cart quantity in top right corner
            updateCartQuantity();
          
        }   
    }
}
// NOTE: call krdne addedProduct function
addedProduct();



 


// NOTE: function e update Quantity
const updateCartQuantity = function(){
    let cartQantity = 0
    cart.forEach((item) => {
         cartQantity += item.quantity
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQantity;
 }

 // NOTE: call krdne updateCartQuantity function
updateCartQuantity();




//  NOTE: baraye search krdn
let searchElement = document.querySelector('.js-search');
let searchButton = document.querySelector('.js-search-button')

searchButton.onclick = function(e){
    e.preventDefault();
    let searchValue = searchElement.value;
    console.log(searchValue);
    let searchResult = productList.filter((product) => {
        return product.name.includes(searchValue);
    })
    // console.log(searchResult);
    showProductList(searchResult);  
    addedProduct(); 
    updateCartQuantity();
}



