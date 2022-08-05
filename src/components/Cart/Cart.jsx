import React, { useContext, useEffect } from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext)



  return (
    <div className="cart-container">
      <h2>Carrito</h2>
      {cart.length > 0 ?
      <div> 
        <table className="table table-dark table-striped align-middle">
          <thead>
            <tr>
              <th scope='col'>Item</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Subtotal</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item)=>
                <tr key={item.id}>
                  <td><span className='item-title'>{item.title}</span> de {item.artist}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td><button className="remove-button btn btn-warning" onClick={()=>removeItem(item.id)}>Borrar item</button></td>
                </tr>
            )}
          </tbody>
        </table>
        <p className='monto-total'>Monto total: ${totalPrice}</p>
        <button className="clean-button btn btn-danger" onClick={clear}>Vaciar Carrito</button>
      </div>
      : <p>El carrito está vacío</p>
      } 
    </div>
  )
}

export default Cart