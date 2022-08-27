import React, { useState } from 'react'
import './Checkout.css'
import { addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Checkout = () => {
    const {cart, clear, totalPrice} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [client, setClient] = useState({})
    const [sameMail, setSameMail] = useState(false)
    const navigate = useNavigate()

    const setUser = (event) => {
        setClient({
            ...client, 
            [event.target.name]: event.target.value
        })
    }

    const validateEmail = (event) =>{
        if (event.target.value === client.email){
            setSameMail(true)
        }else setSameMail(false)
    }

    const sendOrder = (event) =>{
        event.preventDefault()
        if(Object.values(client).length !== 3 || cart.length < 1){
            alert('uy! algo salió mal :(')
            navigate('/')
        }else{
            const newOrder = {
                buyer: client, 
                items: cart,
                date: serverTimestamp(),
                total: totalPrice()
            }
            const db = getFirestore()
            const ordersCollection = collection(db, 'orders')
            addDoc(ordersCollection, newOrder)
                .then(({ id })=>{ 
                  console.log(id)
                  console.log(newOrder)
                  setOrderId(id)
                })
                .catch((error)=> console.error(error))
                .finally(()=>clear())
        }
    }

  return (
    <div className='checkout-container'>
    {!orderId ?
        <div>
            <h2 className='checkout-title'>Datos de contacto</h2>
            <p className="checkout-text">¡Ya casi! completá con tus datos para concretar la compra</p>
            <div className="form-container">
                <form onSubmit={sendOrder}>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" name='name' required onChange={setUser} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" className="form-control" aria-describedby="phoneHelp" name='phone' required onChange={setUser}/>
                        <div id="phoneHelp" className="form-text">No compartiremos tus datos con nadie.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">E-mail</label>
                        <input type="email" className="form-control" name='email' required onChange={setUser}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Confirmar e-mail</label>
                        <input type="email" className="form-control" name='confirm-email' required onChange={validateEmail}/>
                        {!sameMail ? 
                        <div className="form-text text-danger">Los emails ingresados deben coincidir</div>
                        :<div className="form-text text-success">los emails coinciden</div>}
                    </div>
                    <button type="submit" className="btn btn-primary" 
                        disabled={!client.email || !client.name || !client.phone || !sameMail}>Enviar
                    </button>
                </form>
            </div>
            <Table responsive="xl" striped borderless variant="dark" className='checkout-table align-middle'>
                <tbody>
                    {cart.map((item)=>
                        <tr key={item.id} id='items-row-checkout'>
                            <td id='item-title-checkout'>{item.title}</td>
                            <td id='item-quantity'>{item.quantity} {item.quantity > 1 ? 'unidades' : 'unidad'}</td>
                        </tr>
                    )}
                    <tr> 
                    <td
                        className='monto-total'
                        style={{padding:'1rem'}}>
                        Monto total
                    </td>
                    <td className='monto-total'>
                        <strong>${totalPrice()}</strong>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    :<div className="thanks-container">
        <h3 className='thanks-message'>¡Gracias por comprar con nosotros!</h3>
        <p className='order-id'>Guardá el siguiente código: <strong>{orderId}</strong></p>
        <button className='btn btn-primary to-home-btn' onClick={()=>navigate('/')}>Volver al inicio</button>
    </div>}
    </div>
  )
}

export default Checkout