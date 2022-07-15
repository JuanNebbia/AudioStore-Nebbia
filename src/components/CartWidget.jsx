import './CartWidget.css'
import { IconContext } from 'react-icons/lib';
import { TiShoppingCart } from 'react-icons/ti'

const CartWidget = () =>{
    return (
        <IconContext.Provider value={{color:'#be2a8d', size:'2rem'}}>
            <a href='#' className='cart'>
                <TiShoppingCart  />
            </a>
        </IconContext.Provider>
    );
}

export default CartWidget