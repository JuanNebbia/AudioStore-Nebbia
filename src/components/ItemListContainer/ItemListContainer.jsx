import ItemList from '../ItemList/ItemList'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(()=>{
        const db = getFirestore()
        const itemsCollection = collection(db, "items")
        getDocs(itemsCollection)
        .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}) )
                if (!categoryId){
                    setProducts(data)
                }else{
                    setProducts(data.filter((item)=>item.genres.includes(categoryId)))
                    }
            })
        .catch((err) => console.log(err))
        .finally(setLoading(false))
        },[categoryId])



    //  useEffect(()=>{
    //      fetch('https://62e16660e8ad6b66d848fbe1.mockapi.io/api/products')
    //      .then((res) => res.json())
    //      .then((data)=> {
    //          if (!categoryId){
    //              setProducts(data)
    //          }else{
    //              setProducts(data.filter((item)=>item.genres.includes(categoryId)))
    //          }
    //      })  
    //      .catch((err)=> console.log(err))
    //      .finally(setLoading(false))
    //  }, [categoryId])

    return (
        <div className='item-list-container-container' style={{minHeight: '100vh'}}>
        { loading ? 
            <Loader /> 
            : <ItemList items = {products} categoryId= {categoryId}/>
        }
        </div>
    )
}

export default ItemListContainer;