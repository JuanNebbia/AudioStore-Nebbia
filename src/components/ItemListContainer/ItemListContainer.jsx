import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        fetch('https://62e16660e8ad6b66d848fbe1.mockapi.io/api/products')
        .then((res) => res.json())
        .then((data)=> {
            if (!categoryId){
                setProducts(data)
            }else{
                setProducts(data.filter((item)=>item.genres.includes(categoryId)))
            }
        })  
        .catch((err)=> console.log(err))
        .finally(setLoading(false))
    }, [categoryId])

    return (
        <div className='item-list-container'>
        { loading ? 
            <Loader /> 
            : <ItemList items = {products} categoryId= {categoryId} loading={loading}/>
        }
        </div>
    )
}

export default ItemListContainer;