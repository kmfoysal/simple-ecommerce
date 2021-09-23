import React from 'react';
import './Product.css';

const Product = (props) => {
console.log(props.product);

const {img, name, price, seller, star, stock, key} = props.product
    return (
        <div className='display-products'>
            <div className='img-box'>
                <img src={img} alt="product-img" />
            </div>
            <div>
                <h4>{name}</h4>
                <p>Seller : {seller}</p>
                <h5>Price : ${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button className='regular-btn'>add to cart</button>
            </div>
        </div>
    );
};

export default Product;