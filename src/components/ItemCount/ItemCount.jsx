import './ItemCount.css'
import Badge from 'react-bootstrap/Badge'

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
                <div className='contador'>{stock > 0 ? count : '0'}</div>
                <button onClick={sumar} disabled={count>=stock} className='btn-suma'>+</button>
            </div>
            <div className="warning-container">
                {count === stock && <Badge pill bg="primary">Stock disponible del producto</Badge>}
                {stock === 0 && <Badge pill bg="danger">Este producto se encuentra agotado</Badge>}
            </div>
            <div className="btn-add-container">
                <button 
                    onClick={()=>{onAdd(count)}} 
                    className='btn btn-add'
                    hidden={stock === 0}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}

export default ItemCount