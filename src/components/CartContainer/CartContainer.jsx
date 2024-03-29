import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import Cart from '../Cart/Cart'

const CartContainer = () => {
  const cart= useContext(CartContext)


  return (
    <div>
      <Cart items={cart} />
    </div>
  )
}

export default CartContainer