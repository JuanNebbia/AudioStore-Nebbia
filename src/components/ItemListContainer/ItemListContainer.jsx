import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { data } from '../../mock/data'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(true)

    const onAdd = (cantidad) =>{
        if (cantidad > 1){
            alert (`usted ha comprado ${cantidad} productos`)
        } else{
            alert (`usted ha comprado ${cantidad} producto`)
        }
    }

    useEffect(()=>{
        data.then((res)=>setProducts(res))
        .catch((err)=>setMessage(`ha ocurrido un error: ${err}`))
        .finally(setLoading(false))
    }, [])

    return (
        <div className='item-list-container'>
            <h3 className="greeting">{props.greeting}</h3>
            <ItemCount 
            initial = {1}
            stock = {5}
            onAdd = {onAdd} />
            {loading ? <p>Cargando productos</p> : <ItemList items = {products} />}
        </div>
    )
}

export default ItemListContainer;