import React from 'react';
import Logo from '../../logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className ='header'>
            <img src={Logo} alt="logo" className='mx-auto'/>
            <nav>             
                <a href="/shop">Shop</a>
                <a href="/order">Order Review</a>
                <a href="/inventory">Manage Inventory</a>          
            </nav>
        </div>
    );
};

export default Header;