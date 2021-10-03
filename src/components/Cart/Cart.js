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
        <div className=''>

            <h2 className='text-center text-2xl font-medium mb-4'>Order Summary</h2>
            
            <table class="table-fixed border-collapse border border-green-800 w-full mx-auto">
              <tbody>
                <tr>
                    <td class="border border-green-600 w-2/3 px-2">Items Order</td>
                    <td class="border border-green-600 px-2">{props.cart.length}</td>
                </tr>
                <tr>
                    <td class="border border-green-600 px-2">Items</td>
                    <td class="border border-green-600 px-2">{total}</td>
                </tr>
                <tr>
                    <td class="border border-green-600 px-2">Shipping & Handling</td>
                    <td class="border border-green-600 px-2"></td>
                </tr>
                <tr>
                    <td class="border border-green-600 px-2">Total before tax</td>
                    <td class="border border-green-600 px-2"></td>
                </tr>
                <tr>
                    <td class="border border-green-600 px-2">Estimated Tax</td>
                    <td class="border border-green-600 px-2"></td>
                </tr>
                <tr>
                    <td class="border border-green-600 px-2">Order Total</td>
                    <td class="border border-green-600 px-2">{total}</td>
                </tr>
              </tbody>
           </table>
            
        </div>
    );
};

export default Cart;