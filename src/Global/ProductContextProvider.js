import React from 'react';
import {createContext, useState} from 'react';
import bra from '../assets/images/bra.jpg';
import cap from '../assets/images/cap.jpg';
import genji from '../assets/images/genji-2.jpg';
import handWatch from '../assets/images/hand watch.jpg';
import handGloves from '../assets/images/hand-gloves.jpg';
import headPhone from '../assets/images/headphone.jpg';
import ipad from '../assets/images/ipad.jpg';
import iphone from '../assets/images/iphone-1.jpg';
import jglGo from '../assets/images/jbl-go.jpg';
import jbl  from '../assets/images/jbl.jpg';
import jeans from '../assets/images/jeans.jpg';
import neklace from '../assets/images/neckless.jpg';
import panties from '../assets/images/panties.jpg';
import perfume from '../assets/images/perfume.jpg';
import pinkJeans from '../assets/images/pink-jeans-1.jpg';
import shoes from '../assets/images/shoes.jpg';
import sunglass from '../assets/images/sunglass.jpg';
import tshirt from '../assets/images/tshirt.jpg';
import wallet from '../assets/images/wallet.jpg';


export const ProductContext=createContext();

const ProductContextProvider = (props) => {

    const [products]=useState([
        {id:1 ,name:'bra', price:12 ,image:bra , status:'hot'},
        {id:2 ,name:'cap', price:30 ,image: cap, status:'new'},
        {id:3 ,name:'genji', price:10 ,image: genji, status:'hot'},
        {id:4 ,name:'handWatch', price:200 ,image:handWatch , status:'new'},
        {id:5 ,name:'handGloves', price: 15,image: handGloves, status:'hot'},
        {id:6 ,name:'headPhone', price:30 ,image:headPhone , status:'new'},
        {id:7 ,name:'ipad', price:300 ,image:ipad , status:'hot'},
        {id:8 ,name:'iphone', price:400 ,image: iphone, status:'new'},
        {id:9 ,name:'jglGo ', price:30 ,image: jglGo , status:'hot'},
        {id:10 ,name:'jbl ', price:28 ,image: jbl , status:'new'},
        {id:11 ,name:'jeans', price:11 ,image:jeans , status:'hot'},
        {id:12 ,name:'neklace', price:450 ,image: neklace, status:'new'},
        {id:13 ,name:'panties', price: 10,image:panties , status:'hot'},
        {id:14 ,name:'perfume', price:25 ,image:perfume , status:'new'},
        {id:15 ,name:'pinkJeans', price:12 ,image:pinkJeans , status:'hot'},
        {id:16 ,name:'shoes', price:22 ,image: shoes, status:'new'},
        {id:17 ,name:'sunglass', price:10 ,image: sunglass, status:'hot'},
        {id:18 ,name:'tshirt', price:14 ,image: tshirt, status:'new'},
        {id:19 ,name:'wallet', price:20 ,image:wallet , status:'hot'},
    ])

    return (
       <ProductContext.Provider value={{products: [...products]}}>
        {props.children}
        
       </ProductContext.Provider>
    );
};

export default ProductContextProvider;