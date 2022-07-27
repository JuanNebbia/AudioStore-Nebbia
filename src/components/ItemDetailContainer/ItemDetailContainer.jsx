import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getItem } from '../../mock/data'


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const [itemId, setItemId] = useState("2")

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
