import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../../mock/data'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

    useEffect(()=>{
        getItem
        .then((data)=> setProductDetail(data.find((item)=>item.id===itemId)))
        .then(console.log(productDetail))
        .catch((err)=> console.log(err))
        .finally(setLoading(false))
    },[])

    return (
        <>
            <ItemDetail productDetail = {productDetail}/>
            {loading && <p>Cargando...</p>}
        </>
  )
}

export default ItemDetailContainer
