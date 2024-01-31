import { cart } from "/data/cart.js";
import { productList } from "/data/products.js";



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
        let htmlElement = `<div class="cart-item-container">
        <div class="delivery-date">
            Delivery date: 
            <span class="js-delivery-date">Monday, february 5</span>
        </div>
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
                            <span class="js-update-quantity-link link-primary">Update</span>
                            <span class="js-delete-quantity-link link-primary">Delete</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery-options">
                <div class="delivery-option-title">Choose a Delivary option:</div>
                <div class="delivery-option">
                    <input type="radio" name="delivery">
                    <div>
                        <div class="delivery-option-date">Monday,February 5</div>
                        <div class="delivery-option-price">FREE Shipping</div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" name="delivery">
                    <div>
                        <div class="delivery-option-date">Tuesday,january 30</div>
                        <div class="delivery-option-price">$4.99 - Shipping</div>
                    </div>
                </div>
                <div class="delivery-option">
                    <input type="radio" name="delivery">
                    <div>
                        <div class="delivery-option-date">Friday, January 26</div>
                        <div class="delivery-option-price">$9.99 - Shipping</div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    html += htmlElement;
    }
    console.log(html);
    document.querySelector('.js-cart-summary').innerHTML = html
}
showCartItem();