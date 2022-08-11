import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
  const [productDetail, setProductDetail] = useState({})
  const [loading, setLoading] = useState(true)
  const {itemId} = useParams()

  useEffect(()=>{
    const db = getFirestore()
    const itemRef = doc(db, "items", itemId)
    getDoc(itemRef)
      .then((snapshot) => {
        if(snapshot.exists()){
          const data = {id: snapshot.id, ...snapshot.data()}
          setProductDetail(data)
        }
      })
      .catch((err) => console.log(err))
      .finally(setLoading(false))
    },[itemId])

    return (
        <>
          { loading ? <Loader />: <ItemDetail productDetail = {productDetail}/> }
        </>
  )
}

export default ItemDetailContainer
