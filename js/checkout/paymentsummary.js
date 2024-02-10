import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { deliveryOptions, getDeliveryOption} from "../../data/deliveryoptions.js";




export const renderPaymentSummary = function(){
    // console.log("Paymment");
    let productPriceCents = 0;
    let shippingPriceCents = 0;
    for (const cartItem of cart) {
        const product = getProduct(cartItem.productId);
        productPriceCents += product.priceCents * cartItem.quantity;

        const deliveryOption = getDeliveryOption(cartItem.deliveryOptionsId);
        shippingPriceCents += deliveryOption.priceCents;
    }
    // console.log(productPriceCents);
    // console.log(shippingPriceCents);
    const totalBefoteTax = productPriceCents + shippingPriceCents;
    // console.log(totalBefoteTax);
    const tax = totalBefoteTax * 0.1;
    const totalAfterTax = totalBefoteTax + tax;
    
    const htmlElement = `  <div class="js-payment-info">
    <div class="payment-summary-title">Order-summary</div>
    <div class="payment-summary-grid">
        <span>Item(3):</span>
        <span>$${(productPriceCents / 100).toFixed(2)}</span>
    </div>
    <div class="payment-summary-grid">
        <span>Shipping &amp; handling:</span>
        <span>$${(shippingPriceCents / 100).toFixed(2)}</span>
    </div>
    <div class="payment-summary-grid">
        <span>Total before tax:</span>
        <span class="total">$${(totalBefoteTax / 100).toFixed(2)}</span>
    </div>
    <div class="payment-summary-grid">
        <span>Estimated tax(10%):</span>
        <span>$${(tax / 100).toFixed(2)}</span>
    </div>
    <div class="payment-summary-grid total-row">
        <span>Order total:</span>
        <span>$${(totalAfterTax / 100).toFixed(2)}</span>
    </div>
</div>
<div class="button-place-order">
    <button class="js-place-order-button place-order-button">Place your order</button>
</div>`

document.querySelector('.js-payment-summary').innerHTML = htmlElement;
}


// renderPaymentSummary();