import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(()=>{
    fetch(`https://62e16660e8ad6b66d848fbe1.mockapi.io/api/products/${itemId}`)
    .then((res) => res.json())
      .then((data)=> setProductDetail(data))
      .catch((err)=> console.log(err))
      .finally(setLoading(false))
  },[itemId])


    return (
        <>
          { loading ? 
            <Loader />
            : <ItemDetail productDetail = {productDetail}/>
          }
        </>
  )
}

export default ItemDetailContainer
