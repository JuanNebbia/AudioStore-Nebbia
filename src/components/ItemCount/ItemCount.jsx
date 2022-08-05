import './ItemCount.css'

const ItemCount = ({ stock, onAdd, count, setCount}) =>{

    const sumar = () =>{
        if (count < stock){
            setCount(count + 1)
        }
    }

    const restar = () =>{
        if (count > 1){
            setCount(count - 1)
        }
     }


    return(
        <div className="item-count-container">
            <div className='contador-container'>
                <button onClick={restar} disabled={count<=1} className='btn-resta'>-</button>
                <p className='contador'>{stock > 0 ? count : '0'}</p>
                <button onClick={sumar} disabled={count>=stock} className='btn-suma'>+</button>
            </div>
            <div className="warning-container">
                {count === stock && <p className="stock">¡Stock máximo del producto!</p>}
                {stock === 0 && <p className="warning">Este producto se encuentra agotado</p> }
            </div>
            <div className="btn-comprar-container">
                <button 
                    onClick={()=>{onAdd(count)}} 
                    className='btn btn-add'
                    disabled={stock === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount