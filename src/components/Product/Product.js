// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
// console.log(props.product);

const {img, name, price, seller, star, stock, key} = props.product;

// const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='bg-white'>
            <div className='img-box'>
                <img src={img} alt="product-img" />
            </div>
            <div>
                <h4>{name.slice(0, 40)}</h4>
                <p>Seller : {seller}</p>
                <h5>Price : ${price}</h5>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button 
                className='regular-btn'
                onClick = {() => props.handleAddToCart(props.product)}>

                    add to cart
                    </button>
            </div>
        </div>
    );
};

export default Product;