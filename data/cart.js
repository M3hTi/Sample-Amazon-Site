export let cart = JSON.parse(localStorage.getItem('cart')) || [];




/* REVIEW: baraye function e addToCart ebtada bayad befahmim k product ma to sabad kharid hast y n k age bod 
            quantity on ro b1 vahed ezafe mikonim age nbod bayad push konim  k baraye in kar ye variable be name 
            matchingItem dorost mikonim k bebinim be ezaye har loope k mizim aya item ma match hast ya n age bod
            on ro to matching item mirizim*/
 export const addedToCart = function(productId){
    let matchingItem;
            
        for (const item of cart) {
            if(item.productId === productId){
                matchingItem = item;
                break;
            }
        }
        const quantitySelector = document.querySelector(`.js-quantity-selector-${productId}`);
        // console.log(quantitySelector);
        const quantity = Number(quantitySelector.value);
        // console.log(quantity);

        if(matchingItem){
            matchingItem.quantity += quantity;
        }else{
                
                cart.push({
                    productId,
                    quantity
                });
            }
            // console.log(cart);

        saveToStorage();
            
}



// NOTE: function e removeFromCart
export const removeFromCart = function(deleteId){ 
    // cart = cart.filter(item => item.productId !== deleteId ?  cart.push(item) : cart.pop() );
    let newCart = [];
    for (const item of cart) {
        if(item.productId !== deleteId ){
            newCart.push(item);
        }
    }
    cart = newCart;

    saveToStorage();

    
}



const saveToStorage = function(){
     localStorage.setItem('cart', JSON.stringify(cart));
}


