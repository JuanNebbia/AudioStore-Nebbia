import './CartWidget.css'
import Cart from '../../cart.png'
import { Link } from 'react-router-dom';

const CartWidget = () =>{
    return (
        <div className='cart-container'>
            <Link to={'/cart'} className='cart-anchor'>
                <img className='cart-img' src={Cart} />
            </Link>
        </div>
    );
}

export default CartWidget