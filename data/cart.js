export let cart = [];



/* REVIEW: baraye function e addToCart ebtada bayad befahmim k product ma to sabad kharid hast y n k age bod 
            quantity on ro b1 vahed ezafe mikonim age nbod bayad push konim  k baraye in kar ye variable be name 
            matchingItem dorost mikonim k bebinim be ezaye har loope k mizim aya item ma match hast ya n age bod
            on ro to matching item miriozim*/
export const addedToCart = function(productid){
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
            // console.log(cart);
            
}