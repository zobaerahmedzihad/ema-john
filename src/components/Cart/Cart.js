
import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    // const total = cart.reduce((total , prd) => total + prd.price ,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }
    let shipping = 0;
    if(total > 300){
        shipping = 0;
    }
    else if(total > 150){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 11.99;
    }
    const formetNumber = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    return (
        <div>
            <h2>Order Summery.</h2>
            <h5>Items Ordered : {cart.length} </h5>
            <p>Product Price : {formetNumber(total)}</p>
            <p><small>Shipping Cost : {shipping}</small></p>
            <p><small>Tax + VAT : {tax}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;