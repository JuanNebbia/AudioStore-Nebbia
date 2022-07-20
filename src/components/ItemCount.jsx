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
                <p className='contador'>{cantidad}</p>
                <button onClick={sumar} className='btn-suma'>+</button>
            </div>
            <div className="warnings">
                {minimo && <p id="stock-min">¡No puedes seleccionar menos de un producto!</p>}
                {cantidad === stock && <p id="stock-max">¡Stock máximo del producto!</p>}
            </div>
            <div className="btn-comprar-container">
                <button onClick={()=>{onAdd(cantidad); setMinimo(false)}} className='btn btn-success'>Comprar</button>
            </div>
        </div>
    )
}

export default ItemCount