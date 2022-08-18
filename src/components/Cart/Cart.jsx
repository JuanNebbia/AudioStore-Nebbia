import React from 'react'
import './Cart.css'
import { Table } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';;

const Cart = ({items}) => {
  const { cart, clear, removeItem, totalPrice } = items
  const navigate = useNavigate()

  return (
    <div className="cart-container">
      <h2 className='cart-title'>Carrito</h2>
      {cart.length > 0? 
      <div>
        <Table responsive="xl" striped borderless variant="secondary" className='cart-table align-middle' style={{textAlign:'center'}}>
          <thead>
            <tr className='main-row'>
              <th scope='col' colSpan={2} style={{paddingLeft: '1rem'}}>Item</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Subtotal</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item)=>
                <tr key={item.id}>
                  <td >
                    <img src={item.pictureUrl} 
                    className='cart-item-img' 
                    alt={item.title} 
                    onClick={()=>navigate(`/item/${item.id}`)} />
                  </td>
                  <td id='item-full-title' style={{paddingLeft: '1rem', fontSize: '0.9rem',textAlign:'start'}}>
                    <span className='item-title'>{item.title}</span>
                    <br/>
                      {item.artist}
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-bottom">
                            Descatar Item
                        </Tooltip>
                      }
                    >
                      <button className="remove-button" onClick={()=>removeItem(item.id)}>
                        <RiCloseLine />
                      </button>
                    </OverlayTrigger>
                  </td>
                </tr>
            )}
            <tr> 
              <td colSpan={2}
                className='monto-total'
                style={{padding:'2rem'}}>
                Monto total
              </td>
              <td colSpan={3} className='monto-total'>
                <strong>${totalPrice()}</strong>
              </td>
              <td>
                <button className="clean-button btn btn-danger" onClick={clear}>Vaciar Carrito</button>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="cart-buttons">
          <button className="purchase-button btn btn-success" onClick={()=>navigate('/checkout')}>Comprar Todo</button>
          <button className='btn btn-primary'>
              <Link to={'/'} className="cart-to-products">Volver a los productos</Link>
          </button>
        </div>
      </div>
       : <div className='no-cart'>
          <p className='empty-cart-text'>El carrito está vacío</p>
          <button className='btn btn-primary'>
            <Link to={'/'} className="cart-to-products">Volver al inicio</Link>
          </button>
        </div>
      } 
    </div>
    
  )
}

export default Cart