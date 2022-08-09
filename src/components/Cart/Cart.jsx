import React, { useContext, useState} from 'react'
import './Cart.css'
import { CartContext } from '../../context/CartContext'
import { Col, Row, Table, Toast, ToastContainer } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext)
  const [show, setShow] = useState(false);

  const purchase = () =>{
    setShow(true)
    clear()
  }


  return (
    <div className="cart-container">
      <h2 className='cart-title'>Carrito</h2>
      {cart.length > 0 ?
      <div> 
        <Table responsive="xl" striped borderless variant="light" className='cart-table align-middle'>
          <thead>
            <tr>
              <th scope='col' style={{paddingLeft: '1rem', borderTopLeftRadius:'10px'}}>Item</th>
              <th scope='col'>Cantidad</th>
              <th scope='col'>Precio</th>
              <th scope='col'>Subtotal</th>
              <th scope='col' style={{borderTopRightRadius:'10px'}}></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item)=>
                <tr key={item.id} style={{height:'fit-content'}}>
                  <td id='item-full-title' style={{paddingLeft: '1rem', fontSize: '0.9rem'}}>
                    <span className='item-title'>{item.title}</span>
                      de {item.artist}
                  </td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <button className="remove-button btn btn-warning" onClick={()=>removeItem(item.id)}>Borrar item</button>
                  </td>
                </tr>
            )}
            <tr> 
              <td colSpan={5} 
                className='monto-total' 
                style={{color: '#e41', padding: '1rem', borderBottomLeftRadius:'10px', borderBottomRightRadius:'10px'}}>
                Monto total: <strong>${totalPrice()}</strong>
              </td>
            </tr>
          </tbody>
        </Table>
        <div className="cart-buttons">
          <button className="purchase-button btn btn-success" onClick={purchase}>Comprar Todo</button>
          <button className="clean-button btn btn-danger" onClick={clear}>Vaciar Carrito</button>
          <button className='btn btn-primary'>
              <Link to={'/'} className="cart-to-products">Volver a los productos</Link>
          </button>
        </div>
      </div>
      : <div className='no-cart'>
          <p className='empty-cart-text'>El carrito está vacío</p>
          <button className='btn btn-primary'>
            <Link to={'/'} className="cart-to-products">Ir a los productos</Link>
          </button>
        </div>
      } 
      <ToastContainer className='purchase-toast-container'>
        <Row>
            <Col>
                <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
                <Toast.Header>
                    <strong className="me-auto purchase-toast-title">¡Genial!</strong>
                </Toast.Header>
                <Toast.Body className="purchase-toast-text">Su compra se realizó exitosamente</Toast.Body>
                </Toast>
            </Col>
        </Row>
      </ToastContainer>
    </div>
    
  )
}

export default Cart