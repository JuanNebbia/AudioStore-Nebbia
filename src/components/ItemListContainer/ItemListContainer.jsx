import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { getItem } from '../../mock/data'
import { useParams } from 'react-router-dom'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        getItem
        .then((data)=> {
            if (!categoryId){
                setProducts(data)
            }else{
                setProducts(data.filter((item)=>item.genres.includes(categoryId)))
            }
        })  
        .then(console.log(products))
        .catch((err)=> console.log(err))
        .finally(setLoading(false))
    }, [categoryId])

    return (
        <div className='item-list-container'>
            <h3 className="greeting">{props.greeting}</h3>
            {loading ? <h3>Cargando productos</h3> : <ItemList items = {products} />}
        </div>
    )
}

export default ItemListContainer;