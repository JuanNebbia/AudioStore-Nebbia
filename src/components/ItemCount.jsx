import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd}) =>{
    const [cantidad, setCantidad] = useState(initial)
    const [minimo, setMinimo] = useState(false)

    const sumar = () =>{
        setMinimo(false)
        if (cantidad < stock){
            setCantidad(cantidad + 1)
        }
    }

    const restar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
        }else{
            setMinimo(true)
        }
     }


    return(
        <div className="item-count-container">
            <div className='contador-container'>
                <button onClick={restar} className='btn-resta'>-</button>
                <p className='contador'>{stock > 0 ? cantidad : '0'}</p>
                <button onClick={sumar} className='btn-suma'>+</button>
            </div>
            <div className="warning-container">
                {minimo && <p className="warning">¡No puedes seleccionar menos de un producto!</p>}
                {cantidad === stock && <p className="warning">¡Stock máximo del producto!</p>}
                {stock === 0 && <p className="warning">Este producto se encuentra agotado</p> }
            </div>
            <div className="btn-comprar-container">
                <button 
                    onClick={()=>{onAdd(cantidad); setMinimo(false)}} 
                    className={stock > 0 ? 'btn btn-success' : 'btn btn-success disabled'}>
                    Comprar
                </button>
            </div>
        </div>
    )
}

export default ItemCount