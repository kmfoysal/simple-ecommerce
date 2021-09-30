import React from 'react';
import useProducts from '../../hooks/useProducts';

const Order = () => {
    const [products] = useProducts();
    return (
        <div>
            <h2>{products.length}</h2>
            <h2>This Is Order Review page</h2>
        </div>
    );
};

export default Order;