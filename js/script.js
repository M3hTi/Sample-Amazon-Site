import{cart} from '/data/cart.js'

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



// NOTE: fetch data
let productList = []
fetch('/data/products.json')
    .then((Response) => {return Response.json()})
    .then((result) => {
        // console.log(result);
        productList = result;
        // console.log(productList);
        // REVIEW: baraye render(neshon dadane)krdne productlist
        showProductList();
    })
    .catch((error) => {
        console.log(error);
     })

const showProductList = function(){
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
            <select name="" id="">
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

    addedProduct();
}



// FIXME
const addedProduct = function(){
    let addButtonElement = document.querySelectorAll('.js-add-to-cart');
    console.log(addButtonElement);


    for (const addButton of addButtonElement) {
        addButton.onclick = function(){
            // console.log("added product");
            const productid = addButton.dataset.productId;
            // console.log(produtName);


            
            addedToCart(productid);
            

        //  NOTE: update cart quantity in top right corner
        updateCartQuantity();
          
    }
}



const addedToCart = function(productid){
    let matchingItem;

           for (const item of cart) {
                if(item.productid === productid){
                    matchingItem = item;
                    break;
                }
           }
           if(matchingItem){
                matchingItem.quantity++;
           }else{
               const product = {
                   productid,
                   quantity: 1
               }
               cart.push(product);
           }
           console.log(cart);

}

// NOTE: function e update Quantity
const updateCartQuantity = function(){
    let cartQantity = 0
    cart.forEach((item) => {
         cartQantity += item.quantity
    })
    document.querySelector('.js-cart-quantity').innerHTML = cartQantity;
 }
}




