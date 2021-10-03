// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';

const Product = (props) => {
// console.log(props.product);

const {img, name, price, seller, star, stock, key} = props.product;

// const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className='bg-white text-center shadow-xl rounded-lg p-6'>
            <div className=''>
                <img src={img} alt="product-img" className='mx-auto'/>
            </div>
            <div>
                <h4 className='text-xl font-semibold mb-3'>{name.slice(0, 40)}</h4>
                <p className='mb-2'>Seller : {seller}</p>
                <h5 className='text-lg font-medium'>Price : ${price}</h5>
                <p className='text-green-600 mb-3'><small>only {stock} left in stock - order soon</small></p>
                <button 
                className='bg-purple-500 hover:bg-purple-700 text-white rounded-md px-10 py-2'
                onClick = {() => props.handleAddToCart(props.product)}>

                    add to cart
                    </button>
            </div>
        </div>
    );
};

export default Product;