import './CartWidget.css'
import Cart from '../../img/cart.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Badge from 'react-bootstrap/Badge'

const CartWidget = () =>{
    const { cartSize } = useContext(CartContext)

    return (
        <div className='cart-widget-container'>
            <button className="cart-icon-btn">
                <Link to={'/cart'} className="cart-icon-link">
                    <img className='cart-img' src={Cart} alt='cart widget' />
                </Link>
                <Badge pill bg="success">
                    {cartSize() < 10 ? cartSize() : '9+'}
                </Badge>
            </button>
        </div>
    );
}

export default CartWidget