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
        // console.log(products);
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
        <div class="product-price">$${product.priceCents / 100}</div>
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
        <button class="add-to-cart-button">Add to Cart</button>        
    </div>`
    htmlElement += html;
    }
    // console.log(htmlElement);
    document.querySelector('.js-products-row').innerHTML = htmlElement;
}
