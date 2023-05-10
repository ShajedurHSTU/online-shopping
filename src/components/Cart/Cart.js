import React, {useContext} from 'react';
import './Cart.css'
import { CartContext} from '../../Global/CartContextProvider';

const Cart = () => {
    const data= useContext(CartContext);
    console.log(data);
    return (
        <div className='cart-container'>
            <h1>this is cart page</h1>
        </div>
    );
};

export default Cart;