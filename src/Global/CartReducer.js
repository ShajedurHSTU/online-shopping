

const CartReducer = (state,action) => {


    const {shoppingCart, totalPrice,qty}=state;

        let  product;
        let index;
        let updatePrice;
        let updateQty;

    switch(action.type){

        case 'ADD-TO-CART':
            const check = shoppingCart.find(prodct=>product.id===action.id);
            if(check){
                return state;
            }
            else {
                product=action.prodct;
                product[qty]=1;
                updateQty=qty+1;
                updatePrice=totalPrice+product.price;

                return{shoppingCart:[product,...shoppingCart],totalPrice: updatePrice,qty:updateQty}
            }

            default:
                return state;
            
    }
};

export default CartReducer;