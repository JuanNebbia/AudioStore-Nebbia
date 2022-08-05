import './CartWidget.css'
import Cart from '../../img/cart.png'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = () =>{
    const {cartSize} = useContext(CartContext)
    
    return (
        <div className='cart-widget-container'>
            <div className="cart-icon-container">
                <Link to={'/cart'} className="cart-icon-link">
                    <img className='cart-img' src={Cart} />
                </Link>
            </div>
            <p className='item-count'>{cartSize}</p>
        </div>
    );
}

export default CartWidget