import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd}) =>{
    const [cantidad, setCantidad] = useState(initial)

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
                {cantidad > 1 ?
                <button onClick={restar} className='btn-resta'>-</button> :
                <button onClick={restar} className='btn-resta-disabled'>-</button>}
                <p className='contador'>{stock > 0 ? cantidad : '0'}</p>
                <button onClick={sumar} className='btn-suma'>+</button>
            </div>
            <div className="warning-container">
                {cantidad === stock && <p className="stock">¡Stock máximo del producto!</p>}
                {stock === 0 && <p className="warning">Este producto se encuentra agotado</p> }
            </div>
            <div className="btn-comprar-container">
                <button 
                    onClick={()=>{onAdd(cantidad)}} 
                    className={stock > 0 ? 'btn btn-add' : 'btn btn-add disabled'}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount