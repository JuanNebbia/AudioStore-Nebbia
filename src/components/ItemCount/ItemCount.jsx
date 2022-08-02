import { useState } from "react"
import { Link } from "react-router-dom"
import './ItemCount.css'

const ItemCount = ({ stock, onAdd}) =>{
    const [cantidad, setCantidad] = useState(1)

    const sumar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const restar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }
     }


    return(
        <div className="item-count-container">
            <div className='contador-container'>
                <button onClick={restar} disabled={cantidad<=1} className='btn-resta'>-</button>
                <p className='contador'>{stock > 0 ? cantidad : '0'}</p>
                <button onClick={sumar} disabled={cantidad>=stock} className='btn-suma'>+</button>
            </div>
            <div className="warning-container">
                {cantidad === stock && <p className="stock">¡Stock máximo del producto!</p>}
                {stock === 0 && <p className="warning">Este producto se encuentra agotado</p> }
            </div>
            <div className="btn-comprar-container">
                <button 
                    onClick={()=>{onAdd(cantidad)}} 
                    className='btn btn-add'
                    disabled={stock === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount