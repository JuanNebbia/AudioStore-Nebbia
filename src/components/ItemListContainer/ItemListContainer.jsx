import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getItem } from '../../mock/data'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItem
        .then((data)=> setProducts(data))
        .then(console.log(products))
        .catch((err)=> console.log(err))
        .finally(setLoading(false))
    }, [])

    return (
        <div className='item-list-container'>
            <h3 className="greeting">{props.greeting}</h3>
            {loading ? <p>Cargando productos</p> : <ItemList items = {products} />}
        </div>
    )
}

export default ItemListContainer;