import { useState } from "react"
import './ItemCount.css'

const ItemCount = ({ stock, initial }) =>{
    const [cantidad, setCantidad] = useState(initial)
    const minWarn = document.getElementById("stock-min")
    const maxWarn = document.getElementById("stock-max")

    const sumar = () =>{
        if (cantidad < stock){
            setCantidad(cantidad + 1)
            minWarn.setAttribute('style', 'display:none')
        }else{
            maxWarn.setAttribute('style', 'display:block')
        }
    }

    const restar = () =>{
        if (cantidad > 1){
            setCantidad(cantidad - 1)
            maxWarn.setAttribute('style', 'display:none')
        }else{
            minWarn.setAttribute('style', 'display:block')
        }
     }


    return(
        <div>
            <div className='contador-container'>
                <button onClick={restar} className='btn-resta'>-</button>
                <p className='contador'>{cantidad}</p>
                <button onClick={sumar} className='btn-suma'>+</button>
            </div>
            <p id="stock-min">¡No puedes seleccionar menos de un producto!</p>
            <p id="stock-max">¡Stock máximo del producto!</p>
        </div>
    )
}

export default ItemCount