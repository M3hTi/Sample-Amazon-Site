export let cart = [{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2
},{
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1
}];



/* REVIEW: baraye function e addToCart ebtada bayad befahmim k product ma to sabad kharid hast y n k age bod 
            quantity on ro b1 vahed ezafe mikonim age nbod bayad push konim  k baraye in kar ye variable be name 
            matchingItem dorost mikonim k bebinim be ezaye har loope k mizim aya item ma match hast ya n age bod
            on ro to matching item miriozim*/
 export const addedToCart = function(productId){
    let matchingItem;
            
        for (const item of cart) {
            if(item.productid === productId){
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
            
}