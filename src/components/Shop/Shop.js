import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('../../products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='container grid grid-cols-5 gap-4 mx-auto p-12'>
            <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 xl:col-span-4 md:col-span-3 gap-6 mx-auto'>
                   {
                       products.map(product => <Product 
                        key = {product.key}
                       product={product}
                       handleAddToCart = {handleAddToCart}>

                       </Product>)
                   }
                   
            </div>
            <div className="">
                <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;