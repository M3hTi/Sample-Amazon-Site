import { cart,removeFromCart } from "/data/cart.js";
import { productList } from "/data/products.js";
import  dayjs  from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { deliveryOptions } from "../data/deliveryoptions.js";




const showCartItem = function(){
    let html = '';
    for (const cartItem of cart) {
        const productId = cartItem.productId;
        /* NOTE: dar marhale bad to product list loop miznim ta ba
            estefade az variable productId  k value an cartItem.productId
            mibashad be image v name v price on product dastresi dashte
            bashim
        */
        const matchingProduct = productList.find(product =>  product.id === productId);
        let htmlElement = `<div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
        <div class="cart-item-detail-row">
            <div class="cart-item-detail">
                <div class="image-details">
                    <div class="image">
                        <img src="${matchingProduct.image}" alt="">
                    </div>
                    <div class="details">
                        <div class="product-name">${matchingProduct.name}</div>
                        <div class="product-price">$${(matchingProduct.priceCents / 100).toFixed(2)}</div>
                        <div class="product-quantity">
                            quantity: 
                            <span class="js-quantity-label">${cartItem.quantity}</span>
                            <span class="js-update-quantity-link link-primary" data-update-id="${matchingProduct.id} update.quantity">Update</span>
                            <input class="quantity-input editing-quantity">
                            <span class="save-quantity-link link-primary editing-quantity">save</span>
                            <span class="js-delete-quantity-link link-primary" data-delete-id="${matchingProduct.id}">Delete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-options">
                <div class="delivery-option-title">Choose a Delivary option:</div>
               ${deliveryOptionsHtml(matchingProduct)}
            </div>
        </div>
    </div>`
    html += htmlElement;
    }
    console.log(html);
    document.querySelector('.js-cart-summary').innerHTML = html
}
// NOTE: call krdne function e showCartItem()
showCartItem();



// FIXME: variable container ro mige k null mishe!!!
// NOTE: baraye update krdne mahsol az sabade kharidemon
const updateButtons = document.querySelectorAll('.js-update-quantity-link');
console.log(updateButtons);

for (const updateButton of updateButtons) {
    updateButton.onclick = function(){
        const updateId = updateButton.dataset.updateId;
        console.log(updateId);

        const container = document.querySelector(`.js-cart-item-container-${updateId}`);
        console.log(container);
        // container.classList.add('editing-quantity');
        // container.classList.add('update-quantity');
    }

}









// NOTE: baraye remove krdne mahsol az sabade kharidemon
const deleteButtons = document.querySelectorAll('.js-delete-quantity-link');
// console.log(deleteButtons);
for (const deleteButton of deleteButtons) {
    deleteButton.onclick = function(){
        const deleteId = deleteButton.dataset.deleteId;
        console.log(deleteId);
        removeFromCart(deleteId);


        const removeCartItemContainer = document.querySelector(`.js-cart-item-container-${deleteId}`);
        console.log(removeCartItemContainer);
        removeCartItemContainer.remove();

        totalProductsInCart();

    }
}


const totalProductsInCart = function(){
    let total = 0;
    for (const cartItem of cart) {
        total += cartItem.quantity;
    }
    document.querySelector('.js-total-products').innerHTML = `${total} items`;
}
totalProductsInCart();


const deliveryOption = function(){
    let now = dayjs();
    console.log(now);
    let deliveryDate = now.add(7, 'days').format('dddd, MMMM D');
    console.log(deliveryDate);
}
deliveryOption();


function deliveryOptionsHtml(matchingProduct){
    let htmlElement = '';
    for (const deliveryOption of deliveryOptions) {
        let now = dayjs();
        let deliveryDate = now.add(deliveryOption.deliveryDays, 'days').format('dddd, MMMM D');
        let priceString = deliveryOption.priceCents === 0 ? 'FREE Shipping' : `$${(deliveryOption.priceCents / 100).toFixed(2)} - Shipping`;
        let html = `
        <div class="delivery-option">
            <input type="radio" name="delivery-${matchingProduct.id}">
            <div>
                <div class="delivery-option-date">${deliveryDate}</div>
                <div class="delivery-option-price">${priceString}</div>
            </div>
        </div>`
        htmlElement += html;
    }
    return htmlElement;
}