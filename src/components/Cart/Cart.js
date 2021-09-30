import React from 'react';
import './Cart';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let item = 0;
    for (const product of cart) {
        total = total + product.price;
        item = product.price;
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Order : {props.cart.length}</h4>
            <p>Items : {total}</p>
            <p>Shipping & Handling :</p>
            <p>Total before tax : </p>
            <p>Estimated Tax : </p>
            <h2>Order Total : {total}</h2>
        </div>
    );
};

export default Cart;