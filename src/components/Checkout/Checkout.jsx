import React, { useState } from 'react'
import './Checkout.css'
import { addDoc, collection, getFirestore, serverTimestamp} from "firebase/firestore";
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const {cart, clear, totalPrice} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [client, setClient] = useState({})
    const navigate = useNavigate()

    const setUser = (event) => {
        setClient({
            ...client, 
            [event.target.name]: event.target.value
        })
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
                .finally(clear())
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
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' required onChange={setUser}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Teléfono</label>
                        <input type="text" className="form-control" aria-describedby="phoneHelp" name='phone' required onChange={setUser}/>
                        <div id="phoneHelp" className="form-text">No compartiremos tus datos con nadie.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    :<div className="thanks-container">
        <h3 className='thanks-message'>¡Gracias por comprar con nosotros!</h3>
        <p className='order-id'>Guardá el siguiente código: {orderId}</p>
        <button className='btn btn-primary to-home-btn' onClick={()=>navigate('/')}>Volver al inicio</button>
    </div>}
    </div>
  )
}

export default Checkout